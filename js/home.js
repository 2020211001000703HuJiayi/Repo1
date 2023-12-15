// 首页 播放列表按键
function homepagePlayPV() {
    var PVList = document.getElementsByName("PV");
    for (i = 0; i < PVList.length; i++) {
        if (PVList[i].checked) {
            var PVNum = i + 1;
            document.getElementById("homepagePlayer").src = "sounds/PV/" + PVNum + ".mp3";
            document.getElementById("homepagePlayer").autoplay = "autoplay";

            // 按键切换
            document.getElementById("playPause").src = "images/pause-circle-outline.svg";
            document.getElementById("playInfo").dataset.key = i;
            var playInfoStr = "当前播放歌曲：" + playInfoList[playInfo.dataset.key];
            playInfo.innerHTML = "" + playInfoStr;
        }
    }
}

// 音乐播放
homepagePlayer.addEventListener("play", function () {
    // 按键切换
    playPause.src = "images/pause-circle-outline.svg";

    var playInfoStr = "当前播放歌曲：" + playInfoList[playInfo.dataset.key];
    playInfo.innerHTML = "" + playInfoStr;
})

// 音乐暂停
homepagePlayer.addEventListener("pause", function () {
    // 按键切换
    playPause.src = "images/play-circle-outline.svg";
})