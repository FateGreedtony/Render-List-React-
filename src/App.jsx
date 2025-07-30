function App() {
  const studentList = [
    { id: 1, nama: "Bastian", kelas: "X PPLG 2" },
    { id: 2, nama: "Fajar", kelas: "XI PPLG 3" },
    { id: 3, nama: "Adit", kelas: "XII PPLG 1" }
  ];

  return (
    <div style={{ 
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center"
    }}>

      <div style={{ fontSize: "2rem" }}>
        <h2>Daftar Siswa</h2>
        <ul>
          {studentList.map((siswa) => (
            <li key={siswa.id}>
              Nama: {siswa.nama} | Kelas: {siswa.kelas} | ID: {siswa.id}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;



// function App() {
//   const keranjangBuah = ["Apel", "Jeruk", "Manggis", "Durian"];

//   return (
//     <div style={{ 
//       padding: "1.7rem",
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center"
//       }}
//     >

//       <div style={{ fontSize: "1.5rem" }}>
//         <h2>Daftar Buah</h2>
//         <ul>
//           {keranjangBuah.map((buah) => (
//             <li>{buah}</li>
//           ))}
//         </ul>
//       </div>
      
//     </div>
//   );
// }

// export default App;
