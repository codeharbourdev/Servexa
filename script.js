/******************  hide and show bar   ************/
let showbar = document.getElementById("showbar");
let sidebar = document.getElementById("sidebar");

function hideShowBar() {
    if(sidebar.style.display === "none") {
        sidebar.style.display = "Flex";
        showbar.classList.add("fa-xmark");
        showbar.classList.remove("fa-bar");
    } else {
        sidebar.style.display = "none";
        showbar.classList.add("fa-bar");
        showbar.classList.remove("fa-xmark");
    }
}

showbar.addEventListener("click", hideShowBar);


/*************************   faqs  *************************/
let quesboxes = document.querySelectorAll(".ques-box");

quesboxes.forEach(quesbox => {
    let ques = quesbox.querySelector(".ques");
    let ans = quesbox.querySelector(".ans");
    let icons = quesbox.querySelector(".icon");


    ques.addEventListener("click", function() {
        quesbox.classList.toggle("active");
        icons.classList.toggle("fa-plus");
        icons.classList.toggle("fa-xmark");
    })
});



