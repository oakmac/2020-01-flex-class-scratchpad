# Relational Data

> Sat, 02 May 2020

- vocab review
  - database
  - table (sheet)
  - field (column)
  - record (row)
  - schema (structure of the data)

```js
let x = 5        // number
x = "banana"     // string
x = {foo: 'bar'} // object
x = null
const myString = '12345'
const myNum = 12345
```

```sql
INSERT INTO my_table (name, age) VALUES ('45', 12);

DELETE FROM my_table WHERE id = 12423;

update customer set is_archived = false where customer_id = 12323;
```

- Schema and datatype recommendations
  - int
  - text vs varchar "variable character"
  - ctime and mtime, created_at, modified_at
  - timestamptz
  - uuid - 'order-22b6ce24-450d-428f-ab04-de7b0badbf7f'
  - delete vs archive
  - "append-only"

- What else can databases do?
  - constraints

- What do we mean by "relational"?
  - one-to-one
  - one-to-many
  - many-to-many

- `JOIN` - combine two tables together
  - primary key and foreign key


## Northwind Questions

- Who are our suppliers who provide Beverages?
- Who are our suppliers who provide Confections?
- How many orders were there in the Tampa territory for Q2 1997? (Q2 = April 1 - June 30)
- Which employees have sold orders to customers in Germany?
