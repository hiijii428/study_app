//************************比例グラフ***********************/
function hirei(){
    let hirei_pieces = Number(document.getElementById("hirei_pieces").value)    //個数
    let hirei_start_number = Number(document.getElementById("hirei_start_number").value)    //初項
    let hirei_step = Number(document.getElementById("hirei_step").value)    //比例定数
    let hirei_minus = document.getElementById("hirei_minus").checked;
    document.getElementById("hirei_print").innerText = "個数:"+hirei_pieces+" 初項:"+hirei_start_number+" 比例定数"+hirei_step
    let data_list=[];
    let label_list=[];
    let for_init;
    let html = "<table border='1'><tr>";
    if(hirei_minus){for_init=-hirei_pieces}else{for_init=1}
    for(let i=for_init;i<hirei_pieces;i++){
        let num = hirei_start_number*hirei_step*i;
        data_list.push(num);
        html += "<td>"+num+"</td>";
        label_list.push("");
    }
    document.getElementById("hirei_table").innerHTML=html+"</tr></table>"
    var ctx = document.getElementById("hireiChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label_list,
            datasets: [{
                label: '比例',
                data: data_list,
                borderColor: "#f00",
                backgroundColor: "#fff0",
                lineTension:0.1,
                pointRadius:0
            }],
        }
    });
}
/***************************反比例グラフ**************************/
function hanhirei(){
    let hannhirei_pieces = Number(document.getElementById("hannhirei_pieces").value)    //個数
    let hannhirei_start_number = Number(document.getElementById("hannhirei_start_number").value)    //初項
    let hannhirei_step = Number(document.getElementById("hannhirei_step").value)    //比例定数
    let hannhirei_minus = document.getElementById("hannhirei_minus").checked;
    document.getElementById("hannhirei_print").innerText = "個数:"+hannhirei_pieces+" 初項:"+hannhirei_start_number+" 比例定数"+hannhirei_step
    let data_list=[];
    let label_list=[];
    let for_init;
    let html = "<table border='1'><tr>";
    if(hannhirei_minus){for_init=-(hannhirei_pieces)}else{for_init=1}
    for(let i=for_init;i<hannhirei_pieces;i++){
        let num = hannhirei_start_number/(hannhirei_step*i);
        data_list.push(num);
        html += "<td>"+num+"</td>";
        label_list.push("");
    }
    document.getElementById("hannhirei_table").innerHTML=html+"</tr></table>"
    var ctx = document.getElementById("hannhireiChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label_list,
            datasets: [{
                label: '反比例',
                data: data_list,
                borderColor: "#f00",
                backgroundColor: "#fff0",
                lineTension:0.1,
                pointRadius:0
            }],
        }
    });
}
//***********************等差数列*************************/
function tousa(){
    let add_num0=Number(document.getElementById("add_number0").value);  //初項
    let add_num1=Number(document.getElementById("add_number1").value);  //公差
    let pieces=Number(document.getElementById("add_number2").value);    //個数
    html="<p>　　要素の個数:"+pieces+"</p><div class='list_table'><table class='tabel_list' border='1'><tr>";
    let data_list = [];
    let label_list = [];
    for(let n=0;n<pieces;n++){
        label_list.push(" ");
        data_list.push(add_num0);
        html+="<td>"+add_num0+"</td>";
        add_num0=add_num0+add_num1;
    }
    html+="</tr></tabel></div>";
    document.getElementById("add").innerHTML=html;
    var ctx = document.getElementById("tousaChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label_list,
            datasets: [{
                label: '等差数列グラフ',
                data: data_list,
                borderColor: "#f00",
                backgroundColor: "#fff0",
                lineTension:0.1,
                pointRadius:0
            }],
        }
    });
}

