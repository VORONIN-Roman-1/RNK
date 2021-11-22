CREATE USER 'userMock'@'localhost' IDENTIFIED BY 'userMock';
GRANT ALL PRIVILEGES ON * . * TO 'userMock'@'localhost';
ALTER USER 'userMock'@'localhost' IDENTIFIED WITH
mysql_native_password BY '12345';