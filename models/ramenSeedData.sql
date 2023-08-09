DROP TABLE IF EXISTS ramen;
CREATE TABLE ramen(
      id SERIAL PRIMARY KEY,
      restaurant_name TEXT NOT NULL,
      dish_name TEXT NOT NULL,
      photo_url TEXT NOT NULL,
      ramen_type TEXT NOT NULL,
      ramen_score INTEGER NOT NULL,
      noodle_texture TEXT NOT NULL,
      noodle_score INTEGER NOT NULL,
      broth_type TEXT NOT NULL,
      broth_score INTEGER NOT NULL,
      chashu_type TEXT,
      chashu_score INTEGER,
      ajitama TEXT,
      ajitama_score INTEGER,
      other_notes TEXT,
      date_visited DATE NOT NULL,
      user_id INTEGER REFERENCES users(id)
);

INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited, user_id)
VALUES('IIKO', 'Original', 'https://s3', 'Shoyu', 10, 'Firm', 10, 'Brothless', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited, user_id)
VALUES('IIKO', 'Original', 'https://s3', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited, user_id)
VALUES('IIKO', 'Original', 'https://s3', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);