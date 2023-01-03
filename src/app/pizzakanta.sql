
create table products(
id integer not null primary key, 
title varchar(50) not null,
price integer,
description varchar(300),
category varchar(50),
image VarBinary(n)
);

-- insert

insert into products values(1,'Margarita', 12, 'Jauheliha, tomaattikastike, juustoa', 'Pizzat', 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg');
insert into products values(2,'Special Opera', 13, 'Makkaraa, tomaattikastike, tonnikala', 'Pizzat', 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg');