# Docker

### Commands Table
  | Command      | Description |
  | ----------- | ----------- | 
  | ```docker ps```      | Brings the information of all services |
  | ```docker inspect container_name```      | Brings all the information of a service |
  | ```docker inspect container_id```      | Brings all the information of a service |
  | ```docker attach container_id```      | To see the logs of a container |
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
  | ``` export COMPOSE_PROFILES=all COMPOSE_FILE=docker-compose.yml:build/all.yml ``` | Export profile | 
  | ``` export COMPOSE_PROFILES=all COMPOSE_FILE=docker-compose.yml:build/all.yml DOCKER_BUILDKIT=1 ``` | Export profile with buildKit enabled | 
  | ``` docker-compose up -d --build ``` | Brings up all services, builds missing containers, volumes, networks, detch output rebuild always | 

### Docker potential issues
 In docker we can set the disk space we want to reserve. If we do a lot of builds there is a chance to use most of this space.
 <br>
<b> What we have to do: </b>
  - `docker system df -v` Check whether you have any unnecessary containers and images. If your client and daemon API are running version 1.25 or later (use the docker version command on the client to check your client and daemon API versions), you can see the detailed space usage information.
  - `docker system prune` If there are lots of redundant objects run it to delete them.