// Ambil elemen tombol dan paragraf berdasarkan ID
const button = document.getElementById('myButton');
const messageParagraph = document.getElementById('message');

// Menambahkan event listener untuk mouseover
button.addEventListener('mouseover', function() {
    // Perbarui teks paragraf saat mouse berada di atas tombol
    messageParagraph.textContent = 'Mouse is over the button!';
});
