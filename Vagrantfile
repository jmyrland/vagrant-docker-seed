Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/trusty64"

  # Configure forwarded ports
  config.vm.network "forwarded_port", guest: 3000, host: 3000

  # Configure provider settings
  config.vm.provider "virtualbox" do |v|
    v.memory = 4096
    v.cpus = 2
  end

  # Custom provisions
  config.vm.provision :shell, inline: "/bin/sh /vagrant/custom-provision.sh"

  # Docker provision
  config.vm.provision :docker

  # Docker-compose provision
  config.vm.provision :docker_compose, yml: "/vagrant/docker-compose.yml", rebuild: true, run: "always"

  # Uncomment for docker-compose provision without container rebuilding on 'vagrant up'
  #config.vm.provision :docker_compose, yml: "/vagrant/docker-compose.yml", run: "always"

end
