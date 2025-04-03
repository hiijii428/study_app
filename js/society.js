function kawase(){
    let yen = document.querySelector("#yen").value
    yen = 160
    dollar = 1
    let yen_to_dollar = (100000/yen)*dollar    //1dollar ?yen
    document.querySelector("#data").innerHTML="<p>1ドル = 100円だと、10万円は<mark>1000ドル</mark></p><p><mark>"+dollar+"ドル = "+yen+"円</mark>だと、10万円は<mark>"+yen_to_dollar+"ドル</mark></p>"
}