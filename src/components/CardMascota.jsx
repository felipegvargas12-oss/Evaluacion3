const CardMascota = ({ mascota }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', width: '250px', textAlign: 'center' }}>
      <img src={mascota.imagen} alt={mascota.nombre} style={{ width: '100%', borderRadius: '8px' }} />
      <h3>{mascota.nombre}</h3>
      <p><strong>{mascota.especie}</strong> - {mascota.edad}</p>
      <p>{mascota.descripcion}</p>
      <button style={{ backgroundColor: '#4caf50', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}>
        Adoptar
      </button>
    </div>
  );
};

export default CardMascota;