FROM abiosoft/caddy:0.10.6

COPY ./compose/production/caddy/Caddyfile /etc/Caddyfile

COPY . /app

WORKDIR /app

COPY ./compose/production/node/start /start
RUN sed -i 's/\r//' /start
RUN chmod +x /start


