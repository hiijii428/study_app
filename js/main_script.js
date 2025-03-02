function canvas_size_set(){
    let cs = document.querySelector("canvas")
    console.log(cs)
    if(cs){
        if(document.body.clientWidth <= 600){
            cs.setAttribute("width", document.documentElement.clientWidth*0.8);
            cs.setAttribute("height", document.documentElement.clientHeight*0.64);
        }else{
            cs.setAttribute("width", 500);
            if(!cs.getAttribute("height")){
                cs.setAttribute("height", 400);
            }
        }
    }
}