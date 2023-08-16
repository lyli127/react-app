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
      chashu_type TEXT NOT NULL,
      chashu_score INTEGER NOT NULL,
      ajitama TEXT NOT NULL,
      ajitama_score INTEGER NOT NULL,
      other_notes TEXT,
      date_visited DATE NOT NULL,
);

INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('IIKO', 'Original', 'https://cdn.shopify.com/s/files/1/0539/9635/5765/files/Mask_Group_4.jpg?v=1671428992', 'Shoyu', 10, 'Firm', 10, 'Brothless', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('Gumshara', 'Black Garlic', 'https://media.timeout.com/images/103879549/750/422/image.jpg ', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('Ippudo', 'Kuro', 'http://ippudo.com.au/wp/wp-content/themes/ippudo-theme/images/menu/m_shiromaru_motoaji.png', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('Kosuke', 'Tonkotsu Signature', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6FjIJnLqxoQudq-QKOSR71IgqI3KoXJm1V4y4lYaSZKxWd44UMEd7PU-GYJjJIqzv828&usqp=CAU', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('Hakatamon', 'Miso', 'https://placehold.co/180x100/grey/FFF?font=playfair-display&text=Hakatamon', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('Hakatamon', 'Miso', 'https://placehold.co/180x100/grey/FFF?font=playfair-display&text=Hakatamon', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('Spanish SAKABA', 'Wagyu Oxtail', 'https://i.imgur.com/7kvvyzH.jpg', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('Hakatamon', 'Original', 'https://www.darlingharbour.com/getmedia/8df62a87-de5d-41c8-887d-5b4ec3827f78/hakatu-maruramen_darlingsquare_product-2.jpg', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('IIKO', 'Unagi Mazesoba', 'https://placehold.co/180x100/grey/FFF?font=playfair-display&text=IIKO', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);
INSERT INTO ramen(restaurant_name, dish_name, photo_url, ramen_type, ramen_score, noodle_texture, noodle_score, broth_type, broth_score, chashu_type, chashu_score, ajitama, ajitama_score, other_notes, date_visited)
VALUES('IIKO', 'XO Piggy Mazesoba', 'https://cdn.shopify.com/s/files/1/0539/9635/5765/files/Mask_Group_4.jpg?v=1671428992', 'Shoyu', 10, 'Firm', 10, 'No Broth', 10, 'Pork', 10, 'Onseng', 10, 'Best ramen in town', '2019-01-01', 1);