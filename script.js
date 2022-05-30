var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn");
function settingsMenuToggle(){
    settingsmenu.classList.toggle("settings-menu-height");

}

// button /
// var darkBtn = document.getElementById("dark-btn"); 

darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme")=="light"){
        localStorage.getItem("theme","dark");
    }
    else{
        localStorage.getItem("theme","dark");
    }
}

if(localStorage.getItem("theme")=="light"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
else if(localStorage.getItem("theme")=="dark"){
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");

}
else{
    localStorage.setItem("theme","light");
}



// localStorage 
// localStorage.setItem("theme","light");
// localStorage.getItem("theme");
