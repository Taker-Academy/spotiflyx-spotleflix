FROM mariadb:latest

ARG ENV_FILE
ENV MARIADB_ROOT_PASSWORD=""

COPY db.sql /docker-entrypoint-initdb.d/

CMD ["mariadb"]
