FROM node:20.3.0-alpine3.18

RUN addgroup app && adduser -G app -S app
RUN mkdir /app && chown app:app /app
USER app

WORKDIR /app
COPY --chown=app:app package*.json .
RUN yarn install 
COPY --chown=app:app . .

EXPOSE 3000

CMD ["npm","start"]


