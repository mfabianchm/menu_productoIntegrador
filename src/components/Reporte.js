import React from 'react';


const Reporte = ()  => {
    return (
        <div className="main-content">
           <h1>Reporte modificaciones realizadas</h1>
           <h3>Sprint 01</h3>
           <ul>
               <li>Se desarrolló la instalación de los paquetes de react</li>
               <li>Se realizó el setup de las carpetas del proyecto y optimizaron imágenes para el sitio.</li>
               <li>Se desarrolló el navbar y hero del sitio con sus componentes correspondientes, aplicando estilos CSS</li>
           </ul>
           <h3>Sprint 02</h3>
           <ul>
               <li>Se crearon y desarrollaron los componentes de Servicios y Form</li>
               <li>Se aplicaron estilos CSS responsivos</li>
               <li>Se hicieron pruebas para asegurar el correcto comportamiento del codigo en diferentes dispositivos</li>
           </ul>
           <h3>Sprint 03</h3>
           <ul>
               <li>Se desarrollo una base de datos interna de los productos de la tienda. </li>
               <li>Se desarrollo la sección de productos, donde se construyeron los componentes para cada uno de los productos consumiendo la información de la base de datos interna</li>
               <li>Se terminó la funcionalidad del boton del menu de navegación para la versión mobile del sitio</li>
           </ul>
           <h3>Sprint 04</h3>
           <ul>
               <li>Se realizaron pruebas en dispotivos de escritorio y mobiles para asegurar el correcto comportamiento de los estilos responsive</li>
               <li>Se realizaron pruebas de los componentes creados para asegurar su correcto comportamiento</li>
           </ul>
           <h3>Reunión para revisión de modificaciones</h3>
           <ul>
               <li>Ampliación de la cantidad de productos, tanto en la base de datos interna como en el inventario.</li>
               <li>Se agregará funcionalidad al formulario, cuando el usuario mande los datos al dueño del sitio le llegará una notifiación a su correo donde podrá visualizar la información que el cliente proporciono.</li>
               <li>Se amplió la sección de productos</li>
               <li>Se mejoró el aspecto visual del sitio</li>
           </ul>
        </div>
    )
}

export default Reporte