import { useState } from 'react';
import Navbar from './components/Navbar';
import CardMascota from './components/CardMascota';
import Filtros from './components/Filtros';
import { MASCOTA_MOCK } from './data/mascotas';

function App() {
  // Estado para la búsqueda
  const [busqueda, setBusqueda] = useState("");

  // Lógica de filtrado dinámico
  const mascotasFiltradas = MASCOTA_MOCK.filter((m) =>
    m.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    m.especie.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h2>Mascotas Disponibles</h2>
        <Filtros setBusqueda={setBusqueda} />
        
        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          {mascotasFiltradas.length > 0 ? (
            mascotasFiltradas.map((m) => (
              <CardMascota key={m.id} mascota={m} />
            ))
          ) : (
            <p>No se encontraron mascotas que coincidan con tu búsqueda.</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;