-- Drop table if it exists
DROP TABLE IF EXISTS songs;

-- songs table
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    artist VARCHAR(255) NOT NULL,
    album VARCHAR(255),
    year INTEGER,
    genre VARCHAR(100),
    duration VARCHAR(10),
    image VARCHAR(500),
    description TEXT,
    submittedBy VARCHAR(255),
    submittedOn DATE
);

--song data
INSERT INTO songs (title, artist, album, year, genre, duration, image, description, submittedBy, submittedOn) VALUES
('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', 1975, 'Rock', '5:55', '/public/images/queen.jpg', 'A groundbreaking six-minute suite, consisting of several sections without a chorus: an intro, a ballad segment, an operatic passage, a hard rock part and a reflective coda.', 'MusicLover99', '2024-01-15'),
('Billie Jean', 'Michael Jackson', 'Thriller', 1982, 'Pop', '4:54', '/public/images/billie-jean.jpg', 'A post-disco and R&B song with lyrics about a woman who claims that the narrator is the father of her son, which he denies.', 'PopKing', '2024-01-16'),
('Imagine', 'John Lennon', 'Imagine', 1971, 'Soft Rock', '3:03', '/public/images/imagine.jpg', 'A song that encourages listeners to imagine a world of peace, without materialism, without borders separating nations and without religion.', 'PeaceTrain', '2024-01-17'),
('Like a Rolling Stone', 'Bob Dylan', 'Highway 61 Revisited', 1965, 'Folk Rock', '6:13', '/public/images/like-a-rolling-stone.jpg', 'A revolutionary song that transformed popular music with its poetic lyrics, cynical tone, and innovative structure.', 'FolkLegend', '2024-01-18'),
('Smells Like Teen Spirit', 'Nirvana', 'Nevermind', 1991, 'Grunge', '5:01', '/public/images/smells-like-teen-spirit.jpg', 'The song that brought grunge and alternative rock to the mainstream, featuring a quiet verse/loud chorus dynamic and Kurt Cobain''s raw vocals.', 'GrungeFan', '2024-01-19'),
('Nueva Vida', 'Peso Pluma', 'Genesis', 2023, 'Regional Mexicano', '3:11', '/public/images/nueva-vida.jpg', 'a melodic corrido tumbado reflecting on his rapid rise to fame, new luxuries, and personal growth.', 'Double P Records', '2023-06-22');