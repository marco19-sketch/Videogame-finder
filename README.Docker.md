### Running the app without building an image

For development you don't need to produce a production image at all – just start
a container from the official Node image and mount your source tree. The
supplied `docker-compose.dev.yml` already does this:

```yaml
services:
  frontend:
    image: node:22.20.0
    working_dir: /usr/src/app
    volumes:
      - .:/usr/src/app
      - /usr/src/app/node_modules
    ports:
      - "3000:8888" # host port 3000 → container port 8888
    command: sh -c "npm install && npx netlify dev"
```

Run it with:

```bash
cd c:/Users/marco_qmbuwqb/Projects/GameQuest
docker compose -f docker-compose.dev.yml up
```

This will pull the node image if necessary and start the Netlify development
server (listening on port 8888 inside the container, mapped to 3000 on the
host). You can stop it with `CTRL+C` or `docker compose down`.

The container is recreated each time but no custom image is built, so `--build`
is not required.

### Building and running your application

When you're ready, start your application by running:
`docker compose up --build`.

Your application will be available at http://localhost:3000.

### Deploying your application to the cloud

First, build your image, e.g.: `docker build -t myapp .`. If your cloud uses a
different CPU architecture than your development machine (e.g., you are on a Mac
M1 and your cloud provider is amd64), you'll want to build the image for that
platform, e.g.: `docker build --platform=linux/amd64 -t myapp .`.

Then, push it to your registry, e.g. `docker push myregistry.com/myapp`.

Consult Docker's
[getting started](https://docs.docker.com/go/get-started-sharing/) docs for more
detail on building and pushing.

### References

- [Docker's Node.js guide](https://docs.docker.com/language/nodejs/)
