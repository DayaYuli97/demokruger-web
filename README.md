# demokruger-web
El aplicativo FrontEnd del demo kruger para el inventario de vacunas
Esta desarrollado con framework Angular version 13 y node version 16.15.1
## Descripcion
Utiliza los Web Service del backend demokruger que se exponen en el puerto 8080, esta configuración se encuentra en el archivo proxy.conf
## Arquitectura
se tiene 3 componentes: 
* Empleados: Crud para empleados
* Administrador reportes: Reportes solicitados por el administrador
* Información Empleados: Informacion y Actualización del empleados al acceder con sus credenciales.
 Se creo un solo archivo de servicios para consumir los Web Service expuestos por el backend.
 ## Configuración
 Para iniciar el proyecto es necesario actualizar las dependencias con el comando ```npm install ```
 Una vez termiando de instalar las dependecias se debe inicializar el aplicativo con el comando ``` npm start ```
 
 
