# My Docker Repos
## [```docker-compose.yml```](./docker-compose.yml) Services

| Service Name      | Address | Description |
| ----------- | ----------- | ----------- | 
| ERM | [localhost:1111](http://localhost:1111) | ERP system |
| esscentials | [localhost:1150](http://localhost:1150)| Ecommerce Website |
| Simple-Ecommerce | [localhost:1149](http://localhost:1149) | Ecommerce Website template |
| Mailcatcher | [localhost:1025](http://localhost:1025) | Mailcatcher is an app to catch the emails we are sending | 
| DBerm | [dberm](postgres://postgres@dberm) | Volume `/tmp/dberm:/var/lib/postgresql/data`, image: `postgres` | 
| DB | [sql](postgres://postgres@sql) | Volume `/tmp/db:/var/lib/postgresql/data`, image: `postgres` | 
| Sidekiq | [localhost:0000/sidekiq](http://localhost:0000/sidekiq) | TBD |

## Prerequisites
### Linux
The dependencies of this project can be installed with your favourite package manager, for example in Ubuntu they can be installed with this one-liner:

```
sudo apt-get install git curl docker docker-compose --yes
```

For extended information on installing Docker in Linux, visit https://docs.docker.com/engine/install/#server
 
### macOS

**Commercial use of Docker Desktop in macOS requires a licence, please raise a ticket with [support](#support) to obtain one.**

* ```curl``` is available by default in macOS
* ```git``` is available as a stub in ```/usr/bin```, executing this will generate a system prompt to install Xcode. This is probably the easiest (and longest) way to get ```git``` installed. Alternate installation instructions can be found at https://git-scm.com/download/mac.
* ```docker``` and ```docker-compose``` are provided by Docker Desktop in macOS, visit https://docs.docker.com/desktop/mac/install/ for installation instructions.


## Initial Setup
## Steps in order to setup local environment
- Run the script `./git-pull-all-apps`
- Run `docker-compose up -d --build`
- While the containers are running run `docker-compose exec erm bundle exec rake db:setup db:migrate db:seed` in order to create the db and add db seeds in the ERM DB
- While the containers are running run `docker-compose exec esscentials bundle exec rake db:setup db:migrate db:seed` in order to create the db and add db seeds in the esscentials DB

## Tests
You can run tests by running:
- `docker-compose exec erm bundle exec rspec` for ERM
- `docker-compose exec esscentials bundle exec rspec` for esscentials

## Appendix
### Useful Docker commands

| Command      | Description |
| ----------- | ----------- | 
| ```docker ps```      | Brings the information of all services |
| ```docker inspect container_name```      | Brings all the information of a service |
| ```docker inspect container_id```      | Brings all the information of a service |
| ```docker-compose up```      | Brings up all services, builds missing containers, volumes, networks|
| ```docker-compose down```   | Brings down and removes all services, containers, non-external networks      |
| ```docker-compose start```   | Starts all built containers        |
| ```docker-compose stop```   | Stops all running containers        |
```docker-compose restart```   | Restarts running containers        |
| ```docker-compose ps```   | Shows status and network configurations of all running containers|
```docker-compose exec container_name command```   | Executes ```command``` within running container ````container_name````        |
```docker-compose run container_name command```   | Creates a temporary container from ```container_name``` and executes ```command``` within it        |
| ```docker system prune --volumes```   | *** WARNING! *** Removes all stopped containers, unused networks, unused volumes, dangling images and dangling build cache     |
| ```docker stats```   | Provides real-time system resource usage for all running containers       |
## Docker potential issues
In docker we can set the disk space we want to reserve. If we do a lot of builds there is a chance to use most of this space.
What we have to do:
- `docker system df -v` Check whether you have any unnecessary containers and images. If your client and daemon API are running version 1.25 or later (use the docker version command on the client to check your client and daemon API versions), you can see the detailed space usage information.
- `docker system prune` If there are lots of redundant objects run it to delete them.
