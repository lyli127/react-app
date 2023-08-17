DROP TABLE IF EXISTS restaurants CASCADE;

CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    slug TEXT NOT NULL UNIQUE,
    latitude NUMERIC,
    longitude NUMERIC,
    -- address VARCHAR(255),
    -- phone_number VARCHAR(20),
    -- opening_hours VARCHAR(100)
);

INSERT INTO restaurants(name, slug) VALUES('IIKO Mazesoba', 'iiko-mazesoba');
INSERT INTO restaurants(name, slug) VALUES('Kosuke', 'kosuke');
INSERT INTO restaurants(name, slug) VALUES('Manpuku', 'manpuku');
INSERT INTO restaurants(name, slug) VALUES('Ippudo', 'ippudo');
INSERT INTO restaurants(name, slug) VALUES('Gumshara', 'gumshara');
INSERT INTO restaurants(name, slug) VALUES('Spanish SAKABA', 'spanish-sakaba');
INSERT INTO restaurants(name, slug) VALUES('Hakatamon', 'hakatamon');


-- CREATE TABLE restaurants (
--     id SERIAL PRIMARY KEY,
--     name VARCHAR(255),
--     address VARCHAR(255),
--     phone_number VARCHAR(20),
--     opening_hours VARCHAR(100)
-- );

-- CREATE TABLE reviews (
--     id SERIAL PRIMARY KEY,
--     restaurant_id INTEGER REFERENCES restaurants(id),
--     reviewer_name VARCHAR(50),
--     rating INTEGER,
--     comment TEXT
-- );
