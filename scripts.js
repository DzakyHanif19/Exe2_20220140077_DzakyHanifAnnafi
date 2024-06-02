document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    alert(`Nama: ${name}\nTanggal: ${date}\nWaktu: ${time}`);
});
