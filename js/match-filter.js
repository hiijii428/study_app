let tag_name = {
    "犬":"dog",
    "猫":"cat",
    "柴犬":"siba",
    "白毛":"white",
    "雑種":"zasshu"
}
$(document).ready(function(){
    // let tag =
    for (tag of $('.tag')){
        tag_list = tag.innerText.split(/[\s　]/);
        html = "";
        for(t of tag_list){
            html += "<span>"+t+"</span>";
            tag.parentElement.classList.add(t)
        }
        tag.innerHTML = html;
    }
    $('.tag_button').click(function() {
        let my_id = $(this).attr("id");
        open(my_id);
    });
});

function open(myid){
    $('#item .content').css('display','none');//すべて消す
    $('#'+myid).toggleClass('actv');    //選択したボタンの色を変える

    let show_class = '';
    $('#btns .actv').each(function() {
        show_class += '.' + $(this).attr("id");//選択したボタンのIDをshow_classに代入
    });

    console.log(show_class);

    if(show_class){
        $('#item '+show_class).css('display','inline-block');//要素の表示
        let size = $('#item '+show_class).length;
        $('#res').html('条件に合うアイテムは '+size+' 件です。');
    }


    //全解除の時に全表示
    if(0 == $("#btns .actv").length){
        $('#item .content').show();
        let size = $('#item .content').length;
        $('#res').html('条件に合うアイテムは '+size+' 件です。');
    }
}
