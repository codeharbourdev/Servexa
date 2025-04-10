let imgbox = document.getElementById("img-box");
let headingbox = document.getElementById("heading-box");
let audiocontainer = document.getElementById("audio-container");

let audiorun = document.getElementById("audio-run");
let prevbtn = document.getElementById("prev");
let playbtn = document.getElementById("play");
let nextbtn = document.getElementById("next");
let audio = document.getElementById("myaudio");

let volumeslider = document.getElementById("volume-slider");

let mutebtn = document.getElementById("mutebtn");


/**************  song  ******************/
const audiolist = [
    "song1.mp3.mp3",
    "song2.mp3",
    "song3.mp3",
    "song4.mp3",
    "song5.mp3",
    "song6.mp3",
    "song7.mp3",
    "song8.mp3",
    "song9.mp3",
    "song10.mp3"
];

/******************   song name  ****************/
const audioname = [
    "Vellake",
    "Unakku Than",
    "Jannat BGM",
    "Aasa Kooda",
    "Premante Ente",
    "Oke Oka Loakam",
    "Kadhalae Kadhalae",
    "Nijamene Chebutanna",
    "Madhura Nagarilo",
    "Katchi Sera"
];

/********************   audipic   *******************/
const audiopic =[
    "song1.pic.jpg",
    "song2.pic.jpg",
    "song3.pic.jpg",
    "song4.pic.jpeg",
    "song5.pic.jpg",
    "song6.pic.jpg",
    "song7.pic.jpg",
    "song8.pic.jpg",
    "song9.pic.jpg",
    "song10.pic.png"
];

let cuurentIndex = 0;

function updateimage(cuurentIndex) {
    imgbox.innerHTML = "";
    let img = document.createElement("img");
    img.src =  audiopic[cuurentIndex];
    img.alt = "song image";

    imgbox.appendChild(img);
}

updateimage(0);


function loadsong() {
    audio.src = audiolist[cuurentIndex];
}


loadsong(cuurentIndex);

/****************** play song  **********************/
playbtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
      playbtn.classList.remove("fa-play");
      playbtn.classList.add("fa-pause");
    } else {
      audio.pause();
      playbtn.classList.remove("fa-pause");
      playbtn.classList.add("fa-play");
    }
});


/******************** prev   ************************/
prevbtn.addEventListener("click", () => {
    cuurentIndex = (cuurentIndex - 1 + audiolist.length) % audiolist.length;
    headingbox.innerText = audioname[cuurentIndex];
    loadsong(cuurentIndex);
    updateimage(cuurentIndex);
    audio.play();
})

/******************** next   ************************/
function playnext() {
    cuurentIndex = (cuurentIndex + 1) % audiolist.length;
    headingbox.innerText = audioname[cuurentIndex];
    loadsong(cuurentIndex);
    updateimage(cuurentIndex);
    audio.play();
}

nextbtn.addEventListener("click", playnext);

/*************************  traking bar  *************/
audio.addEventListener("timeupdate", () => {
    let progress = (audio.currentTime / audio.duration) * 100;

    audiorun.style.width = `${progress}%`;
});

audiocontainer.addEventListener("click", (e) => {
    const width = audiocontainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
})


/****************  volume   *******************/
volumeslider.addEventListener("input", () => {
    audio.volume = volumeslider.value / 100;
})

mutebtn.addEventListener("click", () => {
    if(audio.muted === false) {
        audio.muted = true;
        mutebtn.classList.remove("fa-volume-high"); 
        mutebtn.classList.add("fa-volume-xmark"); 
    } else {
        audio.muted = false;
        mutebtn.classList.remove("fa-volume-xmark");
        mutebtn.classList.add("fa-volume-high"); 
    }
})

audio.addEventListener("ended", () => {
    playnext();
})