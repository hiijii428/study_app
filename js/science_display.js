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
function display_in_quantum(){
    display_in.innerHTML = `
    <button class="return_button" onclick='display_return()'>戻る</button>
    <style>
    .bored div div{/*マス目*/
        background-color:#ca7;
        width:30px;
        height:30px;
        margin:1px;
        display: inline-block;
    }.bored div div>div{/*石*/
        width: calc(30px*0.8);
        height:calc(30px*0.8);
        border-radius:50%;
        /*中央寄せ*/
        display:block;
        margin: 0 auto;
        position: relative;
        top: calc(30px* 0.1);
    }
    div.black90_click>div{background-color:#111;}
    div.white90_click>div{background-color:#eee;}
    div.black70_click>div{background-color:#444;}
    div.white70_click>div{background-color:#ccc;}
    black_click>div{background-color:black;}
    white_click>div{background-color:white;}

    #order.black90::before{content:"黒（90％）"}
    #order.white90::before{content:"白（90％）"}
    #order.black70::before{content:"黒（70％）"}
    #order.white70::before{content:"白（70％）"}
    </style>
    <h2>量子力学の不確定性原理のような五目並べ</h2>
    <div class="side_parent">
        <div class="side_content" style="">
            <div id="order" class="black90">の番</div>
            <div class="bored">
                <div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                </div>
                <div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                </div>
                <div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                </div>
                <div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                </div>
                <div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                </div>
                <div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                </div>
                <div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                    <div onclick="quantum_click(this)"><div></div></div>
                </div>
            </div>
            <div id="data"></div>
            <button onclick="quantum_observation()">観測</button>
            <button onclick="quantum_observation_false()">観測から戻る</button>
            <button onclick="display_in_quantum()">リセット</button>
        </div>
        <div class="side_content">
        <h3>量子四目並べ</h3>
        量子力学には、様々な状態が重なっているという不思議なことが起こるらしいです。（言葉じゃ難しい）
        例えば、電子を仕切りのある箱に入れると、普通なら、入れた場所にしか電子はないと思いますが、<br>
        量子力学というものでは、仕切り関係なく、すべての場所に電子がある状態が重なり合っていて、<br>
        <mark>観測したときに初めて、どこにあるかわかる</mark>という不思議なことが起こるらしいです。<br><br>
        これは、その特徴を四目並べに置き換えてみたものです。<br>
        詳しくは、<a href="https://www.youtube.com/watch?v=mitAxA3f4U4">クイズノック　量子五目並べ</a>を見てください。

        <h3>遊び方</h3>
        石には4種類あり、それぞれ、黒（白）になる確率が決まっていて、観測しないとホントの色はわかりません<br>
        石の種類：
        <ul>
            <li>黒になる確率90％</li>
            <li>黒になる確率70％</li>
            <li>白になる確率90％</li>
            <li>白になる確率70％</li>
        </ul>
        <ol>
        <li>石を置きたいところをクリックする<br>
            石の順番は、黒90% -> 白90％ -> 黒70％ -> 白70％ -> 黒90％ ・・・
        </li>
        <li>そろそろ揃ったなと思ったら、観測ボタンを押す。</li>
        <li>揃っていなかったら、「観測から戻る」ボタンを押し、盤面に戻る</li>
        <li>ゲームが終わったら「リセット」ボタンを押し、もう一回！</li>
        </ol>
        </div>
    </div>
    `;
    display_in.style = "left:0;"
}