/*******************等比数列*****************/
function touhi(){
    let put_num0=Number(document.getElementById("put_number0").value);
    let put_num1=Number(document.getElementById("put_number1").value);
    let pieces=Number(document.getElementById("put_number2").value);
    html="<p>　　要素の個数:"+pieces+"</p><div class='list_table'><table class='tabel_list' border='1'><tr>";
    let data_list = [];
    let label_list = [];
    for(let n=0;n<pieces;n++){
        data_list.push(put_num0);
        label_list.push(" ");
        html+="<td>"+put_num0+"</td>";
        put_num0=put_num0*put_num1;
    }
    html+="</tr></tabel></div>";
    document.getElementById("put").innerHTML=html;
    var ctx = document.getElementById("touhiChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label_list,
            datasets: [{
                label: '等比数列グラフ',
                data: data_list,
                borderColor: "#f00",
                backgroundColor: "#fff0",
                lineTension:0.1,
                pointRadius:0
            }],
        }
    });
}

/*****************フィボナッチ数列******************/
function fibonacci(){
    let type = document.getElementById("fibonacci_type").value;
    let pieces = Number(document.getElementById("fibonacci_number").value);
    let html ="<p>　　要素の個数:"+pieces+"</p><div class='list_table'><table border='1'><tr>";
    let data_list = [];
    let label_list = [];
    if(type=="1"){
        let n0 = 0; let n1 = 1;
        for(let n=0;n<pieces/2;n++){
            data_list.push(n0,n1);
            label_list.push(" "," ");
            html+="<td>"+String(n0)+"</td><td>"+String(n1)+"</td>";
            n0=n0+n1;
            n1=n0+n1;
        }
    }else if(type=="2"){
        let n0 = 0; let n1 = 0;let n2 = 1;
        for(let n=0;n<pieces/3;n++){
            data_list.push(n0,n1,n2);
            label_list.push(" "," "," ");
            html+="<td>"+String(n0)+"</td><td>"+String(n1)+"</td><td>"+String(n2)+"</td>";
            n0 = n0+n1+n2;
            n1 = n0+n1+n2;
            n2 = n0+n1+n2;
        }
    }else if(type=="3"){
        let n0 = 0; let n1 = 0;let n2 = 0;let n3 = 1;
        for(let n=0;n<pieces/4;n++){
            data_list.push(n0,n1,n2,n3);
            label_list.push(" "," "," "," ");
            html+="<td>"+String(n0)+"</td><td>"+String(n1)+"</td><td>"+String(n2)+"</td><td>"+String(n3)+"</td>";
            n0 = n0+n1+n2+n3;
            n1 = n0+n1+n2+n3;
            n2 = n0+n1+n2+n3;
            n3 = n0+n1+n2+n3;
        }
    }else if(type=="4"){
        let n0 = 0; let n1 = 0;let n2 = 0;let n3 = 0;let n4 = 1;
        for(let n=0;n<pieces/5;n++){
            data_list.push(n0,n1,n2,n3,n4);
            label_list.push(" "," "," "," "," ");
            html+="<td>"+String(n0)+"</td><td>"+String(n1)+"</td><td>"+String(n2)+"</td><td>"+String(n3)+"</td><td>"+String(n4)+"</td>";
            n0 = n0+n1+n2+n3+n4;
            n1 = n0+n1+n2+n3+n4;
            n2 = n0+n1+n2+n3+n4;
            n3 = n0+n1+n2+n3+n4;
            n4 = n0+n1+n2+n3+n4;
        }
    }else if(type=="5"){
        let n0 = 0; let n1 = 0;let n2 = 0;let n3 = 0;let n4 = 0;let n5 = 1;
        for(let n=0;n<pieces/6;n++){
            data_list.push(n0,n1,n2,n3,n4,n5);
            label_list.push(" "," "," "," "," "," ");
            html+="<td>"+String(n0)+"</td><td>"+String(n1)+"</td><td>"+String(n2)+"</td><td>"+String(n3)+"</td><td>"+String(n4)+"</td><td>"+String(n5)+"</td>";
            n0 = n0+n1+n2+n3+n4+n5;
            n1 = n0+n1+n2+n3+n4+n5;
            n2 = n0+n1+n2+n3+n4+n5;
            n3 = n0+n1+n2+n3+n4+n5;
            n4 = n0+n1+n2+n3+n4+n5;
            n5 = n0+n1+n2+n3+n4+n5;
        }
    }
    html+="</tr></table></div>"
    document.getElementById("fibonacci_list").innerHTML=String(html);
    var ctx = document.getElementById("fibonacciChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label_list,
            datasets: [{
                label: 'フィボナッチ数列グラフ',
                data: data_list,
                borderColor: "#f00",
                backgroundColor: "#fff0",
                lineTension:0.1,
                pointRadius:0
            }],
        }
    });
}

