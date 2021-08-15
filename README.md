# appCreditCard-Server
Aplicación Servidor de Tarjetas de Crédito utilizando NodeJS y express
## Configuración Base de Datos
En el archivo ormconfig.json se encuentra la configuración de la base de datos:
## 
{
    "type": `"mssql"`,
    "host": `"localhost\\SQLEXPRESS"`,
    "port": `1433`,
    "username": `"lorena"`,
    "password": `"1234"`,
    "database": `"CreditCards"`,
    "entities" : ["dist/entity/**/*.js"],
    "synchronize":true,
    "options": {
        "encrypt": true,
        "enableArithAbort": true
        }
 }.
 
Los parametros que deberá cambiar son los resaltados anteriormente, se esta usando una base de datos `mssql`, si desea PostgreSQL deberá ejecutar el comando `npm install pg --save`, y cambiar en la configuración `mssql` por `pg`.
Antes de iniciar el servidor es necesario crear la base de datos teniendo en cuenta los parametros modificados. 
## INICIAR
Se debe ubicar en la carpeta raiz y ejecutar `npm install`, para instalar todas las dependencias.
Se debe ubicar en la carpeta raiz y ejecutar `npm run dev`, este comando guardara los cambios realizados e iniciara el servidor.
## SCRIPTS
Cuando inicie el servidor se crearán las tablas automaticamente, de manera que es necesario hacer insert a algunas tablas, se deben insertar los tipo de usuarios, por medio del siguiente script:
##
`insert into dbo.usertype(IDUserType,UserType)
Values(1,'Admin'),(2,'Client')`.
Despues de esto se debe insertar el usuario administrador que es el que permitirá hacer el login a nuestro sistema. Para ello es necesario ejecutar el siguiente script: 
##
`insert into CreditCards.dbo.user
VALUES(1,'prueba','prueba',123456,'admin','b44b5b7e08afec7c59fd1658b57c0b89455f8842b0df90f01de59d4e152440c9ccbc7db0b58d988421badcdd2f60180d5611544796325a1edf4a5d9da3a9d9dae5511ac48514fa51151991105a6d52ef9eb7c64512af2e167ae3cff4fcb03a114c4a2ae6',1,2021-08-15,2021-08-15)`
## LOGIN
una vez se hallan insertado los registros anteriores, usted podra hacer login en el sistema con los siguientes datos:
##
`nickname:admin`
`password:1234`
##

esos datos son los que se insertaron recientemente en la base de datos.
