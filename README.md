# study_app - 目で見る教科書

目で見て**直感的内容を理解できる第二の教科書**となるようなウェブアプリ。  
「グラフなどを実際に動かし、動作の仕方を見ることによって、誰でも簡単に理解することができる」ことをなんとなくの目標に作成しています。

[アプリのプレビュー (https://hiijii428.github.io/study_app) ](https://hiijii428.github.io/study_app)

素人なので、完成度は0に近いです。  
スマホではあまり確認していないので、スマホで使いにくい場合があります。  
その場合は、画面を横（横長）にしていただくと、使いやすくなると思います。

#### **注意!　あくまでプレビューです。**
- 国語と社会の内容は未定です。
- TODOリストは、保存できません。
- 音楽は流れません。

#### スクリプトについて
- html
	- index.html : トップ画面
	- japanese.html : 国語
	- math.html : 数学
	- society.html : 社会
	- todo.html : TODOリスト
- js
	- audio_player.js : ミュージックプレイヤースクリプト  
	読み込むとbodyタグ最後にDIVタグをつくり、その中にミュージックプレイヤーのタグが追加されます。

	- math.js : math.htmlのグラフなどの描画スクリプトです

	- math_display.js : math.htmlで右からフィードインする詳細画面を入れるためのスクリプトです。

	- todo.js : サイドメニューにTODOリストを表zさせるためのスクリプトです。  
	user.json内からTODOリストを取得

	 - todo/*.js : todo.html内で使用するjsスクリプトです

	 - japanese.js : japanese.html内で使用するスクリプトです。(仮)

	 - main_script.js : 全体で使用するスクリプトです。

	- match-filter.js : society.htmlで使う予定のスクリプトです。
- その他
	- todo_save.php : TODOリストを保存するためのPHPプログラム
	- user.json : TODOリストなどを保存するファイル
#### 使用しているjs
- math.html グラフ描画 :
	- Chart.js
- todo.html TODOリスト :
	- Muuri.js
	- Web-anmations.js
	- Hammer.js
- 一部
	- Jquery


---
#### **Copyright © 2025 Hiijii**
誰でも使用できますが、使用する際は、[フォーム](https://hiijii428.github.io/blog/form.html)に一言知らせてくれたら幸いです。