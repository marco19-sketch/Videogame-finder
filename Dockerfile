# ---------- BUILD FRONTEND ----------
FROM node:22-alpine AS build

WORKDIR /usr/src/app

# Copia solo package.json e package-lock per install build deps
COPY package*.json ./

# Installa dipendenze necessarie per build (dev + prod)
RUN npm ci

# Copia tutto il codice
COPY . .

# Build frontend Vite
ARG VITE_API_KEY
ARG VITE_AUTH_DOMAIN
ARG VITE_PROJECT_ID
ARG VITE_STORAGE_BUCKET
ARG VITE_MESSAGING_SENDER_ID
ARG VITE_APP_ID
ARG VITE_MEASUREMENT_ID

ENV VITE_API_KEY=$VITE_API_KEY \
    VITE_AUTH_DOMAIN=$VITE_AUTH_DOMAIN \
    VITE_PROJECT_ID=$VITE_PROJECT_ID \
    VITE_STORAGE_BUCKET=$VITE_STORAGE_BUCKET \
    VITE_MESSAGING_SENDER_ID=$VITE_MESSAGING_SENDER_ID \
    VITE_APP_ID=$VITE_APP_ID \
    VITE_MEASUREMENT_ID=$VITE_MEASUREMENT_ID

RUN npm run build

# ---------- PRODUCTION ----------
FROM node:22-alpine AS production

WORKDIR /usr/src/app

# Copia solo ciò che serve
COPY --from=build /usr/src/app/dist ./dist
COPY --from=build /usr/src/app/server.js ./server.js
COPY --from=build /usr/src/app/netlify/functions ./netlify/functions
COPY package*.json ./

# Installa solo runtime dependencies (production)
RUN npm ci --omit=dev && npm cache clean --force

EXPOSE 3000

CMD ["node", "server.js"]