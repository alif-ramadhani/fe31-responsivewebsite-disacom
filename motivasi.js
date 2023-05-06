console.log("OK")

    fetch('https://645527bda74f994b3353a382.mockapi.io/motivasi')
    .then(response => response.json())
    .then(data => {
      // Lakukan sesuatu dengan data yang diterima
      console.log(data);
    })
    .catch(error => {
      // Tangani error jika terjadi
      console.error('Error:', error);
    });