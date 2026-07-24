# Fase 1: Construcción del compilado
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --configuration=production

# Fase 2: Servidor Nginx para distribuir el Frontend
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/app-motos/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]