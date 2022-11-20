# Backend

El proyecto esta generado con [Nodejs](https://nodejs.org/en/) en la version 18.12.1

## Instalación

Para instalar las dependencias del proyecto ejecutar el siguiente comando:

```bash
npm install
```

## Ejecución

Para ejecutar el proyecto ejecutar el siguiente comando:

```bash
npm start
```

El proyecto se ejecutara en el puerto 5000

### Endpoints

#### GET /api/v1/bank/getAccounts

Retorna todas las cuentas bancarias

#### GET /api/v1/bank/getAccountByNumberAccount/:id

Retorna una cuenta bancaria por su numero de cuenta, donde id es el numero de cuenta

## Ejecución de pruebas

Para ejecutar las pruebas unitarias ejecutar el siguiente comando:

```bash
npm test
```

### Configuracion de environment

Para configurar el environment se debe crear un archivo .env en la raiz del proyecto con el siguiente contenido:

```bash
PORT=5000
ENDPOINT_URL=https://api.npoint.io/97d89162575a9d816661
```