function html_set(){
return new Promise((resolve,reject) => {
        let set_html = `
        <input id="audio_player_drawer_input" class="drawer_hidden" type="checkbox">
        <label for="audio_player_drawer_input" class="drawer_open" id="audio_player_open"><span>♪</span></label>
        <div class="player">
            <audio id="audio_player_audio_tag" src="" data-title=""></audio>
            <div id="audio_player_time" class="time"></div>
            <div>
                <label for="audio_player_time_ber">時間:</label><input type="range" value="0" max="" min="0" step="0.01" id="audio_player_time_ber"><br>
                <label for="audio_player_volume_input">音量:</label><input type="range" value="" min="0" max="1" step="0.01"  id="audio_player_volume_input"><br>
                <button class="audio_player_button" id="audio_player_return">|◀◀</button>
                <span  id="audio_player_play_stop"><button class="audio_player_button" onclick="playAudio()">▶</button></span>
                <button class="audio_player_button" id="audio_player_next">▶▶|</button>
            </div>
            <div id="audio_player_music_table" class="music_table"></div>
            <div style="margin-top:20px;">
                <label for="audio_player_file">聴きたい音楽ファイルを選択<br>またはドロップアンドドラッグ</label><br>
                <input type="file" id="audio_player_file" class="audio_player_file_select"/>
            </div>
        </div>`;
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.innerHTML = set_html;
        resolve("ok");
    })
}
let now_time, audio_time, html, time_ber, player, play_stop, return_button, next_button, file_input, music_list, volume_input;
html_set().then(function(){
    html="<table><tr><th>タイトル</th></tr>"
    time_ber = document.getElementById("audio_player_time_ber");//タイムバー
    player = document.getElementById("audio_player_audio_tag");//audioタグ
    play_stop = document.getElementById("audio_player_play_stop");//再生停止ボタン
    return_button = document.getElementById("audio_player_return");//前の曲
    next_button = document.getElementById("audio_player_next");//次の曲
    file_input = document.getElementById('audio_player_file');//ファイル選択
    volume_input = document.getElementById("audio_player_volume_input");
    music_list=[
        {"title":"music.wav", "src":"music.wav"},
        {"title":"music.wav", "src":"music.wav"},
        {"title":"music.wav", "src":"music.wav"},
        {"title":"music.wav", "src":"music.wav"}
    ]
}).then(function(){
    return_button.addEventListener('click', returnAudio, false );
    next_button.addEventListener('click', nextAudio, false );
    //ボリューム設定
    volume_input.addEventListener("input", (e) => {
        const volume_value = e.target.value;
        console.log("音量移動"+player.volume+"->"+volume_value);
        player.volume = volume_value;
    });
    time_ber.addEventListener("input", (e) => {
        const time_value = e.target.value;
        console.log("時間調整"+player.currentTime+"->"+time_value);
        player.currentTime = time_value;
    });
    file_input.addEventListener('change', evt => {//file が選択(変更)されたら
        get_file(evt)
    });

    volume_input.value = (player.volume).toFixed(2);
    console.log(music_list);
    file_input.value = "";
    player.src=music_list[0]["src"];//srcにセット
    player.dataset.title=music_list[0]["title"];//titleにセット
    music_table();
})
setInterval(time_setting,1000);


function s2hms(s_time){
    h = Math.floor(s_time/(60*60));
    m = Math.floor(s_time/60)-60*h;
    s = Math.floor(s_time-(60*60*h)-(m*60));
    if (h>0) { h=String(h)+"時間" }else{ h="" }//一時間以上あるならn時間を表示
    return h+String(m)+"分"+String(s)+"秒";
}

function time_setting(){
    now_time = (player.currentTime).toFixed(2);
    audio_time = (player.duration).toFixed(2);

    if(now_time===audio_time){nextAudio();}//曲が最後まで流れたら次の曲へ
    time_ber.value = now_time;//time_berに設定　今
    time_ber.max = audio_time;//time_berに設定　全体
    music_title = filename_get(player.dataset.title);
    document.getElementById("audio_player_time").innerHTML = music_title+"<br>"+s2hms(now_time)+"/"+s2hms(audio_time);
}



