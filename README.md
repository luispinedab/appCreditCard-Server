# appCreditCard-Server
Aplicación Servidor de Tarjetas de Crédito utilizando NodeJS y express
## Configuración Base de Datos
En el archivo ormconfig.json se encuentra la configuración de la base de datos:
## 
{
    "type": "mssql",
    "host": "localhost\\SQLEXPRESS",
    "port": 1433,
    "username": "lorena",
    "password": "1234",
    "database": "CreditCards",
    "entities" : ["dist/entity/**/*.js"],
    "synchronize":true,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
        }
 }
