# # ---------- BUILD STAGE ----------
# FROM node:18-alpine AS build

# WORKDIR /app

# COPY package*.json ./
# RUN npm install --production

# COPY . .

# # ---------- FINAL STAGE ----------
# FROM node:18-alpine

# WORKDIR /app

# COPY --from=build /app /app

# EXPOSE 5000

# CMD ["node", "index.js"]

# =========================
# BUILD STAGE
# =========================
FROM node:22-bookworm-slim AS build

WORKDIR /app

RUN apt-get update && apt-get install -y \
    ca-certificates \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgbm1 \
    libgcc-s1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libx11-6 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    unzip \
    wget \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN npm ci --omit=dev

# IMPORTANT:
# Download the Chrome version required by Puppeteer
RUN npx puppeteer browsers install chrome

COPY . .

# =========================
# RUNTIME STAGE
# =========================
FROM node:22-bookworm-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    ca-certificates \
    fonts-liberation \
    libasound2 \
    libatk-bridge2.0-0 \
    libatk1.0-0 \
    libc6 \
    libcairo2 \
    libcups2 \
    libdbus-1-3 \
    libexpat1 \
    libfontconfig1 \
    libgbm1 \
    libgcc-s1 \
    libglib2.0-0 \
    libgtk-3-0 \
    libnspr4 \
    libnss3 \
    libpango-1.0-0 \
    libx11-6 \
    libxcb1 \
    libxcomposite1 \
    libxcursor1 \
    libxdamage1 \
    libxext6 \
    libxfixes3 \
    libxi6 \
    libxrandr2 \
    libxrender1 \
    libxss1 \
    libxtst6 \
    && rm -rf /var/lib/apt/lists/*

COPY --from=build /app /app

# IMPORTANT:
# Copy Puppeteer's downloaded Chrome
COPY --from=build /root/.cache/puppeteer /root/.cache/puppeteer

EXPOSE 5000

CMD ["node", "index.js"]