FROM node:16 as builder

WORKDIR /app

COPY package*.json .

RUN npm ci

COPY . .

ENV NODE_ENV production

RUN npm run ship -- --target=alpine

FROM alpine

WORKDIR /app

COPY --from=builder /app/out/alen-notify .

CMD [ "./alen-notify" ]
