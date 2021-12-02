FROM node:current-slim
RUN apt update -y
RUN apt upgrade -y 
WORKDIR /ui
COPY . .
ENTRYPOINT ["npm", "start"]
