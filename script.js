document.getElementById("formMutasi").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("hasil").innerHTML =
"✅ Data berhasil dicek.<br>Langkah berikutnya kita akan menghubungkan ke Google Spreadsheet.";

});