function playAudio() {
    console.log("play");
    play_stop.innerHTML = "<button class='audio_player_button' onclick='stopAudio()'>■</button>";
    player.play()
}

function stopAudio() {
    console.log("stop");
    console.log(player.currentTime);
    play_stop.innerHTML = '<button class="audio_player_button" onclick="playAudio()">▶</button>'
    player.pause();
}

function returnAudio() {
    console.log("return");
    if(player.currentTime<1){
        for(let m=0;m<music_list.length;m++){
            let music_name = filename_get(music_list[m]["title"]);
            let now_music = filename_get(decodeURIComponent(player.dataset.title));
            console.log("for:"+music_name+" now:"+now_music);
            if (music_name === now_music){//今の曲とforの曲が合うなら
                if(m-1==-1){m=music_list.length;}//最初の曲だったら最後にする
                console.log("src"+music_list[m-1]["src"]);
                console.log("title"+music_list[m-1]["title"]);
                player.src = music_list[m-1]["src"];
                player.dataset.title = music_list[m-1]["title"];
                break;
            }
        }
    }
    player.currentTime = 0;
    playAudio();
}

function nextAudio() {
    console.log("next");
    for(let m=0;m<music_list.length;m++){
        let music_name = filename_get(music_list[m]["title"]);
        let now_music = filename_get(decodeURIComponent(player.dataset.title));
        console.log("for:"+music_name+" now:"+now_music);
        if (music_name === now_music){//今の曲とforの曲が合うなら
            if(m+1==music_list.length){m=-1;}//最後の曲だったら最初にする
            console.log("src"+music_list[m+1]["src"]);
            console.log("title"+music_list[m+1]["title"]);
            player.src = music_list[m+1]["src"];
            player.dataset.title = music_list[m+1]["title"];
            break;
        }
    }
    player.currentTime=0;
    playAudio();
}

function filename_get(pas){
    return pas.substring(pas.lastIndexOf('/') + 1).substring(pas.lastIndexOf('\\') + 1);
}

function get_file(evt){
        let input = evt.target;
        if (input.files.length == 0) {return;}//ファイルがなかったら

        for(let i=0;i<(input.files).length;i++){
            var file = input.files[i];
            console.log(file);
            if (!file.type.match('audio.*')) {//音楽ファイルではなかったら
                alert("音声ファイルを選択してください。");
                return;
            }

            const reader = new FileReader();
            reader.onload = () => {//ファイルを読み込んだらaudio srcにセット
                player.src = reader.result;
                player.dataset.title = file_input.value;

                music_list.push({"title":filename_get(file_input.value),"src":reader.result})//listにセット
                console.log(music_list);
                music_table();

            };
            reader.readAsDataURL(file);
        }
}
function music_table(){
    html="<ul><li><b>タイトル</b></li>"
    for(let m=0;m<music_list.length;m++){
        let music_name = filename_get(music_list[m]["title"]);
        html+="<li class='music_list_content' onclick='table_music_select(this.textContent)'>"+music_name+"</li>";
    }
    html+="</ul>";
    document.getElementById("audio_player_music_table").innerHTML=html;
}
function table_music_select(name){
    console.log("table_music_select");
    for(let m=0;m<music_list.length;m++){
        let music_name = filename_get(music_list[m]["title"]);
        console.log("for:"+music_name+" now:"+name);
        if (music_name === name){//今の曲とforの曲が合うなら
            console.log("src"+music_list[m]["src"]);
            console.log("title"+music_list[m]["title"]);
            player.src = music_list[m]["src"];
            player.dataset.title = music_list[m]["title"];
            player.currentTime=0;
            playAudio();
            break;
        }
    }
}
//https://engineering.dn-voice.info/prg-tips/htmlcss/customdata/  自己属性　設定方法
//https://qiita.com/FrogApp/items/aad6a190d26e79c5abb2  音楽読み込み方法
