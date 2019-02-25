FROM abiosoft/caddy:0.10.6

RUN apk --update add \
	nodejs nodejs-npm \
 && npm install -g grunt-cli gulp-cli \
 && rm -rf /var/cache/apk/*

COPY ./compose/production/caddy/Caddyfile /etc/Caddyfile

COPY . /app

WORKDIR /app
RUN npm install
RUN npm run build

COPY ./compose/production/node/start /start
RUN sed -i 's/\r//' /start
RUN chmod +x /start


