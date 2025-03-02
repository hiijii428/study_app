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
            縦向きの初速度がプラスで上へ　0で自由落下
            <button onclick="movement()">設定</button><br>
        </div>
        <div class="side_content">
            <div>
            <h2>加速度と落下</h2>
            物体の自由落下と上昇についてのシュミュレーションをすることができます。<br>
            シュミレーター内のマウスクリック(タップ)で物体の開始位置を指定することができます。<br>
            落下の開始位置や、上に投げるスピード、下に落とすスピードを変化すると、落下時の速度が変わるのがわかると思います。
            <p>あくまで簡易的なシュミュレーターなので結果が正確であるとは限りません</p>
            </div>
        </div>
    </div>
    `;
    display_in.style = "left:0;"
    canvas_size_set();
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
            初期速度：<input type="number" step="1" value="7" id="movement1_v0" >/s<br>
            初速角度：<input type="number" step="1" value="45" min="0" max="90" id="movement1_angle" >°<br>
            <button onclick="movement1()">設定</button><br>
        </div>
        <div class="side_content">
            <div>
            <h2>角度と落下</h2>
            物体の投げる角度で着地距離がどう変わるのかシュミュレーションをすることができます。<br>
            シュミレーター内のマウスクリック(タップ)で物体の開始位置を指定することができます。<br>
            落下の開始位置や、上に投げるスピード、下に落とすスピードを変化すると、落下時の速度が変わるのがわかると思います。
            <p>あくまで簡易的なシュミュレーターなので結果が正確であるとは限りません</p>
            </div>
        </div>
    </div>
    `;
    display_in.style = "left:0;"
    canvas_size_set()
    movement1()
}