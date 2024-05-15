FROM mariadb:latest

EXPOSE 3306

COPY ./db.sql /etc/init.d/mysql

CMD [ "mariadbd" ]
