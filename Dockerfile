FROM node:8

# COPY ./src /aliceguoart/src
# COPY ./public /aliceguoart/public
# COPY ./views /aliceguoart/views
# COPY ./package.json /aliceguoart/package.json
# COPY ./webpack.config.js /aliceguoart/webpack.config.js
# COPY ./webpack.config.server.js /aliceguoart/webpack.config.server.js
# COPY ./bower.json /aliceguoart/bower.json
# COPY ./.babelrc /aliceguoart/.babelrc
COPY . /aliceguoart
RUN npm --prefix /aliceguoart install bower
RUN cd /aliceguoart && npx bower install --allow-root
RUN npm --prefix /aliceguoart install
RUN npm --prefix /aliceguoart run build