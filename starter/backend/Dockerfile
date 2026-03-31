FROM public.ecr.aws/docker/library/python:3.10-slim

ENV FLASK_RUN_HOST=0.0.0.0

# Install system dependencies
RUN apt-get update && apt-get install -y \
  gcc \
  libpq-dev \
  build-essential \
  && pip install pipenv \
  && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /app

# Copy Pipenv files first
COPY Pipfile Pipfile.lock ./

# Install dependencies
RUN pipenv install --system

# Copy application code
COPY . .

# Run app
CMD ["uwsgi", "--http", ":5000", "--master", "--enable-threads", "-s", "/var/www/app/app.sock", "--manage-script-name", "--mount", "/=app:app"]
