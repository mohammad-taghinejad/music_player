var songs = ["001_Jazr_o_Mad.mp3", "Aroosak.mp3", "Bazam_Asheghetaam.mp3", "Del_Yar.mp3", "Delbar_Nab_Delam.mp3", "Darya_Nemiram.mp3", "Rag.mp3", "Porteghale_Man.mp3", "Bazi.mp3"];
var poster = ["poster1.jpg", "poster2.jpg", "poster3.jpg", "poster4.jpg", "poster5.jpg", "poster6.jpg", "poster7.jpg", "poster8.jpg", "poster9.jpg"];
var sonfTitle = document.getElementById("songTitle");
var fillbar = document.getElementById("fill");
var handlebar = document.getElementById("handle");
var progressContainer = document.getElementById("seek-bar");

var song = new Audio();
var correntSong = 0;
var len = songs.length;

window.onload = playSong;


function playSong() {
    song.src = songs[correntSong];
    sonfTitle.textContent = songs[correntSong];
    song.play();
}

function playOrPauseSong() {
    if (song.paused) {
        song.play();
        $("#play img").attr("src", "https://geektorsupport.ir/music_player/images/handle/pause.png");
    } else {
        song.pause();
        $("#play img").attr("src", "https://geektorsupport.ir/music_player/images/handle/play.png");
    }
}


song.addEventListener('timeupdate', function () {
    var position = song.currentTime / song.duration;
    fillbar.style.width = position * 100 + '%';
});



function next() {
    correntSong++;
    if (correntSong > 7) {
        correntSong = 0;
    }
    playSong();
    $("#play img").attr("src", "https://geektorsupport.ir/music_player/images/handle/pause.png");
    $("#image img").attr("src", poster[correntSong]);
    $("#bg img").attr("src", poster[correntSong]);
}


function pre() {
    correntSong--;
    if (correntSong < 0) {
        correntSong = 7;
    }
    playSong();
    $("#play img").attr("src", "https://geektorsupport.ir/music_player/images/handle/pause.png");
    $("#image img").attr("src", poster[correntSong]);
    $("#bg img").attr("src", poster[correntSong]);
}

song.addEventListener("ended", function playNextS() {
    correntSong++;
    if (correntSong == len) {
        correntSong = 0;
        playSong(correntSong);
        $("#image img").attr("src", poster[correntSong]);
        $("#bg img").attr("src", poster[correntSong]);
    } else {
        playSong(correntSong);
        $("#image img").attr("src", poster[correntSong]);
        $("#bg img").attr("src", poster[correntSong]);
    }
});

function getVolume() {
    alert(song.volume);
}

function setHalfVolume() {
    song.volume = 0.3;
}

function setFullVolume() {
    song.volume = 1.0;
}




function setProgress(e) {
    var width = this.clientWidth;
    var click = e.offsetX;
    var duration = song.duration;
    song.correntSong = (click / width) * duration;
}






















