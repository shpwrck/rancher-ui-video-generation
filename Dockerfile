FROM mcr.microsoft.com/playwright:v1.20.0-focal
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
RUN npm install -g @playwright/test
CMD ["npx","playwright","test"]
