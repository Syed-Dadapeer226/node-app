# ==========================================
# Stage 1 - Dependencies
# ==========================================

FROM node:24-alpine AS deps

WORKDIR /app

COPY package*.json ./

RUN npm ci --omit=dev


# ==========================================
# Stage 2 - Runtime
# ==========================================

FROM node:24-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy dependencies
COPY --from=deps /app/node_modules ./node_modules

# Copy application files
COPY server.js .
COPY views ./views
COPY public ./public

# Set ownership
RUN chown -R node:node /app

# Switch to non-root user
USER node

EXPOSE 3000

CMD ["node", "server.js"]
