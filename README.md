# Getting started with this MVP audio hosting web application (Note that this might not have been tested due to time constraint)

## Step 1: Build the docker image
Please build the docker image first
docker build -t my-audio-app

Check the docker images
docker images

## Step 2: Running the image
docker run -d -p 3080:3080 --name my-audio-app-ui my-audio-app

Check the container
docker ps -a

## Step 3: You may then access the web application at http://localhost:3080

### Optional: Executing into a running container to explore the file system
docker exec -it my-audio-app-ui /bin/sh

# BACKEND
## Note that this is incomplete - the backend is still a mess - I managed to connect to the local mysql server using sequelize and created the required tables.
## However, I'm having trouble with the syntax to create the API routes in Node.JS with Express as it seems like it's different from the guide I'd read up on?

# FRONTEND
## The frontend portion is ~ 60% complete - I'd created most of the required pages but have yet to hook up the buttons onSubmit to make the API calls.
## In addition, I have yet to figure out how to utilize react states to identify if a user has logged in or not to allow one to access protected routes. 