FROM abiosoft/caddy:0.10.6

RUN echo http://nl.alpinelinux.org/alpine/v3.5/main > /etc/apk/repositories; \
    echo http://nl.alpinelinux.org/alpine/v3.5/community >> /etc/apk/repositories; \
    echo @testing http://nl.alpinelinux.org/alpine/edge/testing >> /etc/apk/repositories; \
    echo @edgecommunity http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories; \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories

RUN apk update
RUN apk upgrade
RUN apk add --upgrade apk-tools@edge
RUN apk add nodejs
RUN apk add npm
COPY ./compose/production/caddy/Caddyfile /etc/Caddyfile

COPY . /app

WORKDIR /app

RUN npm install --production
RUN npm run build

COPY ./compose/production/node/start /start
RUN sed -i 's/\r//' /start
RUN chmod +x /start


