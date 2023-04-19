#!bin/bash

docker run --name nginx-service -v .:/usr/share/nginx/html:ro -p 8080:80 -d nginx
