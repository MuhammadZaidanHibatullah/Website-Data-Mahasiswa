document.addEventListener("DOMContentLoaded", function() {
    const table = document.getElementById("mahasiswa-table");
    const form = document.getElementById("form-mahasiswa");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nim = document.getElementById("nim").value;
        const nama = document.getElementById("nama").value;
        const alamat = document.getElementById("alamat").value;
        const telepon = document.getElementById("telepon").value;

        if (nim && nama && alamat && telepon) {
            const newRow = table.insertRow(-1);
            const cellNim = newRow.insertCell(0);
            const cellNama = newRow.insertCell(1);
            const cellAlamat = newRow.insertCell(2);
            const cellTelepon = newRow.insertCell(3);
            const cellAction = newRow.insertCell(4);

            cellNim.textContent = nim;
            cellNama.textContent = nama;
            cellAlamat.textContent = alamat;
            cellTelepon.textContent = telepon;

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Hapus";
            deleteButton.addEventListener("click", function() {
                newRow.remove();
            });

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.addEventListener("click", function() {
                document.getElementById("nim").value = nim;
                document.getElementById("nama").value = nama;
                document.getElementById("alamat").value = alamat;
                document.getElementById("telepon").value = telepon;
                newRow.remove();
            });

            cellAction.appendChild(deleteButton);
            cellAction.appendChild(editButton);

            form.reset();
        } else {
            alert("Harap lengkapi semua kolom.");
        }
    });
});
