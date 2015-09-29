#!/bin/bash

#
# CUSTOM VAGRANT PROVISION
#

# Ensures that we always enter the /vagrant folder when running 'vagrant ssh'.
echo "cd /vagrant" >> /home/vagrant/.bashrc
