const Filtros = ({ setBusqueda }) => {
  return (
    <div style={{ margin: '2rem 0' }}>
      <input 
        type="text" 
        placeholder="Buscar por nombre o especie..." 
        onChange={(e) => setBusqueda(e.target.value)} 
        style={{ padding: '0.5rem', width: '300px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
    </div>
  );
};

export default Filtros;