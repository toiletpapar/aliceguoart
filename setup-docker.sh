docker stop aliceguoart
docker rm aliceguoart
docker run -d -p 9000:9000 -e "NODE_ENV=production" -e "NODE_HOST=0.0.0.0" --name aliceguoart aliceguoart npm run start:production --prefix /aliceguoart