function movement(x = null ,y = null){/*上投げと自由落下*/
    let cs = document.querySelector("#movement_Canvas");
    if(x===null) x=cs.width/2;
    if(y===null) y=cs.height/2;
    cs.addEventListener("mousedown", (e)=> {
        const rect = e.target.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;// clientY
        movement(x,y)
    });
    console.log(x, y);

    let ctx = cs.getContext('2d');
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.lineWidth = 3;
    ctx.fillStyle = '#aaa';
    ctx.fillRect(0, 0, cs.width, cs.height);

    let data = document.querySelector("#data")
    let x_v0 = Number(document.querySelector("#movement_x_v0").value);
    let y_v0 = -Number(document.querySelector("#movement_y_v0").value);

    let lastTime = 0;
    let a = 9.8  //加速度
    let vy_table = "<table><tr><th>縦(Y)方向の速度：</th>";
    let vx_table = "<tr><th>横(X)方向の速度：</th>";

    const move = (time)=>{
        if (!lastTime) lastTime = time;
        const dt = (time - lastTime) / 1000; // 経過時間 [s]

        //y座標計算　縦向きに動くため、加速度(重力加速度)あり、摩擦抵抗無しとする
        vy = y_v0 + dt*a ; //初速度と、加速度を用いた速度計算
        y += y_v0*dt + (1/2)*a*dt**2//時間経過数による位置計算(一定速度： y+=速度*dt)

        //x座標計算　横向きに動くため、加速度なし、摩擦抵抗無しとする
        vx = x_v0*dt
        x += vx

        ctx.clearRect(0, 0, cs.width, cs.height);
        ctx.fillStyle = '#aaa';
        ctx.fillRect(0, 0, cs.width, cs.height);

        ctx.fillStyle = '#000';
        ctx.fillRect(x, y, 10, 10);
        // console.log(x, y)
        if (y < cs.height-10 || dt===0) {
            requestAnimationFrame(move);
        }else{
            vy=0;vx=0;
        }
        data.innerHTML = "<span>距離(X):"+Math.trunc(x)+"</span><br><span>縦(Y)の速度"+Math.trunc(vy)+"</span><br><span>横(X)の速度"+Math.trunc(vx)+"</span>"
        vy_table += "<td>"+-vy.toFixed(1)+"</td>"
        vx_table += "<td>"+vx.toFixed(1)+"</td>"
        data.innerHTML += "<div class='list_table'>"+vy_table+"</tr>"+(vx_table + "</tr></table>")+"</div>"
    }
    requestAnimationFrame(move);

}
function movement1(x = null ,y = null){/*角度と落下距離*/
    let cs = document.querySelector("#movement_Canvas");
    if(x===null) x=0;
    if(y===null) y=cs.height-10;
    cs.addEventListener("mousedown", (e)=> {
        const rect = e.target.getBoundingClientRect();
        x = e.clientX - rect.left;
        y = e.clientY - rect.top;// clientY
        movement1(x,y)
    });
    console.log(x, y);


    let ctx = cs.getContext('2d');
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.lineWidth = 3;
    ctx.fillStyle = '#aaa';
    ctx.fillRect(0, 0, cs.width, cs.height);

    let data = document.querySelector("#data")
    let v0 = Number(document.querySelector("#movement1_v0").value);
    let deg = Number(document.querySelector("#movement1_angle").value);
    let y_v0 = -Math.sin(deg * Math.PI / 180)*v0;
    let x_v0 = Math.cos(deg * Math.PI / 180)*v0;

    let lastTime = 0;
    let a = 9.8  //加速度
    let vy_table = "<table><tr><th>縦(Y)方向の速度：</th>";
    let vx_table = "<tr><th>横(X)方向の速度：</th>";


    const move = (time)=>{
        if (!lastTime) lastTime = time;
        const dt = (time - lastTime) / 1000; // 経過時間 [s]

        //y座標計算　縦向きに動くため、加速度(重力加速度)あり、摩擦抵抗無しとする
        vy = y_v0 + dt*a ; //初速度と、加速度を用いた速度計算
        y += y_v0*dt + (1/2)*a*dt**2//時間経過数による位置計算(一定速度： y+=速度*dt)

        //x座標計算　横向きに動くため、加速度なし、摩擦抵抗無しとする
        vx = x_v0*dt
        x += vx

        ctx.clearRect(0, 0, cs.width, cs.height);
        ctx.fillStyle = '#aaa';
        ctx.fillRect(0, 0, cs.width, cs.height);

        ctx.fillStyle = '#000';

        ctx.fillRect(x, y, 10, 10);
        // console.log(x, y)

        if (y < cs.height-10 || dt===0) {
            requestAnimationFrame(move);
        }else{vy=0;vx=0;}
        data.innerHTML = "<span>距離(X):"+Math.trunc(x)+"</span><br><span>縦(Y)の速度"+Math.trunc(vy)+"</span><br><span>横(X)の速度"+Math.trunc(vx)+"</span>"
        vy_table += "<td>"+-vy.toFixed(1)+"</td>"
        vx_table += "<td>"+vx.toFixed(1)+"</td>"
        data.innerHTML += "<div class='list_table'>"+vy_table+"</tr>"+(vx_table + "</tr></table>")+"</div>"

    }
    requestAnimationFrame(move);

}

function quantum_observation(){/*観測*/
    let elem_label_list = {".black90_click":0.9,".black70_click":0.7,".white70_click":0.3,".white90_click":0.1}
    for(let elem_label in elem_label_list){
        let elem_list = document.querySelectorAll(elem_label+">div")
        for(elem of elem_list){
            console.log("観測！");
            if(Math.random() < elem_label_list[elem_label]){
                elem.style = "background-color:black";
            }else{
                elem.style = "background-color:white";
            }
        }
    }
}
function quantum_observation_false(){/*観測から戻る*/
    for(e of document.querySelectorAll('.bored>div>div>div')){e.style = null;}
}
function quantum_click(elm){/*クリック*/
    /* black90 -> white90 -> black70 -> white70 -> black90 */
    switch(document.querySelector("#order").className){
        case "black90":
            elm.classList.add("black90_click");
            document.querySelector("#order").className = "white90"
            break
        case "white90":
            elm.classList.add("white90_click");
            document.querySelector("#order").className = "black70"
            break
        case "black70":
            elm.classList.add("black70_click");
            document.querySelector("#order").className = "white70"
            break
        case "white70":
            elm.classList.add("white70_click");
            document.querySelector("#order").className = "black90"
            break
    }
}
