var password = document.getElementById("password");
var iconInput = document.getElementById("icon");
iconInput.addEventListener("click", function (z) {
    iconInput.style.display = 'none';
    var type = password.getAttribute("type") == "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle('fa-fa-eye-slash');
    // iconInput.appendChild='<i class="fa-solid fa-eye"></i>';
    //toggle=gizliyse görünür,görünürse gizli yapar
});