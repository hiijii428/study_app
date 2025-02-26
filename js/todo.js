let div = document.createElement('div');
document.body.appendChild(div);

//document.getElementById("task_list").innerHTML = `
div.innerHTML = `
            <input id="task_list_drawer_input" class="drawer_hidden" type="checkbox">
            <label for="task_list_drawer_input" class="drawer_open"><span>task</span></label>
            <div class="task_list">
                <div>
                    <h2 style="text-align: center;">やることリスト</h2>
                    <div class="board-column-header">todo</div>
                    <div id="task_board_item">
                    </div>
                    <a href="./todo.html" class="page_button">詳細を見る。編集する。</a>
                    <details><summary>反映されないですか？</summary>
                        <p>タスクリスト変更をした場合は、<br>再読込みをすると反映されます。<br>再読込をしても反映されない場合は、<br>ブラウザのキャッシュを削除してください。</p>
                    </details>
                </div>
            </div>`
fetch('./user.json').then(response => response.json()).then(data => {
    data = data["user"];
    console.log(data["name"],"さん、こんにちは！");
        let label = "todo";
        let list = data["tasklist"][label];
        for(let i=0;i<list.length;i++){
            document.getElementById("task_board_item").innerHTML += '<div class="board-item" style="position: static;">'+list[i]+'</div>'
        }
})
