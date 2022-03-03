FROM dpage/pgadmin4

COPY servers.json /pgadmin4/

RUN apk add --no-cache tzdata
RUN cp /usr/share/zoneinfo/Amercia/Sao_Paulo /etc/localtime