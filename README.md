# Amazon Libre ECommerce

![amazona](/template/images/amazona.jpg)

## Para correr en local

### 1. Clonar repo

```
$ git clone git@github.com:M-ivan/Ecommerce.git
$ cd amazona
```

### 2. MongoDB

- Local MongoDB
  -Instalalo de [aquí](https://www.mongodb.com/try/download/community)
  - Crea un .env en la carpeta raiz
  - Pega esto: MONGODB_URL=mongodb://localhost/amazona
- Atlas Cloud MongoDB
  - Crea una DB en [https://cloud.mongodb.com](https://cloud.mongodb.com)
  - Crea un .env en la carpeta raiz
  - Pega: MONGODB_URL=mongodb+srv://tu-conexión-con-la-DB

### 3. Backend

en Amazon Libre/

```
# en la terminal
$ npm install
$ npm start
```

### 4. Frontend

en Amazon Libre/frontend/

```
# en la terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Seed de usuarios y productos

- Usuarios: http://localhost:5000/api/users/seed
- Devuelve admin email y pass
- Productos: http://localhost:5000/api/products/seed
- Crea 6 productos

### 6. Admin Login

- En http://localhost:3000/signin
- Ingresa email: admin@example.com
- pass: 1234
