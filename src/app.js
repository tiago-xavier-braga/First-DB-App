var db;
var request = indexedDB.open("DBteste");
request.onerror = function(event) {
  alert("Você não habilitou minha web app para usar IndexedDB?!");
};
request.onsuccess = function(event) {
  db = request.result;
};