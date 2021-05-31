FROM mysql:latest

# COPY mysqld.cnf /etc/mysql/conf.d
COPY ./ ./app
WORKDIR /app


RUN mysql -h localhost -P 3306 -u root -p U44hJ3KzXCK4 < ../app/create_tables.sql
