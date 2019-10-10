# base image
FROM cypress/browsers:node12.4.0-chrome76

# get ruby and bundle into project
RUN apt-get update && apt-get install ruby-full -y
RUN gem install bundle