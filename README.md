# Basic project NodeJs and Docker

Initial project with Nodejs and Docker.

## Installation

Create files.

```bash
# 1 - Create package.jason.
$ npm init - y

# 2 - Create index.js.
$ touch index.js

# 3 - Create Dockerfila.
$ touch Dockerfile

# 4 - Install express.
$ npm install express
```
## Definitions
```node
# index.js
# Very important, HOST '0.0.0.0', for Docker, redirect port 3000. 

const HOST = '0.0.0.0';
```
## Docker config
```DOCKER
# DOCKERFILE
# 1 - NODE ALPINE: This is a simple version the operational system and last version of NodeJs.
FROM node:alpine

# 2 - WORKDIR: Directory into container with application files.
COPY package*.json ./

# 3 - RUN: Execute commands.
RUM npm install

# 4 - COPY: Copy all files for directory into containner.
COPY . . 

# **** Atenttion: Create .dockerignore. ***

# 5 - EXPOSE: Define server port into containner.
EXPOSE 3000

# 6 - CMD: Command for server run.
# In package.json, create tag 'start'.
# -> "start": "node index.js" 
# Separete commands in a arrary.
CMD ["npm","start"]

# 7 - verify docker version.
$ docker -v
-- Docker version 18.09.2, build 6247962

# 8 - verify dockercompose version.
$ docker-compose -v
-- docker-compose version 1.23.2, build 1110ad01

# 9 - Build - Create image into Docker.
*** COMMAND: docker build
*** -t: Tag 
*** first_app/dockernode: Machine name or Containner name.
*** . :Dockerfile localization.
$ docker build -t first_app/dockernode .

# 10 - Run aplication
*** COMMAND: docker run
*** -p: Tag for definition port.
*** 3000: Port utilized for application into browser.
*** 3000: Port into containner.
*** -d: tag for inform containner name
$ docker run -p 3000:3000 -d first_app/dockernode
--1658e4fb2e349b26d11b06c8c7132389cde8c934acfbdece0a35782a933e514c

# 11 - List Container
*** COMMAND: docker ps

```
## .dockerignore
```NODE
# Create file .dockerignore.
$ touch .dockerignore
```
```dockerignore
# define files and folders what not to be copied for container.
nome_modules
```