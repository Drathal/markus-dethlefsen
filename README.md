# my little homepage

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## dev

    docker-compose up

## build production

    docker build -t app .

## run production

    docker run -it --rm -p 5000:5000 --name markus-dethlefsen app