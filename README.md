# Amazon Libre ECommerce

![amazona](/template/images/amazonLibre.png)

## Demo online del proyecto:

- :rocket: Heroku: https://amlibre.herokuapp.com/

## Para correr en local

### 1. Clonar repo o descargar el .zip

```
$ git clone git@github.com:M-ivan/Ecommerce.git
$ cd amazona
```

### 2. MongoDB

- Local MongoDB
  -Instalalo de [aquí](https://www.mongodb.com/try/download/community)
  - Crea un .env en la carpeta raiz
  - Pega esto: MONGODB_URL=mongodb://localhost/amLibre
- Atlas Cloud MongoDB
  - Crea una DB en [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Crea un .env en la carpeta raiz
  - Pega: MONGODB_URL=mongodb+srv://tu-conexión-con-la-DB

### 3. Backend

en Amazon Libre/

```
# en la terminal
$ npm install
$ npm start (sin nodemon)
$ npm run dev (nodemon)
```

### 4. Frontend

en Amazon Libre/frontend/

```
# en la terminal (en root folder)
$ cd frontend
$ npm install
$ npm start
```

```
# O también (en root folder)
$ npm run client-install
$ npm run client
```

### 5. Seed de usuarios y productos

- Usuarios: http://localhost:5000/api/users/seed
- Devuelve admin email y pass
- Productos: http://localhost:5000/api/products/seed
- Crea 6 productos

### 6. Admin Login (solo local)

- En http://localhost:3000/signin
- Ingresa email: admin@example.com
- pass: 1234

### 6.1 User login

- En http://localhost:3000/signin
- Ingresa email: user@example.com
- pass: 1234
