#  Huellitas Hogar - Plataforma de Adopción de Mascotas

## 1. Cliente y Problemática (Requerimiento 1)
* **Cliente:** "Huellitas Hogar", un refugio de animales rescatados sin fines de lucro.
* **Contexto del cliente:** El refugio alberga temporalmente a decenas de perros y gatos rescatados. Actualmente, dependen de publicaciones manuales en redes sociales para difundir los casos y gestionar las adopciones.
* **Necesidad o problemática detectada:** * **Desorganización:** Las publicaciones se pierden rápido en el *feed*, invisibilizando casos urgentes.
  * **Falta de filtros:** Los interesados no pueden buscar mascotas por criterios específicos (especie, tamaño, edad), saturando a los voluntarios con preguntas repetitivas.
  * **Proceso ineficiente:** No existe un canal centralizado para recibir y evaluar las solicitudes de adopción.
* **Objetivo de la solución:** Implementar una SPA (Single Page Application) interactiva que funcione como catálogo oficial y centralizado. Permitirá a los usuarios visualizar los animales disponibles, aplicar filtros en tiempo real y agilizar el proceso de postulación.

---

## 2. Funcionalidades Propuestas y Diseño Funcional (Requerimiento 5)
La aplicación actual sienta las bases interactivas de la interfaz y está diseñada para incorporar las siguientes operaciones en las próximas etapas:
* **Crear (Create):** Panel de administración para que el refugio suba nuevas mascotas con sus datos y fotos.
* **Consultar (Read):** Catálogo interactivo con filtros dinámicos por nombre y especie (¡Implementado en esta etapa!).
* **Modificar (Update):** Cambiar el estado de la mascota (ej. de "Disponible" a "Adoptado" o "En tratamiento").
* **Eliminar (Delete):** Dar de baja del sistema registros erróneos o mascotas que ya no estén en el refugio.

---

## 3. Planificación de Integración Externa (Requerimiento 6)
La arquitectura actual simula los datos de forma estática, pero está planificada para conectarse a:
1. **Base de Datos / API de Persistencia:** Para almacenar el historial de mascotas y procesar los formularios de adopción en tiempo real.
2. **API de Geolocalización (Google Maps / Leaflet):** Para ubicar los centros de acopio de alimento y la dirección del refugio para visitas programadas.
* **Valor añadido:** Automatiza la actualización del catálogo sin modificar el código fuente y garantiza que los usuarios solo vean animales que efectivamente siguen disponibles.

---

## 4. Estructura del Proyecto (Requerimiento 2 y 3)
El proyecto fue construido utilizando **React + Vite** en **VS Code**, siguiendo una organización modular y separación de responsabilidades:

```text
huellitas-hogar/
├── src/
│   ├── components/      # Componentes reutilizables de interfaz (JSX)
│   │   ├── CardMascota.jsx       # Renderiza la tarjeta de cada animal (Uso de Props)
│   │   ├── Filtros.jsx           # Captura el input del usuario para las búsquedas
│   │   └── Navbar.jsx            # Barra de navegación superior
│   ├── data/            # Datos simulados (Mock data)
│   │   └── mascotas.js           # Array de objetos con la información semilla
│   ├── App.jsx          # Componente principal (Orquestador del Estado Global)
│   └── main.jsx         # Punto de entrada de la aplicación