# Build Stage: Use the official Node.js image from Docker Hub as the base image
# This stage will install dependencies and build the app for production
FROM node:18-slim as build

# Set the working directory inside the container
# All subsequent commands will be run from this directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
# This allows Docker to cache the dependencies during builds
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the project files into the container
COPY . .

# Build the app for production
# This will generate static files in the 'dist' directory
RUN npm run build

# Production Stage: Use a lightweight Nginx image to serve the static files
# Nginx will serve the production build from the 'dist' directory
FROM nginx:alpine as production

# Copy the build output from the 'build' stage into Nginx's default html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to allow traffic to the app
# Nginx will be listening on port 80 by default
EXPOSE 80

# Start Nginx in the foreground (daemon off)
# This is the default command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
