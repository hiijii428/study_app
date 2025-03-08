function programs_html(){
    let input = document.querySelector("#html_input").value
    input = input.replace("<script>","<div style='display:none;'>").replace("</script>","</div>");
    document.querySelector("#html_output").innerHTML = input
}
