$(document).ready(function(){
    $("#u_i").val("");
    $("#u_i").focus();
    if(this.location.hash == "#overplayer"){
        body.innerHTML = '<div id="wd"><h1 id="wt" style="text-align:center;">Player won!</h1><br><div id="btnd"><a href="#"><button id="retbtn"> New Game </button></a></div></div>';
    } else if(this.location.hash == "#overbot"){
        body.innerHTML = '<div id="wd"><h1 id="wt" style="text-align:center;">Bot won!</h1><br><div id="btnd"><a href="#"><button id="retbtn"> New Game </button></a></div></div>';
    } else {
        if(this.location.hash != "#" && location.hash != ""){
            this.location.hash = "#";
            this.location.reload();
        }
    }
    ov = 0;
    num = 0;
    $("#u_i").on('input', function(){
        if($("#u_i").val() != ""){
            u_i_n = parseInt($("#u_i").val());
            if(u_i_n == 0){
                u_i_n = 10;
            }
            num += u_i_n;
            $("#u_i").val("");
            $("#ta").append("Player> " + u_i_n);
            $("#ta").append("\n");
            $("#ta").append("New Number: " + num);
            $("#ta").append("\n");
            if (num >= 100) {
                document.location.hash = "#overplayer";
            } else {
                if(100-num <= 10){
                    $("#ta").append("Bot   > " + 100-num);
                    $("#ta").append("\n");
                    $("#ta").append("New Number: " + 100);
                    $("#ta").append("\n");
                    document.location.hash = "#overbot";
                } else {
                    /*x = Math.floor((Math.random() * 10) + 1);
                    num += x;
                    $("#ta").append("Bot   > " + x);
                    $("#ta").append("\n");
                    $("#ta").append("New Number: " + num);
                    $("#ta").append("\n");*/
                    if(num < 60){
                        if(u_i_n == 1){
                            ov += 1;
                            x = 10;
                            num += x;
                            $("#ta").append("Bot   > " + x);
                            $("#ta").append("\n");
                            $("#ta").append("New Number: " + num);
                            $("#ta").append("\n");
                        } else {
                            x = 12 - u_i_n + ov;
                            ov = 0;
                            if(x > 10){
                                ov = x - 10;
                                x = 10
                            }
                            num += x;
                            $("#ta").append("Bot   > " + x);
                            $("#ta").append("\n");
                            $("#ta").append("New Number: " + num);
                            $("#ta").append("\n");
                        }
                    } else if(num >= 60 && num < 67){
                        x = 67 - num;
                        num += x;
                        $("#ta").append("Bot   > " + x);
                        $("#ta").append("\n");
                        $("#ta").append("New Number: " + num);
                        $("#ta").append("\n");
                    } else if(num >= 68 && num < 78){
                        x = 78 - num;
                        num += x;
                        $("#ta").append("Bot   > " + x);
                        $("#ta").append("\n");
                        $("#ta").append("New Number: " + num);
                        $("#ta").append("\n");
                    } else if(num >= 79 && num < 89){
                        x = 89 - num;
                        num += x;
                        $("#ta").append("Bot   > " + x);
                        $("#ta").append("\n");
                        $("#ta").append("New Number: " + num);
                        $("#ta").append("\n");
                    }
                }
            }
        }
    });
});
$(window).on('hashchange', function(e){
    if(this.location.hash == "#overplayer"){
        body.innerHTML = '<div id="wd"><h1 id="wt" style="text-align:center;">Player won!</h1><br><div id="btnd"><a href="#"><button id="retbtn"> New Game </button></a></div></div>';
    } else if(this.location.hash == "#overbot"){
        body.innerHTML = '<div id="wd"><h1 id="wt" style="text-align:center;">Bot won!</h1><br><div id="btnd"><a href="#"><button id="retbtn"> New Game </button></a></div></div>';
    } else {
        this.location.hash = "#";
        this.location.reload();
    }
});