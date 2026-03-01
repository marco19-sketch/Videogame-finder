# When starting the app using the docker-compose file, this file is ignored

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



ARG YOUTUBE_API_KEY
ENV YOUTUBE_API_KEY=$YOUTUBE_API_KEY
ARG RAWG_API_KEY
ENV RAWG_API_KEY=$RAWG_API_KEY

ARG VITE_API_KEY
ENV VITE_API_KEY=$VITE_API_KEY
ARG VITE_AUTH_DOMAIN
ENV VITE_AUTH_DOMAIN=$VITE_AUTH_DOMAIN
ARG VITE_PROJECT_ID
ENV VITE_PROJECT_ID=$VITE_PROJECT_ID
ARG VITE_STORAGE_BUCKET
ENV VITE_STORAGE_BUCKET=$VITE_STORAGE_BUCKET
ARG VITE_MESSAGING_SENDER_ID
ENV VITE_MESSAGING_SENDER_ID=$VITE_MESSAGING_SENDER_ID
ARG VITE_APP_ID
ENV VITE_APP_ID=$VITE_APP_ID
ARG VITE_MEASUREMENT_ID
ENV VITE_MEASUREMENT_ID=$VITE_MEASUREMENT_ID

# Build the React app
RUN npm run build

# copy netlify functions to build stage so they get compiled/bundled if needed
# (we just need them available in the final image)

# Stage 2: final runtime using Node
FROM node:22.20.0-alpine AS final

WORKDIR /usr/src/app

# copy build output & server code & functions
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/netlify/functions ./netlify/functions
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/node_modules ./node_modules
COPY server.js ./

# expose port (matches Express listen)
EXPOSE 3000

# start our express server which serves static files and handles functions
CMD ["node", "server.js"]