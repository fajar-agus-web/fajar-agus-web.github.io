var btn = document.getElementById('btn-action');
var nama = document.getElementById('input-nama');
var email = document.getElementById('input-email');
var msg = document.getElementById('msg');
var validation = false;
btn.addEventListener('click', function(e) {
    e.preventDefault();
    validation = false;
    [nama, email, msg].forEach(function(el) {
        if (el.value === null || el.value === '') {
            validation = true;
        }
    });

    if (validation) {
        alert('Tidak boleh ada kolom yang kosong');
    } else {
        nama.value = '';
        email.value = '';
        msg.value = '';
        alert('Pesan berhasil dikirim');
    }

});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}