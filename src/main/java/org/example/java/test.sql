CREATE TABLE Author
(
    author_id   SERIAL PRIMARY KEY,
    name        VARCHAR(100) NOT NULL,
    birth_date  DATE,
    nationality VARCHAR(50)
);

INSERT INTO Author (name, birth_date, nationality)
VALUES ('Тарас Шевченко', '1814-03-09', 'Україна'),
       ('Іван Франко', '1856-08-27', 'Україна'),
       ('Леся Українка', '1871-02-25', 'Україна'),
       ('Панас Мирний', '1849-05-13', 'Україна');


CREATE TABLE Book
(
    book_id      SERIAL PRIMARY KEY,
    title        VARCHAR(200) NOT NULL,
    genre        VARCHAR(50),
    publish_year INT
);

INSERT INTO Book (title, genre, publish_year)
VALUES ('Кобзар', 'Поезія', 1840),
       ('Гайдамаки', 'Поезія', 1841),
       ('Захар Беркут', 'Роман', 1883),
       ('Старий і молодий', 'Роман', 1890),
       ('Лісова пісня', 'Драма', 1911),
       ('На полі крові', 'Драма', 1900),
       ('Хіба ревуть воли, як ясла повні?', 'Роман', 1880),
       ('Повія', 'Роман', 1884);


CREATE TABLE Author_Book
(
    author_id INT NOT NULL,
    book_id   INT NOT NULL,
    PRIMARY KEY (author_id, book_id),
    FOREIGN KEY (author_id) REFERENCES Author (author_id) ON DELETE CASCADE,
    FOREIGN KEY (book_id) REFERENCES Book (book_id) ON DELETE CASCADE
);

INSERT INTO Author_Book (author_id, book_id)
VALUES (1, 1),
       (1, 2),
       (2, 3),
       (2, 4),
       (3, 5),
       (3, 6),
       (4, 7),
       (4, 8);