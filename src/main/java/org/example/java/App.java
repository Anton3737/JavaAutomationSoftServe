

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.safari.SafariDriver;

import java.time.Duration;

public class App {
    public static final long IMPLICITLY_WAIT_SECONDS = 10;

    public static void main(String[] args) throws InterruptedException {
        System.out.println("Hello");
        //
//        System.setProperty("webdriver.safari.driver", "lib/selenium-safari-driver-4.35.0.jar");
        //
//        WebDriver driver = new ChromeDriver();
        WebDriver driver = new SafariDriver();
        //driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(IMPLICITLY_WAIT_SECONDS)); // 0 by default
        driver.manage().window().maximize();
        //
        driver.get("https://google.com/");
        driver.get("https://www.bing.com/");
        Thread.sleep(4000); // For Presentation
        //
        driver.findElement(By.name("q")).sendKeys("mac");
        Thread.sleep(4000); // For Presentation
        //
        //driver.findElement(By.cssSelector("button[type='submit']")).click();
        driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
        //
        Thread.sleep(8000); // For Presentation
        driver.quit();
    }

}
