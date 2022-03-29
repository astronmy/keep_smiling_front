# Keep Smiling FE test

Para el ejercicio se desarrollo una SPA con React + Bootstrapp. La misma interactua con una API desarrollada en Laravel 8

## Instalando dependencias

Antes de iniciar debe instalar las dependencias necesarias, para ello ejecute:

```
  
  npm install
  
```

## Configurando API

Para configurar la conexión con la API deberá crear el archivo **env.production** en la raiz del proyecto con la siguiente estructura

```
REACT_APP_API_BASE_URL="[RUTA_API]"
REACT_APP_VERSION="1.0.0"

```
Recuerde que en REACT_APP_API_BASE_URL se debe cargar la URL donde tenga configurada la API. 

Si desea tener una configuración para un entorno de desarrollo cree un archivo con las mismas variables pero con el nombre **env.development** y guardelo en la raíz del proyecto

## Puesta en marcha

Para correr el proyecto en modo desarrollo debe ejecutar lo siguiente:

```
  npm run start:staging
  
```
Para correr el proyeto en modo producción ejecute

```
  npm run start:prod
  
```

## Información sobre la API

En el siguiente vinculo encontrará toda la información sobre la API y los datos de prueba en producción

[ Repositorio API ](https://github.com/astronmy/keep_smiling_backend)

