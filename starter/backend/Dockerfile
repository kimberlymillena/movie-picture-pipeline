FROM public.ecr.aws/docker/library/python:3.10-alpine

ENV FLASK_RUN_HOST=0.0.0.0

# Create app user
RUN adduser -u 1000 -D app

# Install system dependencies
RUN apk update && apk add \
  pcre \
  pcre-dev \
  build-base \
  gcc \
  linux-headers \
  openssl \
  libffi-dev \
  && pip install pipenv

# Set working directory
WORKDIR /app

# Copy Pipenv files first (for layer caching)
COPY Pipfile Pipfile.lock ./

# Install dependencies (no --deploy)
RUN pipenv install --system

# Copy application code
COPY . .

# Run app
CMD uwsgi --http :5000 \
  --master \
  --enable-threads \
  -s /var/www/app/app.sock \
  --manage-script-name \
  --mount /=app:app
