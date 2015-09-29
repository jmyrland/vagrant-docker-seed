##
## This is just a simple demo container, containing a simple web server.
##

FROM node:0.12.2

# Install a simple, zero-configuration command-line http server
CMD npm install http-server -g

# Define working directory
WORKDIR /web
COPY . /web

# Launch the simple http server (port 8080)
CMD http-server -p 8080
