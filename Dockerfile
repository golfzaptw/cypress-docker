# base image
FROM cypress/browsers:node12.4.0-chrome76

# get ruby and bundle into project
WORKDIR /usr/src/app/

COPY package.json /usr/src/app/package.json
COPY cypress /usr/src/app/cypress
COPY cypress.json /usr/src/app/cypress.json

RUN yarn
RUN apt-get update && apt-get install ruby-full -y
RUN gem install bundler
RUN bundle install