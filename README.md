# study_app - 目で見る教科書

目で見て**直感的内容を理解できる第二の教科書**となるようなウェブアプリ。  
「グラフなどを実際に動かし、動作の仕方を見ることによって、誰でも簡単に理解することができる」ことを目標に作成

[アプリのプレビュー (https://hiijii428.github.io/study_app) ](https://hiijii428.github.io/study_app)

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


<span style="color:#ff0">Note.</span>
**国語、社会の内容は未定**

---
#### **Copyright © 2025 Hiijii**
