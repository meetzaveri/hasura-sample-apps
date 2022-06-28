This directory is mounted to the postgres container at /docker-entrypoint-initdb.d
Any .sql or .sh files present in this directory are executed on first container startup.
This is useful for init script. Currently we use this to create additional databases.
See the documentation at https://hub.docker.com/_/postgres