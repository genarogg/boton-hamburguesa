const cont_x = document.getElementById("cont_x")

$(document).ready(main);

function main(){
    $(".cont_x").click(function(){
        $(this).toggleClass('active');
    });    
}
    
