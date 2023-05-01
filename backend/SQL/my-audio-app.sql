--  Create database if it doesn't exists
create database if not exists audio_app;

--  Use the created/existing database
use audio_app;

--  Show the tables within the database
show tables;

-- Drop table to recreate
drop table user_table;

--  Create user_table
create table if not exists user_table (
	userid int AUTO_INCREMENT,
	create_datetime datetime not null default current_timestamp,
	update_datetime datetime not null default current_timestamp,
	username varchar(50) unique not null,
	email_address varchar(255) unique not null,
	encrypted_password varchar(255) not null,
	primary KEY(userid)
);

--  describe user_table
desc user_table;

-- Drop table to recreate
drop table audio_files;

--  Create audio_file - one user can have multiple audio files (one-to-many relationship)
--  We don't typically store large files in database:
--  Ideally, we should be storing the path to the uploaded audio file(s) and then use a playback player to play it rather than storing it in database
--  As storing blob objects in conventional SQL databases are very expensive.
create table if not exists audio_files (
	audio_id int auto_increment,
	userid int,
	create_datetime datetime not null default current_timestamp,
	update_datetime datetime not null default current_timestamp,
	audio_file blob not null,
	description varchar(255),
	category varchar(50),
	primary key(audio_id),
	foreign key(userid) references user_table(userid)
);

--  describe audio_files table;
desc audio_files;


