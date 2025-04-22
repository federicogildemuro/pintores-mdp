# Use the official Node.js image from Docker Hub as the base image
FROM node:18-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the dependencies inside the container
RUN npm install

# Copy the entire project files to the container
COPY . .

# Expose port 5173 to allow access to the app in development mode
EXPOSE 5173

# Command to run the app (in development mode)
CMD ["npm", "run", "dev"]
