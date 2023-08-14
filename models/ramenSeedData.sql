DROP TABLE IF EXISTS ramen;
CREATE TABLE ramen(
      id SERIAL PRIMARY KEY,
      restaurant_name TEXT NOT NULL,
      dish_name TEXT,
      photo_url TEXT,
      ramen_type TEXT,
      ramen_score INTEGER,
      noodle_texture TEXT,
      noodle_score INTEGER,
      broth_type TEXT,
      broth_score INTEGER,
      chashu_type TEXT,
      chashu_score INTEGER,
      ajitama TEXT,
      ajitama_score INTEGER,
      other_notes TEXT,
      date_visited DATE,
      user_id INTEGER REFERENCES users(id)
);

INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited, user_id)
VALUES('IIKO', 'Original', '"https://placehold.co/180x100/grey/FFF?font=playfair-display&text=IIKO"', 'Shoyu', 10, 'Firm', 10, 'Brothless', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited, user_id)
VALUES('IIKO', 'Original', '"https://placehold.co/180x100/grey/FFF?font=playfair-display&text=Gumshara"', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited, user_id)
VALUES('IIKO', 'Original', '"https://placehold.co/180x100/grey/FFF?font=playfair-display&text=Kosuke"', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited, user_id)
VALUES('IIKO', 'Original', '"https://placehold.co/180x100/grey/FFF?font=playfair-display&text=Ippudo"', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited, user_id)
VALUES('IIKO', 'Original', '"https://placehold.co/180x100/grey/FFF?font=playfair-display&text=Hakatamon"', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);