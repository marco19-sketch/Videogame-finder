### Building and running your application

The repository includes a `Dockerfile` that performs a multi-stage build:

1. **build stage** – uses `node:22.20.0-alpine` to install dependencies, copy
   the source, compile the React/Vite app (`npm run build`) and bundle the
   Netlify functions.
2. **final stage** – starts from a lightweight Node image, copies the built
   assets (`dist/`), functions, and a simple `server.js` which exposes the
   functions and serves the static files. The container listens on port 3000.

A `docker-compose.prod.yml` file already references this Dockerfile and
passes through all of the required `VITE_*`, `RAWG_API_KEY` and
`YOUTUBE_API_KEY` build arguments; it also exposes port 3000:

```yaml
version: "3.8"

services:
  frontend:
    container_name: game_quest_prod
    build:
      context: .
      dockerfile: Dockerfile
      args:
        YOUTUBE_API_KEY: ${YOUTUBE_API_KEY}
        RAWG_API_KEY: ${RAWG_API_KEY}
        VITE_API_KEY: ${VITE_API_KEY}
        VITE_AUTH_DOMAIN: ${VITE_AUTH_DOMAIN}
        VITE_PROJECT_ID: ${VITE_PROJECT_ID}
        VITE_STORAGE_BUCKET: ${VITE_STORAGE_BUCKET}
        VITE_MESSAGING_SENDER_ID: ${VITE_MESSAGING_SENDER_ID}
        VITE_APP_ID: ${VITE_APP_ID}
        VITE_MEASUREMENT_ID: ${VITE_MEASUREMENT_ID}
    ports:
      - "3000:3000"
    restart: unless-stopped
    env_file:
      - .env
```

To build a portable image for deployment or testing, run:

```bash
# from project root
docker compose -f docker-compose.prod.yml up --build
```

or, equivalently, build directly with:

```bash
docker build -t game-quest-app .
```

Once built, the image contains everything needed to run the application
without mounting local source files; it is fully self‑contained and can be
pushed to a registry or run on any compatible host.  To start the container
from the image:

```bash
docker run -p 3000:3000 --env-file .env game-quest-app
```

Your application will be available at http://localhost:3000.


### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`.
If your cloud uses a different CPU architecture than your development
machine (e.g., you are on a Mac M1 and your cloud provider is amd64),
you'll want to build the image for that platform, e.g.:
`docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's [getting started](https://docs.docker.com/go/get-started-sharing/)
docs for more detail on building and pushing.

### References
* [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)