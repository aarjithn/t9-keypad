$(document).ready(function(){
    $("#phone").find("button").mouseup(function(event){
        var button_pressed = $(event.currentTarget).data("value");
        $("#result").val(t9($("#result").val(),button_pressed));
    });
    $(".btn-right").click(function() {
    	$("#result").val(($("#result").val().slice(0,-1)));
    });
})
function t9(text,button_pressed){
    this.keypad=[[" ","0"],[".",",","!","1"],["a","b","c","2"],["d","e","f","3"],["g","h","i","4"],["j","k","l","5"],["m","n","o","6"],["p","q","r","s","7"],["t","u","v","8"],["w","x","y","z","9"]];
    var pos;
    if(["*","#"].indexOf(button_pressed) > -1) {
        text += button_pressed;
    }
    else{
        pos = keypad[button_pressed].indexOf(text.charAt(text.length-1));
        if((pos > -1) && (this.wait == true)) {
            clearTimeout(this.timer);
            text=text.slice(0,text.length-1) + keypad[button_pressed][(pos+1)%keypad[button_pressed].length];
            this.timer = setTimeout(function(){this.wait = false;},1000);
            this.wait = true;
        }
        else{
            text += keypad[button_pressed][0];
            this.timer = setTimeout(function(){this.wait = false;},1000);
            this.wait = true;
        }
    }
    return text;
}