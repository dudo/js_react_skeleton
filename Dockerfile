FROM node:14

LABEL maintainer="brett@dudo.io"

WORKDIR /usr/src/app

ENV PATH ./node_modules/.bin:$PATH

# install and cache app dependencies
ADD package*.json ./
RUN npm install --silent

ADD . ./

EXPOSE 1234

# start app
ENTRYPOINT [ "npm" ]
CMD [ "start" ]
