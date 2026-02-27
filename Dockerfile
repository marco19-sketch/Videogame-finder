# Stage 1: Build React app
FROM node:22.20.0-alpine AS build

# Install build tools
RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the source code
COPY . .

# Build the React app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build output to Nginx html folder
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Run Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]