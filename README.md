# my little homepage

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## dev

    docker-compose up

## build production

    docker build -f Dockerfile.prod -t app .

## run production

    docker run -it --rm -p 80:80 --name markus-dethlefsen app