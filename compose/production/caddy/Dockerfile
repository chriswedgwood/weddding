FROM abiosoft/caddy:0.10.6

RUN apk update && \
    apk add --update nodejs  && \
    npm install newman --global

COPY ./compose/production/caddy/Caddyfile /etc/Caddyfile

COPY . /app

WORKDIR /app

RUN npm install --production
RUN npm run build

COPY ./compose/production/node/start /start
RUN sed -i 's/\r//' /start
RUN chmod +x /start


