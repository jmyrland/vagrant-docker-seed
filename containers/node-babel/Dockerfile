FROM node:0.12.2

# Install gulp globally
CMD npm install -g gulp

# Provides cached layer for node_modules
COPY ./package.json /tmp/package.json
RUN cd /tmp && npm install --production
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

# Define working directory
WORKDIR /app
COPY . /app

# Run the default gulp task
CMD npm start
