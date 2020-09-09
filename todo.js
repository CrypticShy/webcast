var box = document.getElementById("todo");
box.style.display = "none";

function HideToDo() {
    var box = document.getElementById("todo");
    var btn = document.getElementById("HideShow");
    if (box.style.display === "none") {
        box.style.display = "block";
        btn.style.opacity = "1"
        btn.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    } else {
        box.style.display = "none";
        btn.style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    }
}