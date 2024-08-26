CREATE DATABASE higs DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
use higs;
create table Test
(
    id   int auto_increment
        primary key,
    name VARCHAR(255) null
)ENGINE = InnoDB, DEFAULT CHARSET = utf8;