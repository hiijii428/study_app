let display_in = document.createElement('div');
display_in.setAttribute('class', 'display_in');
document.body.appendChild(display_in);
/***************************************math*****************************************/
function display_return(){
    display_in.style = "left:100%";
}
function display_in_ken(){
    display_in.innerHTML = `
    <button class="return_button" onclick='display_return()'>戻る</button>
    <h2>県の分類</h2>
        <link rel="stylesheet" href="./css/filter.css">
        <div id="btns">
            <div>
                <div class="tag_button" id="北海道地方">北海道地方</div>
                <div class="tag_button" id="東北地方">東北地方</div>
                <div class="tag_button" id="関東地方">関東地方</div>
                <div class="tag_button" id="中部地方">中部地方</div>
                <div class="tag_button" id="近畿地方">近畿地方</div>
                <div class="tag_button" id="中国地方">中国地方</div>
                <div class="tag_button" id="四国地方">四国地方</div>
                <div class="tag_button" id="九州地方">九州地方</div>
            </div>
            <div>
                <div class="tag_button" id="日本海側">日本海側</div>
                <div class="tag_button" id="太平洋側">太平洋側</div>
                <div class="tag_button" id="内陸">内陸</div>
                <div class="tag_button" id="瀬戸内">瀬戸内</div>
                <div class="tag_button" id="中央高地">中央高地</div>

            </div>
        </div>
        <div id="res"></div>
        <div id="item">
            <div class="content">
                <h1>北海道</h1>
                <div class="tag">北海道地方</div>
            </div>
            <div class="content">
                <h1>青森県</h1>
                <div class="tag">東北地方</div>
            </div>
            <div class="content">
                <h1>秋田県</h1>
                <div class="tag">東北地方　日本海側</div>
            </div>
            <div class="content">
                <h1>岩手県</h1>
                <div class="tag">東北地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>山形県</h1>
                <div class="tag">東北地方　日本海側</div>
            </div>
            <div class="content">
                <h1>宮城県</h1>
                <div class="tag">東北地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>福島県</h1>
                <div class="tag">東北地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>埼玉県</h1>
                <div class="tag">関東地方　内陸</div>
            </div>
            <div class="content">
                <h1>群馬県</h1>
                <div class="tag">関東地方　内陸</div>
            </div>
            <div class="content">
                <h1>茨城県</h1>
                <div class="tag">関東地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>千葉県</h1>
                <div class="tag">関東地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>東京都</h1>
                <div class="tag">関東地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>神奈川県</h1>
                <div class="tag">関東地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>新潟県</h1>
                <div class="tag">中部地方　日本海側</div>
            </div>
            <div class="content">
                <h1>富山県</h1>
                <div class="tag">中部地方　日本海側</div>
            </div>
            <div class="content">
                <h1>石川県</h1>
                <div class="tag">中部地方　日本海側</div>
            </div>
            <div class="content">
                <h1>福井県</h1>
                <div class="tag">中部地方　日本海側</div>
            </div>
            <div class="content">
                <h1>山梨県</h1>
                <div class="tag">中部地方　中央高地　内陸</div>
            </div>
            <div class="content">
                <h1>長野県</h1>
                <div class="tag">中部地方　中央高地　内陸</div>
            </div>
            <div class="content">
                <h1>岐阜県</h1>
                <div class="tag">中部地方　中央高地　内陸</div>
            </div>
            <div class="content">
                <h1>静岡県</h1>
                <div class="tag">中部地方　太平洋側　地理的東海地方</div>
            </div>
            <div class="content">
                <h1>愛知県</h1>
                <div class="tag">中部地方　太平洋側　地理的東海地方　社会的東海地方</div>
            </div>
            <div class="content">
                <h1>三重県</h1>
                <div class="tag">近畿地方　社会的東海地方</div>
            </div>
            <div class="content">
                <h1>滋賀県</h1>
                <div class="tag">近畿地方　内陸</div>
            </div>
            <div class="content">
                <h1>奈良県</h1>
                <div class="tag">近畿地方　内陸</div>
            </div>
            <div class="content">
                <h1>京都府</h1>
                <div class="tag">近畿地方　日本海側</div>
            </div>
            <div class="content">
                <h1>大阪県</h1>
                <div class="tag">近畿地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>和歌山県</h1>
                <div class="tag">近畿地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>兵庫県</h1>
                <div class="tag">近畿地方　日本海側　瀬戸内</div>
            </div>
            <div class="content">
                <h1>鳥取県</h1>
                <div class="tag">中国地方　日本海側</div>
            </div>
            <div class="content">
                <h1>島根県</h1>
                <div class="tag">中国地方　日本海側</div>
            </div>
            <div class="content">
                <h1>山口県</h1>
                <div class="tag">中国地方　日本海側　瀬戸内</div>
            </div>
            <div class="content">
                <h1>岡山県</h1>
                <div class="tag">中国地方　瀬戸内</div>
            </div>
            <div class="content">
                <h1>広島県</h1>
                <div class="tag">中国地方　瀬戸内</div>
            </div>
            <div class="content">
                <h1>香川県</h1>
                <div class="tag">四国地方　瀬戸内</div>
            </div>
            <div class="content">
                <h1>愛媛県</h1>
                <div class="tag">四国地方　瀬戸内</div>
            </div>
            <div class="content">
                <h1>徳島県</h1>
                <div class="tag">四国地方　瀬戸内</div>
            </div>
            <div class="content">
                <h1>高知県</h1>
                <div class="tag">四国地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>福岡県</h1>
                <div class="tag">九州地方　日本海側</div>
            </div>
            <div class="content">
                <h1>佐賀県</h1>
                <div class="tag">九州地方　日本海側</div>
            </div>
            <div class="content">
                <h1>長崎県</h1>
                <div class="tag">九州地方　日本海側</div>
            </div>
            <div class="content">
                <h1>大分県</h1>
                <div class="tag">九州地方　瀬戸内</div>
            </div>
            <div class="content">
                <h1>熊本県</h1>
                <div class="tag">九州地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>宮崎県</h1>
                <div class="tag">九州地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>鹿児島県</h1>
                <div class="tag">九州地方　太平洋側</div>
            </div>
            <div class="content">
                <h1>沖縄県</h1>
                <div class="tag">九州地方　太平洋側</div>
            </div>
        </div>
    `;
    display_in.style = "left:0;"
    // TODO 動かないのを解消
}
function display_in_kawwase(){
    display_in.innerHTML=`
    <button class="return_button" onclick='display_return()'>戻る</button>
    <h2>為替、円安、円高とは</h2>
    <div class="side_parent">
        <div class="side_content" style="">
        1ドル<input type="number" id="yen" value="160" oninput="kawase()">円
        <div id="data"></div>
        <button onclick="kawase()">設定</button><br>
        </div>
        <div class="side_content">
        </div>
    </div>
`
    display_in.style="left:0;"
    kawase();
}