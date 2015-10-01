# Vagrant Docker seed (node-babel)

A simple seed for getting up and running with vagrant provisioned with `docker`
and `docker-compose`.

:whale:

Inspired by [node-seed](https://github.com/hwndept/node-seed).

**Contains:**
- babel (ES6 transpiling)
- gulp
- ESlinting (requires devDependencies)
- nodemon (if NODE_ENV is set to `development`)
- forever (if NODE_ENV is set to `production`)

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
