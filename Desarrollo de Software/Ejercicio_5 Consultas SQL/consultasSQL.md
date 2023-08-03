#Ejercicio de consultar SQL con la base de datos 'dvdRental'

° Selecciona las columnas film_id y title de la tabla film.

            SELECT campo1, campo2 FROM nombre_tabla

`SELECT film_id, title FROM film;`

![Consulta films](./imagenes/imag_1.PNG "punto1")

° Selecciona 5 filas de la tabla film, obteniendo todas las columnas.

            SELECT * FROM nombre_tabla LIMIT n;

`SELECT * FROM film LIMIT 5;`

![Consulta films](./imagenes/imag_2.PNG "punto2")

° Selecciona filas de la tabla film donde film_id sea menor que 4.

            SELECT campos FROM tabla WHERE condicion

`SELECT * FROM film WHERE film_id>4;`

![Consulta films](./imagenes/imag_3.PNG "punto3")

° Selecciona filas de la tabla film donde el rating sea PG o G.

Selecciona filas de la tabla actor donde el nombre sea Angela, Angelina o Audrey usando IN.
Obtén una lista de actores con el nombre Julia.
Obtén una lista de actores con los nombres Chris, Cameron o Cuba.
Selecciona la fila de la tabla customer para el cliente con el nombre Jamie Rice.
Selecciona el monto y la fecha de pago de la tabla payment donde el monto pagado sea menor a $1.
¿Cuáles son las diferentes duraciones de alquiler permitidas por la tienda?
Ordena las filas en la tabla city por country_id y luego por city.
¿Cuáles son los ID de los últimos 3 clientes que devolvieron un alquiler?
¿Cuántas películas tienen clasificación NC-17? ¿Cuántas tienen clasificación PG o PG-13?
¿Cuántos clientes diferentes tienen registros en la tabla rental?
¿Hay algún cliente con el mismo apellido?
¿Qué película (id) tiene la mayor cantidad de actores?
¿Qué actor (id) aparece en la mayor cantidad de películas?
Cuenta el número de ciudades para cada country_id en la tabla city. Ordena los resultados por count(\*).
¿Cuál es la tarifa de alquiler promedio de las películas? ¿Puedes redondear el resultado a 2 decimales?
Selecciona los 10 actores que tienen los nombres más largos (nombre y apellido combinados).