/**************アリコット数列*************/
function aliquot(){
    let aliquot_number = Number(document.getElementById("aliquot_number").value);
    let yakusu_add=0;
    let html ="<div class='list_table'><table border='1'><tr>"
    let data_list = [];
    let label_list = [];
    //aliquot_number=前項の数(約数を求める数)
    for(let n=0;n<200;n++){
        for(let y=1;y<aliquot_number;y++){
            if(aliquot_number%y==0){
                yakusu_add+=(y);
            }
        }
        data_list.push(aliquot_number);
        label_list.push(" ");
        html+="<td>"+String(aliquot_number)+"</td>";
        aliquot_number=yakusu_add;
        yakusu_add=0;
        if(aliquot_number==0){break;}
    }
    document.getElementById("aliquot_list").innerHTML = html + "</tr></table></div>";
    var ctx = document.getElementById("aliquotChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label_list,
            datasets: [{
                label: 'アリコット数列グラフ',
                data: data_list,
                borderColor: "#f00",
                backgroundColor: "#fff0",
                lineTension:0.1,
                pointRadius:0//1.8
            }],
        }
    });
}
function collats(){
    let collats_number = document.getElementById("collats_number").value;
    let html = "<div class='list_table'><table border='1'><tr>";
    let data_list = [];
    let label_list =  [];
    let i = 0;
    while(true){
        data_list.push(collats_number);
        label_list.push(" ");
        i++;
        html+="<td>"+String(collats_number)+"</td>";
        if(collats_number<=1){break;}
        if(collats_number%2 == 0){
            collats_number = collats_number/2;
        }else{
            collats_number = (collats_number*3)+1
        }
    }
    document.getElementById("collats_list").innerHTML = "<p>項数:" + i +"</p>" + html + "</tr></table></div>";
    var ctx = document.getElementById("collatsChart");
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: label_list,
            datasets: [{
                label: 'コラッツの問題グラフ',
                data: data_list,
                borderColor: "#f00",
                backgroundColor: "#fff0",
                lineTension:0.1,
                pointRadius:0//1.8
            }],
        }
    });

}
function pi(){
    let size_number = 200;
    let loop_number = Number(document.getElementById("loop_number").value);
    let number = Number(document.getElementById("pi_number").value);
    let data = document.getElementById("data");
    for(let i=0; i<loop_number; i++){
        if(0 < number){number = -(number);}
        number = number+(size_number/2);
        number = number*2;
    }
    data.innerHTML = number;

    // 変数定義
    let cs = document.getElementById('piCanvas')
    let ctx = cs.getContext('2d')

    ctx.clearRect(0, 0, cs.width, cs.height);
    // 横線を引く
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, cs.height/2);
    ctx.lineTo(cs.width, cs.height/2);
    ctx.closePath();
    ctx.stroke();
    //0線ひく
    ctx.fillStyle = "#666";
    ctx.fillRect(cs.width/2, 0, 1, cs.height);
    //data点
    ctx.fillStyle = "orange";
    ctx.fillRect(cs.width/2+(number), (cs.height/2)-10, 7, 21);
}
function trigonometric(){

}
function trigonometric_circle(){
    let cs = document.getElementById('trigonometric-cricle_Canvas')
    let ctx = cs.getContext('2d')

    let input_number = document.getElementById("trigonometric-circle_number").value;
    number = (input_number-90)*(Math.PI/180); //ラジアンに変換
    let r_size = Math.min(cs.height,cs.width)/2;//半径
    console.log(r_size)
    let sin = Math.sin(number)*r_size
    let cos = Math.cos(number)*r_size
    let data = "角度："+input_number+"°<br>座標："+"( "+cos+" ,  "+sin+" )";
    document.getElementById("data").innerHTML = data;

    ctx.clearRect(0, 0, cs.width, cs.height);
    // 横線を引く
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, cs.height/2);
    ctx.lineTo(cs.width, cs.height/2);
    ctx.closePath();
    ctx.stroke();
    //縦線ひく
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cs.width/2, 0);
    ctx.lineTo(cs.width/2, cs.height);
    ctx.closePath();
    ctx.stroke();
    //三角関数線ひく
    ctx.strokeStyle = "orange";
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(cs.width/2, cs.height/2);
    ctx.lineTo(cs.width/2+cos, cs.height/2+sin);
    ctx.closePath();
    ctx.stroke();
    //線の先の点
    ctx.fillStyle = "blue";
    ctx.fillRect(cs.width/2+cos, cs.height/2+sin, 5, 5);

}
function integral(){
    let integral_number = Number(document.querySelector("#integral_number").value);

    let cs = document.getElementById('integral_Canvas')
    let ctx = cs.getContext('2d')
    ctx.save();
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.translate(cs.width/2, cs.height-10);
    // 横線を引く
    ctx.strokeStyle = '#666';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(-cs.width, 0);
    ctx.lineTo(cs.width, 0);
    ctx.closePath();
    ctx.stroke();
    //縦線ひく
    ctx.beginPath()
    ctx.moveTo(0, -cs.height);
    ctx.lineTo(0, cs.height);
    ctx.closePath();
    ctx.stroke();

    let dot_number = 150 /**放物線の最大幅 */
    for(let x=-dot_number; x<dot_number; x = x+0.6){
        ctx.fillRect(0 - x, 0 - (x**2)*(1/100), 1, 1);
        // ctx.lineTo(0 - x, 0 - x**2);
        // console.log("x:"+x+" y:"+x**2);
    }
    integral_width = dot_number / integral_number /**長方形の横幅 */
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#00f';
    let sum_area = 0;
    for(let n=0;n<integral_number;n++){
        let left_bottom = integral_width * n;
        let left_top = (left_bottom**2)*(1/100);
        let right_bottom = left_bottom + integral_width;
        let right_top = (right_bottom**2)*(1/100)

        let width = integral_width;
        let height = right_top /** or left_top */
        ctx.strokeRect(right_bottom, 0, -width, -height);
        sum_area += (width * height);
        console.log(right_bottom,0,-width,-height);

    }
    document.querySelector("#data").innerHTML = "<span>長方形の個数："+integral_number+"個</span><br><span>長方形の横幅："+integral_width+"</span><br><span>計算した面積："+sum_area+"</span><br>"
    ctx.restore();
}
function ngon(){
    let ngon_number = Number(document.querySelector("#ngon_number").value);
    console.log(ngon_number);

    let cs = document.getElementById('ngon_Canvas')
    let ctx = cs.getContext('2d')
    ctx.save();
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.strokeStyle = '#0f0';
    ctx.lineWidth = 1;
    ctx.beginPath();

    let r = Math.min(cs.height/2, cs.width/2)*0.95
    let deg = ((360/ngon_number)*(1-2)+90)*(Math.PI/180)
    ctx.moveTo( Math.cos(deg)*r+cs.width/2 , Math.sin(deg)*r+cs.height/2 );

    let dec = ngon_number.toString().split('.')[1]
    if(dec){dec=dec.length}else{dec=ngon_number}
    let n = 10**Number(dec);/*分数の分母にする*/
    function gcd (x, y){if(x % y){return gcd(y, x % y)}else{return y}}/*最大公約数を求める */
    let loop_number = ngon_number*n/gcd(n,ngon_number*n)
    console.log(loop_number);
    document.querySelector("#data").innerHTML = "<span>角の数："+loop_number+"</span>"

    for(let m=0;m<loop_number+1;m++){
        let deg = ((360/ngon_number)*(m-2)+90)*(Math.PI/180)
        ctx.lineTo(Math.cos(deg)*r+cs.width/2 , Math.sin(deg)*r+cs.height/2 );
    }

    ctx.closePath();
    ctx.stroke();
    ctx.restore();
}
function suisen(click) {
    if (!click) click = { "1": { "x": 150, "y": 280 }, "2": { "x": 240, "y": 280 } };
//    else if (!click["2"]) click = { "1": { "x": 150, "y": 280 }, "2": { "x": 280, "y": 150 } };
    console.log(click["1"]["x"], click["1"]["y"]);
    console.log(click["2"]["x"], click["2"]["y"]);

    const canvas = document.getElementById('suisen_Canvas');
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 円1
    const c1 = { x: click["1"]["x"], y: click["1"]["y"], r: (click["1"]["x"]-click["2"]["x"])*1.1 };
    // 円2
    const c2 = { x: click["2"]["x"], y: click["2"]["y"], r: (click["1"]["x"]-click["2"]["x"])*1.1 };

    function drawCircle(c) {
        return new Promise(function (resolve, reject) {
            ctx.beginPath();
            ctx.strokeStyle = "#444";

            let i=0;
            ctx.fillStyle = "#f00";
            ctx.arc(c.x, c.y, 7, 0, 2 * Math.PI);
            ctx.fill(); // 軌跡の範囲を塗りつぶす

            const function1 = () => {
                ctx.fillStyle = "#444";
                number = i * (Math.PI / 180); //ラジアンに変換
                let sin = Math.sin(number) * c.r +c.y
                let cos = Math.cos(number) * c.r + c.x
                ctx.fillRect(cos, sin, 1, 1);

                i+=1;
                if (i <= 360) {
                    animation_id = requestAnimationFrame(function1);
                } else {
                    cancelAnimationFrame(animation_id);
                    done = true;
                    resolve();

                    ctx.beginPath();
                    ctx.fillStyle = "#00f";
                    ctx.arc(c.x, c.y, 7, 0, 2 * Math.PI);
                    ctx.fill(); // 軌跡の範囲を塗りつぶす
                    ctx.closePath();

                }
            }
            requestAnimationFrame(function1);
            ctx.closePath();
        });
    }

    function drawIntersectionLine() {
        // 幾何的に交点を求める
        const dx = c2.x - c1.x; //高さの差
        const dy = c2.y - c1.y; //近さ
        const d = Math.hypot(dx, dy);//dx^2+dy^2

        const a = (c1.r**2 - c2.r**2 + d**2) / (2 * d);
        const h = Math.sqrt(c1.r**2 - a**2);// √

        const xm = c1.x + a * dx / d;
        const ym = c1.y + a * dy / d;

        const rx = -dy * (h / d);
        const ry = dx * (h / d);

        const xi1 = xm + rx;
        const yi1 = ym + ry;
        const xi2 = xm - rx;
        const yi2 = ym - ry;

        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.moveTo(xi1, yi1);
        ctx.lineTo(xi2, yi2);
        ctx.stroke();
    }

    drawCircle(c1).then(()=>{
        drawCircle(c2).then(()=>{
            drawIntersectionLine();
        })
    });

    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.moveTo(c1.x, c1.y);
    ctx.lineTo(c2.x, c2.y);
    ctx.stroke();


}