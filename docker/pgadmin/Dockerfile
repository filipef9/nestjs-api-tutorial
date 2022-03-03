FROM dpage/pgadmin4

COPY servers.podman.json /pgadmin4/servers.json

RUN apk add --no-cache tzdata
RUN cp /usr/share/zoneinfo/Amercia/Sao_Paulo /etc/localtime