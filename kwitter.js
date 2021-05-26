function addUser(){
    get_username=document.getElementById("user_name").value;
    localStorage.setItem("user_name",get_username);
    window.location="kwitter_room.html";
}