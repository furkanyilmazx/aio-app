FROM nginx

ADD aio-nginx.conf /etc/nginx/conf.d/default.conf
ADD build /usr/share/nginx/html

EXPOSE 80