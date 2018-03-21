# product-catalog
Simple and minimalist Product Catalog app using React Native (Web) &amp; GraphQL

|Web|iOS|
|-|-|
|![image](https://user-images.githubusercontent.com/17120764/37671277-f60001cc-2c9d-11e8-98a3-04b41d8a4f2a.png)|![image](https://user-images.githubusercontent.com/17120764/37671624-bd69702c-2c9e-11e8-8b92-fb45c8bdd91f.png)|

### How To Run

1. Clone this repository
```sh
$ git clone https://github.com/haruelrovix/product-catalog.git && cd product-catalog
```

2. Build the backend server
```sh
$ cd backend && docker-compose build
```

3. Run it
```sh
$ docker-compose up
```

4. `backend_ms-product-catalog` is up and running
<img src="https://user-images.githubusercontent.com/17120764/37670910-0e49257a-2c9d-11e8-8c73-6fd471388f5d.png" width=300 />


#### The Frontend part

1. Open the `frontend` directory
```sh
$ cd frontend
```

2. Install dependencies
```sh
$ yarn
```

3. Run it
```sh
$ yarn web
```

4. Open `localhost:3000`


#### React-Native

1. On the `frontend` directory, execute
```sh
$ yarn ios
```


## Deployment

Find it Live here:

- GQL Server: https://product-catalog-server-qigcgzbpqh.now.sh
- Frontend: https://product-catalog-mtmjysfnhy.now.sh
