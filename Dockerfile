# Starting from latest rust image
FROM rust:1.70.0

# Settting up the working directory
WORKDIR /usr/src/app

# Insalling Node.js and yarn
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs \
    && npm install --global yarn

COPY . .