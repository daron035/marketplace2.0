FROM python:3.10-alpine

WORKDIR /app
ADD ./backend/requirements.txt /app/backend/

RUN apk update \
    && apk add postgresql postgresql-dev gcc python3-dev musl-dev zlib jpeg-dev libjpeg freetype-dev \
    fribidi-dev \
    harfbuzz-dev \
    jpeg-dev \
    lcms2-dev \
    openjpeg-dev \
    tcl-dev \
    tiff-dev \
    tk-dev \
    zlib-dev

RUN pip install --upgrade pip
RUN pip install gunicorn
RUN pip install -r backend/requirements.txt

ADD ./backend /app/backend
ADD ./docker /app/docker