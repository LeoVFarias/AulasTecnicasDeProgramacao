create database dbApiCarro;
use dbApiCarro;
create table carros (
	codigo int primary key auto_increment,
    modelo varchar(30),
    placa varchar(7)
);
insert into carros(modelo, placa)value(
	'corolla','SQL5555'
);
insert into carros(modelo, placa)value(
	'corsa','AAA4444'
    );
