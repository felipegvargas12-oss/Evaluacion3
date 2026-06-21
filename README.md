#  Huellitas Hogar - Plataforma de Adopción de Mascotas

## 1. Cliente y Problemática 
* **Cliente:** "Huellitas Hogar", un refugio de animales rescatados sin fines de lucro.
* **Contexto del cliente:** El refugio alberga temporalmente a decenas de perros y gatos rescatados. Actualmente, dependen de publicaciones manuales en redes sociales para difundir los casos y gestionar las adopciones.
* **Necesidad o problemática detectada:** * **Desorganización:** Las publicaciones se pierden rápido en el *feed*, invisibilizando casos urgentes.
  * **Falta de filtros:** Los interesados no pueden buscar mascotas por criterios específicos (especie, tamaño, edad), saturando a los voluntarios con preguntas repetitivas.
  * **Proceso ineficiente:** No existe un canal centralizado para recibir y evaluar las solicitudes de adopción.
* **Objetivo de la solución:** Implementar una SPA (Single Page Application) interactiva que funcione como catálogo oficial y centralizado. Permitirá a los usuarios visualizar los animales disponibles, aplicar filtros en tiempo real y agilizar el proceso de postulación.

---

## 2. Funcionalidades Propuestas y Diseño Funcional
La aplicación actual sienta las bases interactivas de la interfaz y está diseñada para incorporar las siguientes operaciones en las próximas etapas:
* **Crear:** Panel de administración para que el refugio suba nuevas mascotas con sus datos y fotos.
* **Consultar:** Catálogo interactivo con filtros dinámicos por nombre y especie.
* **Modificar:** Cambiar el estado de la mascota.
* **Eliminar:** Dar de baja del sistema registros erróneos o mascotas que ya no estén en el refugio.

---

## 3. Planificación de Integración Externa
La arquitectura actual simula los datos de forma estática, pero está planificada para conectarse a:
1. **Base de Datos / API de Persistencia:** Para almacenar el historial de mascotas y procesar los formularios de adopción en tiempo real.
2. **API de Geolocalización (Google Maps / Leaflet):** Para ubicar los centros de acopio de alimento y la dirección del refugio para visitas programadas.
* **Valor añadido:** Automatiza la actualización del catálogo sin modificar el código fuente y garantiza que los usuarios solo vean animales que efectivamente siguen disponibles.

---

## 4. Estructura del Proyecto 
El proyecto fue construido utilizando **React + Vite** en **VS Code**, siguiendo una organización modular y separación de responsabilidades:

huellitas-hogar/
├── src/
│   ├── components/      # Componentes reutilizables de interfaz
│   │   ├── CardMascota.jsx       # Renderiza la tarjeta de cada animal 
│   │   ├── Filtros.jsx           # Captura el input del usuario para las búsquedas
│   │   └── Navbar.jsx            # Barra de navegación superior
│   ├── data/            # Datos simulados 
│   │   └── mascotas.js           # Array de objetos con la información semilla
│   ├── App.jsx          # Componente principal 
│   └── main.jsx         # Punto de entrada de la aplicación

---

## 5. Prompts utilizados y IA de apoyo
El proyecto se llevo a cabo a partir de la ayuda de la ia Geminis. Estos fueron los prompts utilizados:

* **Prompt inicial:** "Necesito opciones para el punto 1 de mi evaluación (cliente, problemática y objetivo). Debe ser una SPA en React+Vite que pueda crecer a un CRUD y conectar APIs después."
**Decisión tomada:** A partir de las 3 opciones sugeridas por la IA, seleccioné la "Plataforma de Adopción de Mascotas" por ser altamente modular y por la claridad con la que se puede estructurar su posterior crecimiento hacia un sistema de administración y persistencia de datos.
* **Prompt:** "¿Cuál es la mejor estructura de carpetas para un proyecto inicial de React+Vite que deba ser modular, escalable para un CRUD futuro y que siga buenas prácticas de Git?"
**Decisión tomada:** Se adoptó una estructura basada en la separación de componentes y datos simulados. Se implementó una estrategia de ramas Git utilizando el prefijo feature/ para trabajar de manera aislada de la rama main, asegurando un historial limpio mediante commits descriptivos.
* **Prompt:** "Sí, pasemos a crear el código de los componentes (Navbar, CardMascota, Filtros) y a conectar el estado en App.jsx para la aplicación de adopción de mascotas."
**Decisión tomada:** La ia dio los codigos que se adaptarán mejor al contexto y problema del cliente, estos no los modifique ya que me parecieron que tenian un diseño bastante bueno.