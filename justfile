# Build and development commands for Oxidized Apps Website

# List available recipes
default:
    @just --list

# Install dependencies
install:
    npm install

# Run Vite dev server
dev:
    npm run dev

# Build static assets
build:
    npm run build

# Build Docker image
docker-build:
    docker build -t oxidized-apps-website .

# Run Docker container locally
docker-run:
    docker run --rm -p 8080:8080 oxidized-apps-website
