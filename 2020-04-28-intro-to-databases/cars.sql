-- How many sedans are for sale?
SELECT * FROM cars
WHERE "bodyStyle" = 'sedan';

-- How many trucks are for sale?
SELECT * FROM cars
WHERE "bodyStyle" = 'truck';

-- How many blue Toyotas under 30k miles are for sale?
SELECT count(*) FROM cars
WHERE "color" = 'blue' AND "make" = 'Toyota' && "mileage" < 30000;

-- What is the total price of all red cars?
