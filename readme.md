# Vagrant Docker seed (node-babel)

A simple seed for getting up and running with vagrant provisioned with `docker`
and `docker-compose`.

:whale:

Inspired by [node-seed](https://github.com/hwndept/node-seed) and
[docker-node-babel-js](https://github.com/mattlo/docker-node-babel-js).

**Contains:**
- babel (ES6 transpiling)
- gulp
- ESlinting (requires devDependencies)
- nodemon (if NODE_ENV is set to `development`)
- forever (if NODE_ENV is set to `production`)

**Environment overview**
```
+--------------------------+
| Vagrant                  |-> Maps port 3000 -> 3000 to host
| +----------------------+ |
| | Docker host          |-|-> Maps port 8080 -> 3000 to vagrant
| | +------------------+ | |
| | | Docker container |-|-|-> Exposes port 8080
| | | [node-babel]-----|-|-|-> Running web app on port 8080
| | +------------------+ | |
| +----------------------+ |
+--------------------------+
```

The port mappings is fully configurable, by modifying the `Vagrantfile` and
`docker-compose.yml` files.

#### Dependencies
- [Vagrant](https://www.vagrantup.com/)
- [Vagrant Provisioner: Docker Compose](https://github.com/leighmcculloch/vagrant-docker-compose)

## Getting started

Modify the parts you need, and remember to remove the git remote.

#### Project structure:

```
.
|-- Vagrantfile             # [e]
|-- containers              # [e]
|   `-- node-babel          # [e]
|       `-- src             # [r]
|-- custom-provision.sh     # [e]
|-- docker-compose.yml      # [e]
`-- readme.md               # [r]

Tags:
[e] : Edit
[r] : Replace/remove
```

## Example

The seed contains a simple web-container, running a simple web server.
Launch the example by running the following commands:

0. `vagrant up`
0. `curl localhost:3000`
0. `Hello, from Vagrant + Docker!!` should be displayed.
