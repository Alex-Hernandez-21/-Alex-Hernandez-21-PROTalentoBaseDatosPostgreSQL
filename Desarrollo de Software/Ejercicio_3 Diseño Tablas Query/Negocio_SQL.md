CREATE TABLE IF NOT EXISTS providers (
provider_id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL,
identificationProvider VARCHAR(12) UNIQUE NOT NULL,
city VARCHAR(22) NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
category_id SERIAL PRIMARY KEY,
name VARCHAR(15) NOT NULL,
codeCategory VARCHAR(12) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS orders (
order_id SERIAL PRIMARY KEY,
provider_id INT,
amount VARCHAR(15) NOT NULL,
codeOrder VARCHAR(12) UNIQUE NOT NULL,
dateOrder DATE NOT NULL,
FOREIGN KEY (provider_id)
REFERENCES providers(provider_id)
);

CREATE TABLE IF NOT EXISTS parts (
codePart VARCHAR(12) UNIQUE NOT NULL,
order_id INT,
category_id INT,
name VARCHAR(30) NOT NULL,
color VARCHAR(15) NOT NULL,
price INT NOT NULL,
FOREIGN KEY (order_id)
REFERENCES orders(order_id),
FOREIGN KEY (category_id)
REFERENCES categories(category_id)
);
