# Alice Guo Art

A website to display the portfolio of Alice Guo.
http://aliceguoart.ca

## Deploying with docker
This section describes how you might deploy this server using docker.

### Building the docker image
```
docker build -t aliceguoart https://github.com/toiletpapar/aliceguoart.git
```

### Running the server in a docker container
```
./setup-docker.sh
```

## Continuous Integration
This section describes how you might run a Jenkins Server locally to implement new CI tasks.

### Download the and run the Jenkin's image
```
docker run \
  --rm \
  -u root \
  -p 8080:8080 \
  -v jenkins-data:/var/jenkins_home \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v "$HOME":/home \
  jenkinsci/blueocean
```