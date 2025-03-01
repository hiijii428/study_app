let display_in = document.createElement('div');
display_in.setAttribute('class', 'display_in');
document.body.appendChild(display_in);
function display_return(){
    display_in.style = "left:100%";
}
function display_in_movement(){
    display_in.innerHTML = `
    <button class="return_button" onclick='display_return()'>戻る</button>
    <h2>加速度と落下</h2>
    <div class="side_parent">
        <div class="side_content" style="">
            <canvas id="movement_Canvas" width="" height="250"></canvas>
            <div id="data"></div>
            初期速度　横向き：<input type="number" step="1" value="0" min="0" id="movement_x_v0" >/s<br>
            初期速度　縦向き：<input type="number" step="1" value="5" min="0" id="movement_y_v0" >/s<br>
            初期位置：<select id="movement_coordinates" >
            <option value="left_top">左上</option>
            <option value="right_top">右上</option>
            <option value="left_bottom">左下</option>
            <option value="right_bottom">右下</option>
            <option value="center" selected>中央</option>
            </select><br>
            縦向きの初速度がプラスで上へ　0で自由落下
            <button onclick="movement()">設定</button><br>
        </div>
        <div class="side_content">
            <div>
            <p>あくまで簡易的なシュミュレーターなので結果が正確であるとは限りません</p>
            </div>
        </div>
    </div>
    `;
    display_in.style = "left:0;"
    movement()
}
function display_in_movement1(){
    display_in.innerHTML = `
    <button class="return_button" onclick='display_return()'>戻る</button>
    <h2>角度と落下</h2>
    <div class="side_parent">
        <div class="side_content" style="">
            <canvas id="movement_Canvas" width="" height="250"></canvas>
            <div id="data"></div>
            初期速度　縦向き：<input type="number" step="1" value="5" id="movement1_v0" >/s<br>
            初速角度：<input type="number" step="1" value="45" min="0" max="90" id="movement1_angle" >°<br>
            <button onclick="movement1()">設定</button><br>
        </div>
        <div class="side_content">
            <div>
            <p>あくまで簡易的なシュミュレーターなので結果が正確であるとは限りません</p>
            </div>
        </div>
    </div>
    `;
    display_in.style = "left:0;"
    movement1()
}