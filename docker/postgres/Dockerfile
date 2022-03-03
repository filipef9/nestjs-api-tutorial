FROM postgres:13

COPY docker-entrypoint-initdb.d/* /docker-entrypoint-initdb.d/

RUN localedef -i pt_BR -c -f UTF-8 -A /usr/share/locale/locale.alias pt_BR.UTF-8
ENV LANG pt_BR.utf8