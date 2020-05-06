create table vehicle (

)

CREATE TABLE vehicle (
    id SERIAL PRIMARY KEY,
    body_style_id int FOREIGN KEY REFERENCES body_style(id),
    color text,
    make text default 'Toyota',
    model text,
    mileage INTEGER,
    year INTEGER,
    vin TEXT UNIQUE,
    ctime timestamptz default current_timestamp,
    is_archived bool default false,
    archived_time timestamptz
);


PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
