let display_in = document.createElement('div');
display_in.setAttribute('class', 'display_in');
document.body.appendChild(display_in);
/***************************************math*****************************************/
function display_return(){
    display_in.style = "left:100%";
}
function display_in_bunsetu(){
    display_in.innerHTML = `
    <button class="return_button" onclick='display_return()'>戻る</button>
    <h2>文節</h2>
    <span class="content">犬が</span>
    <span class="content">走る</span>
    `;
    display_in.style = "left:0;"
//    hirei();
}