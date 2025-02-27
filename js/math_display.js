let display_in = document.createElement('div');
display_in.setAttribute('class', 'display_in');
document.body.appendChild(display_in);
/***************************************math*****************************************/
function display_return(){
    display_in.style = "left:100%";
}
function display_in_hirei(){
    display_in.innerHTML = `
            <button class="return_button" onclick='display_return()'>戻る</button>
            <h2>比例グラフ</h2>
            <p>グラフを動かすことによって比例の性質を知ることができます。</p>
            <div class="side_parent">
                <div class="side_content" style="">
                    <canvas id="hireiChart" style="background-color: #fff;"></canvas>
                </div>
                <div class="side_content">
                    <p id="hirei_print"></p>
                    <div id="hirei_table" class="list_table"></div>
                    <br><label>要素の個数:<input type="range" id="hirei_pieces" step="1" min="2" max="5000" value="10" oninput="hirei()"></label>
                    <br><label>初項:　　　<input type="range" id="hirei_start_number" step="1" min="1" max="50" value="10" oninput="hirei()"></label>
                    <br><label>比例定数:　<input type="range" id="hirei_step" step="1" min="1" max="50" value="2" oninput="hirei()"></label>
                    <br><label>負の数も含める:<input type="checkbox" id="hirei_minus" oninput="hirei()"></label>
                    <button onclick="hirei()">設定</button>
                </div>
            </div> `;
    display_in.style = "left:0;"
    hirei();
}
function display_in_hanhirei(){
    display_in.innerHTML = `
            <button class="return_button" onclick='display_return()'>戻る</button>
            <h2>反比例グラフ</h2>
            <p>グラフを動かすことによって反比例の性質を知ることができます。</p>
            <div class="side_parent">
                <div class="side_content" style="">
                    <canvas id="hannhireiChart"></canvas>
                </div>
                <div class="side_content">
                    <p id="hannhirei_print"></p>
                    <div id="hannhirei_table" class="list_table"></div>
                    <br><label>要素の個数:<input type="range" id="hannhirei_pieces" step="1" min="2" max="1000" value="10" oninput="hanhirei()"></label>
                    <br><label>初項:　　　<input type="range" id="hannhirei_start_number" step="1" min="1" max="50" value="10" oninput="hanhirei()"></label>
                    <br><label>比例定数:　<input type="range" id="hannhirei_step" step="1" min="1" max="50" value="2" oninput="hanhirei()"></label>
                    <br><label>負の数も含める:<input type="checkbox" id="hannhirei_minus"></label>
                    <button onclick="hanhirei()">設定</button>
                </div>
            </div> `;
    display_in.style = "left:0;"
    hanhirei();
}
function display_in_tousa(){
    display_in.innerHTML = `
        <button class="return_button" onclick='display_return()'>戻る</button>
        <h2>等差数列</h2>
        <div class="side_parent">
            <div class="side_content" style="">
                    <canvas id="tousaChart" style="background-color: #fff;"></canvas>
                    <div id="add"></div>
                    初項の値：<input type="number" min="2" max="50" value="10" id="add_number0" oninput="tousa()"><br>
                    公差の値：<input type="number" min="2" max="50" value="10" id="add_number1" oninput="tousa()"><br>
                    要素の個数：<input type="range" min="2" max="50" value="10" id="add_number2" oninput="tousa()"><br>
                    <button onclick="tousa()">設定</button><br>
                </div>
            <div class="side_content">
                等差数列とは、数列の公差が一定の数値になっている数列です。<br>
                例えば、1,2,3,4,5,6,7,8,9,10・・・という数列は、初項1、公差1の等差数列となります。<br>
                偶数の数列や、3の倍数の数列なども等差数列となります。<br>
            </div>
        </div>
    `;
    display_in.style = "left:0;"
    tousa();
}
function display_in_touhi(){
    display_in.innerHTML = `
        <button class="return_button" onclick='display_return()'>戻る</button>
        <h2>等比数列</h2>
        <div class="side_parent">
            <div class="side_content" style="">
                    <canvas id="touhiChart" style="background-color: #fff;"></canvas>
                    <div id="put"></div>
                    初項の値：<input type="number" min="2" max="50" value="2" id="put_number0" oninput="touhi()"><br>
                    公比の値：<input type="number" min="2" max="50" value="2" id="put_number1" oninput="touhi()"><br>
                    要素の個数：<input type="range" min="2" max="50" value="10" id="put_number2" oninput="touhi()"><br>
                    <button onclick="touhi()">設定</button><br>
            </div>
            <div class="side_content">
                等比数列とは、数列の公比が一定の数値になっている数列です。<br>
                例えば、1,2,4,8,16,32,64,128,256,512・・・という数列は、初項1、公比2、の等比数列となります。<br>
            </div>
        </div>

    `;
    display_in.style = "left:0;";
    touhi();
}
function display_in_fibonacci(){
    display_in.innerHTML = `
        <button class="return_button" onclick='display_return()'>戻る</button>
        <h2>フィボナッチ数列</h2>
        <div class="side_parent">
            <div class="side_content" style="">
                    <canvas id="fibonacciChart" style="background-color: #fff;"></canvas>
                    <div id="fibonacci_list"></div>
                    <label for="fibonacci_type">数列の種類:</label>
                    <select id="fibonacci_type" oninput="fibonacci()">
                        <option value="1">フィボナッチ数列(前の項2つの和が次の項)</option>
                        <option value="2">トリボナッチ数列(前の項3つの和が次の項)</option>
                        <option value="3">テトラナッチ数列(前の項4つの和が次の項)</option>
                        <option value="4">ペンタナッチ数列(前の項5つの和が次の項)</option>
                        <option value="5">ヘキサナッチ数列(前の項6つの和が次の項)</option>
                    </select><br>
                    要素の個数：<input type="range" min="2" max="100" value="10" id="fibonacci_number" oninput="fibonacci()">
                    <button onclick="fibonacci()">設定</button><br>
            </div>
            <div class="side_content">
                フィボナッチ数列とは､　1,1,2,3,5,8,13･･･　のような<mark>初項、第2項が1ではじまり､前の項2つの合計が次項になる数列</mark>です｡<br>
                ひまわりの花の種の並びが、この数列を並べた姿になっていたり、図形に表した姿が、アンモナイトの形に似ていたり、と<mark>自然の中にフィボナッチ数列が隠れています。</mark><br><br>
                フィボナッチ数列の式
                a<sub>0</sub>=a<sub>1</sub>=1 <br>
                a<sub>n+2</sub>=a<sub>n</sub>+a<sub>n+1</sub> (n>=1) <br>
                0, &nbsp; 1, &nbsp; 0+1(1), &nbsp; 1+1(2), &nbsp; 1+2(3), &nbsp; 2+3(5), &nbsp; 3+5(8), &nbsp; 5+8(13)･･･ <br>
                <br>
                また、フィボナッチ数列の兄弟のような存在として、トリポナッチ数列やテトラナッチ数列などがあります。<br>
                トリポナッチ数列は前3項の和が次の項に、<br>
                テトラナッチ数列は前4項の和が次の項に、となります。<br>
            </div>
        </div>
    `;
    display_in.style = "left:0;";
    fibonacci();
}
function display_in_aliquot(){
    display_in.innerHTML = `
        <button class="return_button" onclick='display_return()'>戻る</button>
        <h2>アリコット数列</h2>
        <div class="side_parent">
            <div class="side_content" style="">
                    <canvas id="aliquotChart" style="background-color: #fff;"></canvas>
                    <div id="aliquot_list"></div>
                    初項の値：<input type="number" min="2" max="50" value="10" id="aliquot_number" oninput="aliquot()">
                    <button onclick="aliquot()">設定</button><br>
            </div>
            <div class="side_content">
                <div>
                    <p>
                        <p>
                            アリコット数列とは、<mark>前の項の約数の和(自分自身を除いた約数の和)が次の項になる数列</mark>です。<br>
                            また、<u><b>ランダムな数が並び、</b>無限に続く数列はあるのか、</u>や、アリコット数列上で、<u>どのような数が、1になるのかという問題</u>は、<mark>未解決問題となっています。</mark>
                        </p>
                        <mark>・ポイント</mark><br>
                        <mark><b>アリコット数列の中に、下の数があるとループして無限に続いてしまいます。</b></mark>
                        <ul>
                            <li><mark>完全数</mark></li>
                                <ul>
                                    <li>
                                        自分自身を除いた約数の和と自身の数が一致する数。今までで51個しか見つかっていない。6や28などが完全数。<br>
                                        6の約数:1,2,3,6　1+2+3=6　　28の約数:1,2,4,7,14,28　1+2+4+7+14=28　　
                                    </li>
                                </ul>
                            <li><mark>友愛数</mark></li>
                                <ul>
                                    <li>
                                        2つの数の、自分自身を除いた約数の和がお互いに一致している数。　220と284が、最小の友愛数。<br>
                                        220の約数:1,2,4,5,10,11,20,22,44,55,110,220　1+2+4+5+10+11+20+22+44+55+110=284<br>
                                        284の約数:1,2,4,71,142　1+2+4+71+142=220<br>
                                    </li>
                                </ul>
                            <li><mark>社交数</mark></li>
                                <ul>
                                    <li>
                                        2つ以上の数の、自分自身を除いた約数の和がお互いに一致している数。友愛数の数字の個数が3つ以上になったもの。<br>
                                        12496、14288、15472、14536、14264の組が最小の社交数。
                                    </li>
                                </ul>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    `;
    display_in.style = "left:0;";
    aliquot();
}
function display_in_collats(){
    display_in.innerHTML = `
        <button class="return_button" onclick='display_return()'>戻る</button>
        <h2>コラッツ予想</h2>
        <div class="side_parent">
            <div class="side_content" style="">
                    <canvas id="collatsChart" style="background-color: #fff;"></canvas>
                    <div id="collats_list"></div>
                    初項の値：<input type="number" min="1" value="27" id="collats_number" oninput="collats()">
                    <button onclick="collats()">設定</button><br>
            </div>
            <div class="side_content">
                コラッツの問題とは、偶数なら２で割り、奇数なら３倍して１足す、という動作を繰り返したらどの数も必ず１になるかという問題です。
            </div>
        </div>
    `;
    display_in.style = "left:0;"
    collats();
}
function display_in_pai(){
    display_in.innerHTML = `
    <button class="return_button" onclick='display_return()'>戻る</button>
    <h2>ぱいこね変換</h2>
    <div class="side_parent">
        <div class="side_content" style="">
            <canvas id="piCanvas" width="400" height="30"></canvas> 
            <div id="data"></div>
            初期値：<input type="number" step="0.000001" value="20" id="pi_number" oninput="pi()"><br>
            こねる回数：<input type="number" step="25" value="300" id="loop_number" oninput="pi()"><br>
            <button onclick="pi()">設定</button><br>
        </div>
        <div class="side_content">
            <div>
                <h3>ぱいこね変換とは</h3>

            </div>
        </div>
    </div>
`;
display_in.style = "left:0;"
pi();

}
function display_in_trigonometric_circle(){
    display_in.innerHTML = `
    <button class="return_button" onclick='display_return()'>戻る</button>
    <h2>三角関数による円の描画</h2>
    <div class="side_parent">
        <div class="side_content" style="">
            <canvas id="trigonometric-cricle_Canvas" width="500" height="500"></canvas> 
            <div id="data"></div>
            角度：<input type="range" step="1" value="30" min="0" max="360" id="trigonometric-circle_number" oninput="trigonometric_circle()"><br>
            <button onclick="trigonometric_circle()">設定</button><br>
        </div>
        <div class="side_content">
            <div>

            </div>
        </div>
    </div>
`;
display_in.style = "left:0;"
trigonometric_circle();

}

/***************************************math*****************************************/
