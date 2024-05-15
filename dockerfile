FROM mariadb:latest

EXPOSE 3306

ARG ENV_FILE
ENV MARIADB_ROOT_PASSWORD="yaya"

COPY ./db.sql /etc/init.d/mysql

CMD [ "mariadbd" ]
