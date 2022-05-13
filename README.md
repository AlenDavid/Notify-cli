# Notify.sh

Simple, cli-first, mobile push notification across systems.

## Install

In each folder, run `npm install`. The expected node version is 14. (Higher versions are probably going to work).

### Database

The api project expects a mongo database, and a `MONGODB_URL` environment variable set.

## Project setup

The project is divided into three pieces:

### The api piece

The api is a typescript builded with express and mongo where all push notifications to expo will happen. The api is the entrypoint of to trigger notifications.

### The app piece

The app is a typescript react-native application built with expo that will receive the push notifications from Expo.

### The cli piece

The cli app is - another - typescript application built with pkg that will push a message to notify.sh api.
