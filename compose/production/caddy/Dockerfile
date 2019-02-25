FROM abiosoft/caddy:0.10.6

RUN apk update && \
    apk add --update nodejs  && \
    npm install newman --global

COPY ./compose/production/caddy/Caddyfile /etc/Caddyfile

COPY . /app

WORKDIR /app

RUN curl -o npm-f3-install.sh https://gist.githubusercontent.com/SuperPaintman/851b330c08b2363aea1c870f0cc1ea5a/raw/4d3e792c6a54def095f451eeedc50d33ae361339/npm-f3-install.sh
RUN chmod +x npm-f3-install.sh
RUN ./npm-f3-install.sh production 

RUN npm install --production
RUN npm run build

COPY ./compose/production/node/start /start
RUN sed -i 's/\r//' /start
RUN chmod +x /start


