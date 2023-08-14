DROP TABLE IF EXISTS users;
CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      first_name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password_hash TEXT,
      ramen_type_pref TEXT,
      noodle_text_pref TEXT,
      broth_type_pref TEXT,
      avatar_url TEXT 
);
INSERT INTO users(first_name, email, password_hash, ramen_type_pref, noodle_text_pref, broth_type_pref, avatar_url)
VALUES('Test1', 'test@example.com', 'password123', 'Tonkotsu', 'Firm', 'Pork', 'https://i.imgur.com/1XZVYVw.jpg');
INSERT INTO users(first_name, email, password_hash, ramen_type_pref, noodle_text_pref, broth_type_pref, avatar_url)
VALUES('Test2', 'test2@example.com', 'password123', 'Miso', 'Very Firm', 'Chicken', 'https://i.imgur.com/1XZVYVw.jpg');
INSERT INTO users(first_name, email, password_hash, ramen_type_pref, noodle_text_pref, broth_type_pref, avatar_url)
VALUES('Test3', 'test3@example.com', 'password123', 'Shoyu', 'Soft', 'Beef', 'https://i.imgur.com/1XZVYVw.jpg');


-- ALTER TABLE table_name
-- ADD CONSTRAINT constraint_name UNIQUE (column1);

