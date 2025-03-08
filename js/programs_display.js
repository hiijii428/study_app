let display_in = document.createElement('div');
display_in.setAttribute('class', 'display_in');
document.body.appendChild(display_in);
/***************************************math*****************************************/
function display_return(){
    display_in.style = "left:100%";
}
function display_in_html(){
    display_in.innerHTML = `
    <button class="return_button" onclick='display_return()'>戻る</button>
    <h2>ウェブページを形作る - HTML</h2>
    <div class="side_parent">
        <div class="side_content" style="">
            <textarea id="html_input" style="width:40vw;min-height:100px;" placeholder="ここにコードを記述すると、下の枠に表示されます。javascriptは入力しないでください。" oninput="programs_html()"></textarea>
            <div id="html_output" style="border: 1px solid #aaa;border-radius:15px; width:90%;min-height:100px;padding:10px;"></div>
        </div>
        <div class="side_content">
            <h2>HTMLとは</h2>
            HTMLとは、HyperText Markup Languageといい、 WEBページを形作る、マークアップ言語です。<br>
            <mark>ほとんどののWEBページは、HTMLが使われています。</mark><br>
            HTMLには、段落を作ったり、タイトル、サブタイトルを作ったり、ボタン、入力欄、リンク、画像などいろいろ作ることができます。<br>
            HTMLだけでは、スタイルがなく、そっけないですが、CSSというものを使うことで、きれいな表示をすることができます。<br><br>

            HTMLにはタグというものがあり、<code>&lt;h1&gt;h1</code>というふうに小なりと大なりを使用します。<br>
            例えば、タイトルにしたい文字を「h1」タグで囲うことで、タイトルを表示できます。<code>&lt;h1&gt;h1 タイトルだよ&lt;/h1&gt;</code><br>
            例えば以下のコードをコピーして、試してみてください。
            <div>
            <pre><code>
&lt;h1&gt;h1 タイトルだよ&lt;/h1&gt;
&lt;h2&gt;h2 サブタイトルだよ&lt;/h2&gt;
&lt;h3&gt;h3 見出しだよ&lt;/h3&gt;
&lt;p&gt;
段落だよ&lt;br&gt;
＜br＞で改行できるよ
段落だよ
&lt;/p&gt;

&lt;a href=&quot;https://www.google.com&quot; target=&quot;_blank&quot;&gt;グーグル行きのリンクだよ&lt;/a&gt;
&lt;button&gt;ボタン！&lt;/button&gt;

&lt;div class=&quot;test_div&quot;&gt;
    &lt;h3&gt;divだよ&lt;/h3&gt;
    &lt;p&gt;タグをグループ化できるよ&lt;/p&gt;
&lt;/div&gt;

&lt;style&gt;
.test_div{
    border:1px solid black; /*枠線をつける*/
    border-radius:15px; /*角を丸くする*/
}
&lt;/style&gt;
            <pre><code>
            </div>
        </div>
    </div> `;
display_in.style = "left:0;"
programs_html();
}
function display_in_binary_number(){
    display_in.innerHTML = `
    <button class="return_button" onclick='display_return()'>戻る</button>
    <h2>二進数</h2>
    <div class="side_parent">
        <div class="side_content" style="">
            <textarea id="html_input" style="width:40vw;min-height:100px;" placeholder="ここにコードを記述すると、下の枠に表示されます。" oninput="programs_html()"></textarea>
            <div id="html_output" style="border: 1px solid #aaa;border-radius:15px; width:90%;min-height:100px;padding:10px;"></div>
        </div>
        <div class="side_content">
        </div>
    </div>`
    display_in.style = "left:0;"
    binary_number()
}