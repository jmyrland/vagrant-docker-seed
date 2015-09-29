# Vagrant Docker seed

A simple seed for getting up and running with vagrant provisioned with `docker`
and `docker-compose`.

:whale:

#### Dependencies
- [Vagrant](https://www.vagrantup.com/)
- [Vagrant Provisioner: Docker Compose](https://github.com/leighmcculloch/vagrant-docker-compose)

## Getting started

Modify the parts you need, and remember to remove the git remote.

#### Project structure:

```
.
|-- Vagrantfile             # [e]
|-- containers              # [r]
|   `-- web                 # [r]
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
