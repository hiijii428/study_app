function movement(){
    let cs = document.querySelector("#movement_Canvas");
    let ctx = cs.getContext('2d');
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.lineWidth = 3;
    ctx.fillStyle = '#aaa';
    ctx.fillRect(0, 0, cs.width, cs.height);

    let data = document.querySelector("#data")
    let x_v0 = Number(document.querySelector("#movement_x_v0").value);
    let y_v0 = -Number(document.querySelector("#movement_y_v0").value);
    let coordinates = document.querySelector("#movement_coordinates").value;
    console.log(coordinates)
    let x = cs.width/2, y = cs.height/2;
    switch (coordinates){
        case "left_top":
            x=0;
            y=0;
            console.log(x, y)
            break;
        case "left_bottom":
            x=0;
            y=cs.height-20;
            break;
        case "right_top":
            x=cs.width-10;
            y=0;
            break;
        case "right_bottom":
            x=cs.width-10;
            y=cs.height-20;
            break;
        case "center":
            x=cs.width/2
            y=cs.height/2
            break;
        default:
            console.log("matchng no")
    }
    console.log(x, y)

    let lastTime = 0;
    let a = 9.8  //加速度

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
        if (y < cs.height-10) {
            requestAnimationFrame(move);
        }else{
            vy=0;vx=0;
        }
        data.innerHTML = "<span>距離(X):"+Math.trunc(x)+"</span><br><span>縦(Y)の速度"+Math.trunc(vy)+"</span><br><span>横(X)の速度"+Math.trunc(vx)+"</span>"
    }
    requestAnimationFrame(move);

}
function movement1(){
    let cs = document.querySelector("#movement_Canvas");
    let ctx = cs.getContext('2d');
    ctx.clearRect(0, 0, cs.width, cs.height);
    ctx.lineWidth = 3;
    ctx.fillStyle = '#aaa';
    ctx.fillRect(0, 0, cs.width, cs.height);

    let data = document.querySelector("#data")
    let v0 = Number(document.querySelector("#movement1_v0").value);
    let x=0, y=cs.height-10;
    let deg = Number(document.querySelector("#movement1_angle").value);
    let y_v0 = -Math.sin(deg * Math.PI / 180)*v0;
    let x_v0 = Math.cos(deg * Math.PI / 180)*v0;
    console.log(x,y);
    console.log(x_v0, y_v0)
    let lastTime = 0;
    let a = 9.8  //加速度

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
    }
    requestAnimationFrame(move);

}