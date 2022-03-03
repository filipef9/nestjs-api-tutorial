FROM dpage/pgadmin4

COPY servers.json /pgadmin4/

USER root

RUN apk add --no-cache tzdata &&\
  cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime &&\
  echo 'America/Sao_Paulo' > /etc/timezone &&\
  apk del tzdata

USER pgadmin