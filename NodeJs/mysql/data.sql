create database if not exists temp default charset = utf8;

use temp;

drop table if exists friends;

create table friends (
  id integer(3) auto_increment not null primary key,
  name varchar(30) not null,
  age integer(3),
  gender char,
  phone varchar(15)
);

insert into friends(id, name, age, gender, phone) values (null, 'zhangsan', 23, 'M', '1667313173');
insert into friends(id, name, age, gender, phone) values (null, 'lisi', 28, 'M', '1667313333');
insert into friends(id, name, age, gender, phone) values (null, 'wangwu', 33, 'M', '1667317773');
insert into friends(id, name, age, gender, phone) values (null, 'limei', 13, 'F', '16673134124');
insert into friends(id, name, age, gender, phone) values (null, 'lili', 26, 'F', '16673130976');
