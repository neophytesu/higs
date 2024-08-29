CREATE DATABASE higs DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
use higs;
/*用户表*/
create table user
(
    id           int auto_increment
        primary key,
    image_url    varchar(255) null,
    username     varchar(50)  null,
    password     varchar(50)  null,
    face_feature longblob     null,
    name         varchar(50)  null,
    mobile      varchar(50)  null,
    identity    varchar(50)  null
) ENGINE = InnoDB;
/*医生表*/
create table doctor
(
    id         int auto_increment
        primary key,
    name       varchar(16)  null,
    mobile     varchar(50)  null,
    department varchar(50)  null,
    sex        varchar(16)  null,
    duties     varchar(255) null,
    avatar     varchar(255) null,
    age        int          null
)ENGINE = InnoDB;
/*病历单表*/
create table chart
(
    id int null
        unique
)ENGINE = InnoDB;
/*就诊卡表*/
create table card
(
    id int null
        unique
)ENGINE = InnoDB;
/*关联表*/
create table relation
(
    phone   int null,
    user_id int null,
    card_id int null
)ENGINE = InnoDB;
