function canvas_size_set(){
    let cs = document.querySelector("canvas")
    console.log(cs)
    if(cs){
        if(document.body.clientWidth <= 600){
            cs.setAttribute("width", document.documentElement.clientWidth*0.8);
            cs.setAttribute("height", document.documentElement.clientHeight*0.64);
        }else{
            if(!cs.getAttribute("width")){
                cs.setAttribute("width", 500);
            }
            if(!cs.getAttribute("height")){
                cs.setAttribute("height", 400);
            }
        }
    }
}
document.querySelector(".nav").innerHTML=`
            <input type="checkbox" id="nav_input" class="drawer_hidden">
        <label for="nav_input" class="drawer_open" style="top: 110px;">nav</label>
        <div class="nav_div">
            <h3>メニュー</h3>
            <ul>
                <li><a href="./index.html" class="menu_link">トップ</a></li>
                <li><a href="./japanese.html" class="menu_link">国語科</a></li>
                <li><a href="./math.html" class="menu_link">数学科</a></li>
                <li><a href="./society.html" class="menu_link">社会科</a></li>
                <li><a href="./science.html" class="menu_link">理科</a></li>
                <li><a href="./programs.html" class="menu_link">プログラミング</a></li>
                <li><a href="./todo.html" class="menu_link">TODOリスト</a></li>
            </ul>
        </div>`