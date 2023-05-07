function temizle() {
    document.getElementsByTagName("input").value = "";
  }

  function kontrol(){
  var email = document.getElementById('mail').value;
  var name = document.getElementById('name').value;
  var message  = document.getElementById('message').value;

  if (email == "") {
    alert("E-mail boş bırakılamaz!");
  }
  if(name ==""){
    alert("İsim boş bırakılamaz!");
  }
  if (message == "") {
    alert("Mesaj kısmı boş bırakılamaz!");
  }

}