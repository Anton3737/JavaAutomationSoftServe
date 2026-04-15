package okHttpHomeWork;

import okhttp3.*;
import org.json.JSONArray;
import org.json.JSONObject;

import java.io.IOException;
import java.time.Duration;

public class OkHttpService {

    private final OkHttpClient client;
    public static final String BASE_URL = "https://greencity.greencity.cx.ua";
    public static final String AUTH_URL = "https://greencity-user.greencity.cx.ua/ownSecurity/signIn";
    public static final String EMAIL = " ";
    public static final String PASSWORD = " ";
    public static final MediaType JSON = MediaType.get("application/json; charset=utf-8");

    public OkHttpService() {
        this.client = new OkHttpClient.Builder()
                .connectTimeout(Duration.ofSeconds(10))
                .writeTimeout(Duration.ofSeconds(10))
                .readTimeout(Duration.ofSeconds(30))
                .followRedirects(true)
                .build();
    }

    //ЛОГІНІЗАЦІЯ (POST)
    public String login(String email, String password) throws IOException {
        String jsonPayload = String.format(
                "{\"email\":\"%s\",\"password\":\"%s\",\"projectName\":\"GREENCITY\"}",
                email,
                password
        );
        RequestBody body = RequestBody.create(jsonPayload, JSON);

        Request request = new Request.Builder()
                .url(AUTH_URL)
                .post(body)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) throw new IOException("Login failed: " + response.code());

            String responseBody = response.body().string();

            JSONObject jsonObject = new JSONObject(responseBody);

            String token = jsonObject.getString("accessToken");

            return token;
        }
    }

    //ОТРИМАННЯ АКТИВНИХ КОМЕНТАРІВ (GET)
    public String getActiveComments(String accessToken, int newsId) throws IOException {
        HttpUrl url = HttpUrl.parse(BASE_URL + "/eco-news/" + newsId + "/comments/active").newBuilder()
                .addQueryParameter("page", "0")
                .addQueryParameter("size", "10")
                .build();

        Request request = new Request.Builder()
                .url(url)
                .get()
                .addHeader("Authorization", "Bearer " + accessToken)
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (!response.isSuccessful()) ;
            String responseBody = response.body().string();
            JSONObject fullResponse = new JSONObject(responseBody);

            JSONArray commentsArray = fullResponse.getJSONArray("page");
            for (int i = 0; i < commentsArray.length(); i++) {
                JSONObject comment = commentsArray.getJSONObject(i);

                int id = comment.getInt("id");
                String text = comment.getString("text");
                String date = comment.getString("createdDate");
                int likes = comment.getInt("likes");

                JSONObject author = comment.getJSONObject("author");
                int authorId = author.getInt("id");
                String authorName = author.getString("name");

                System.out.println("Коментар №" + (i + 1));
                System.out.println("ID: " + id);
                System.out.println("Автор id : " + authorId + " Користувач => :" + authorName);
                System.out.println("Текст: " + text);
                System.out.println("Дата: " + date);
                System.out.println("Лайки: " + likes + "\n");
            }
            return response.body().string();
        }
    }

    //ВИДАЛЕННЯ КОМЕНТАРЯ (DELETE)
    public void deleteComment(String accessToken, int commentId) throws IOException {
        String url = BASE_URL + "/eco-news/comments/" + commentId;
        System.out.println(url);
        Request request = new Request.Builder()
                .url(url)
                .addHeader("Authorization", "Bearer " + accessToken)
                .delete()
                .build();

        try (Response response = client.newCall(request).execute()) {
            if (response.isSuccessful()) {
                System.out.println("Коментар " + commentId + " видалено успішно і отримав статус код: " + response.code());
            } else {
                System.out.println("Не вдалося видалити коментар. Код: " + response.code());
            }
        }
    }

    public void shutdown() {
        client.dispatcher().executorService().shutdown();
        client.connectionPool().evictAll();
    }

    public static void main(String[] args) throws IOException {
        OkHttpService service = new OkHttpService();
        try {
            // 1. Отримуємо токен
            String token = service.login(EMAIL, PASSWORD);
            System.out.println("Token received: " + token);

            System.out.println("\n");

            // 2. Використовуємо токен для отримання коментарів
            String comments = service.getActiveComments(token, 10375);
            System.out.println("Comments: " + comments);

            // 3. Видаляємо коментар
            service.deleteComment(token, 5545);

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            service.shutdown();
        }
    }
}