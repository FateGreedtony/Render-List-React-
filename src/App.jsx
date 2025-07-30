function App() {
  const keranjangBuah = ["Apel", "Jeruk", "Manggis", "Durian"];

  return (
    <div style={{ 
      padding: "1.7rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
      }}
    >

      <div style={{ fontSize: "1.5rem" }}>
        <h2>Daftar Buah</h2>
        <ul>
          {keranjangBuah.map((buah) => (
            <li>{buah}</li>
          ))}
        </ul>
      </div>
      
    </div>
  );
}

export default App;
