const playPause = document.getElementById("playPause");
const playInfo = document.getElementById("playInfo");
const player = document.getElementById("player");
const homepagePlayer = document.getElementById("homepagePlayer");

const playInfoList = [
    "MONSTER - STARSET",
    "UNTITLED WORLD - ReoNa",
    "INFECTED - STARSET"
]

function homePagePlaySong() {
    if (homepagePlayer.paused) {
        homepagePlayer.play();
        var playInfoStr = "当前播放歌曲：" + playInfoList[playInfo.dataset.key];
        playInfo.innerHTML = "" + playInfoStr;
    } else {
        homepagePlayer.pause();
    }
}

function playSong() {
    if (player.paused) {
        var playInfoNum = parseInt(playInfo.dataset.key) + 1;
        player.src = "sounds/PV/" + playInfoNum + ".mp3";
        player.play();
    } else {
        player.pause();
    }
}

// 音乐播放
player.addEventListener("play", function () {
    // 按键切换
    playPause.src = "images/pause-circle-outline.svg";

    var playInfoStr = "当前播放歌曲：" + playInfoList[playInfo.dataset.key];
    playInfo.innerHTML = "" + playInfoStr;
})

// 音乐暂停
player.addEventListener("pause", function () {
    // 按键切换
    playPause.src = "images/play-circle-outline.svg";
})

// 移动端菜单按钮
function navMenuBtn() {
    var nav = document.getElementById("nav");
    if (nav.dataset.key == 0) {
        nav.className = 'expanded';
        nav.dataset.key = 1;
    } else {
        nav.className = '';
        nav.dataset.key = 0;
    }
}