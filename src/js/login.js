
function  loadJpg(){
                var j =Math.floor(Math.random()*8999)+1000;
             
                document.getElementById(vcode).value=j;
            };

$(function(){
        // (function(){
        //            var j =Math.floor(Math.random()*8999)+1000;
        //                 $(".codejpg").css({background:"pink",cursor:"pointer"});
        //                 $(".codejpg #vcode").text(`${j}`);
        //         })();

        var i = Math.floor(Math.random()*3)+1;
        $(".leftBottom").append(`<img src="../images/${i}.jpg">`);
        $(".userlogin").click(function(){
                $(".userlogin").css({"borderBottom" : "3px solid red",color : "#f32613",});
                $(".userlogin span").css({
                                        color:"#f32613"});
                $(".phoneuser").css({"border-bottom": "1px solid #e6e6e6"});
                $(".phoneuser span").css({
                                         cursor: "pointer",
                                        "font-size": "16px",
                                        "line-height": "60px",
                                        "padding-left": "60px",
                                        color: "#999999"});
                $(".userlogin span").mouseenter(function(){$(".userlogin span").css({color : "#f32613"})});
                $(".userlogin").mouseenter(function(){$(".userlogin").css({cursor:"pointer"})});
                $(".userlogin span").mouseleave(function(){$(".userlogin span").css({color : "#f32613"})});
                $(".phoneuser span").mouseenter(function(){$(".phoneuser span").css({color : "black"})});
                $(".phoneuser span").mouseleave(function(){$(".phoneuser span").css({color : "#999999"})});
                $(".smalla").css({display:"none"});
                $(".smallb").css({display:"block"});

$("#phoneuser").animate({"transform" : "rotateY(-90deg)","display":"none"},300,
            function(){$("#pcuser").animate({"transform" : "rotateY(90deg)","display":"block"},200);
                    });
                $(".mainer").css({height:"592px"});
                    $(".right").css({height:"510px"});
        });

        $(".phoneuser").click(function(){
                        $(".phoneuser").css({"borderBottom" : "3px solid red",color : "#f32613",});
                        $(".phoneuser span").css({
                                                color:"#f32613"});
                        $(".userlogin").css({"border-bottom": "1px solid #e6e6e6"});
                        $(".userlogin span").css({
                                                cursor: "pointer",
                                                "font-size": "16px",
                                                "line-height": "60px",
                                                "padding-left": "60px",
                                                color: "#999999"});
                        $(".userlogin span").mouseenter(function(){$(".userlogin span").css({color : "black"})});
                        $(".userlogin span").mouseleave(function(){$(".userlogin span").css({color : "#999999"})});
                        $(".phoneuser span").mouseenter(function(){$(".phoneuser span").css({color : "#f32613"})});
                        $(".phoneuser").mouseenter(function(){$(".phoneuser").css({cursor:"pointer"})});
                        $(".phoneuser span").mouseleave(function(){$(".phoneuser span").css({color : "#f32613"})});
                        $(".smallb").css({display:"none"});
                        $(".smalla").css({display:"block"});

                    $("#pcuser").animate({"transform" : "rotateY(-90deg)","display":"none"},300,
                        function(){
                                    $("#phoneuser").animate({"transform" : "rotateY(90deg)","display":"block"},200);
                                }
                            );
                    $(".mainer").css({height:"620px"});
                    $(".right").css({height:"538px"});


                });
        $(".usernames").focus(function(){
                $(".username").css({"border" : "1px solid green"});
                $(".password").css({"border" : "1px solid #e6e6e6"});
                $(".usernames").attr({"placeholder":""});

        });
        $(".usernames").blur(function(){
                $(".usernames").attr({placeholder:"可以使用已注册的用户名或手机号登录"});
                $(".username").css({"border" : "1px solid #e6e6e6"});
        })
        $(".password input").focus(function(){
                $(".password").css({"border" : "1px solid green"});
                $(".passwords").attr({"placeholder":""});
                $(".username").css({"border" : "1px solid #e6e6e6"});

        });
        $(".password input").blur(function(){
                $(".passwords").attr({placeholder : "输入6位手机动态码"});
                $(".password").css({"border" : "1px solid #e6e6e6"});
        });
        $(".verificationCode input").focus(function(){
                $(".verificationCode").css({"border" : "1px solid green"});
                $(".verificationCode input").attr({placeholder : ""});
        });
        $(".verificationCode input").blur(function(){
                $(".verificationCode").css({"border" : "1px solid #e6e6e6"});
                $(".verificationCode input").attr({placeholder : "输入验证码"});
        });
        $(".codejpg").mouseenter(function(){
                $(".codejpgb").css({display:"block"})
        });
        $(".codejpg").mouseleave(function(){
                $(".codejpgb").css({display:"none"})
        });
        $(".codejpg").click(function(){
                var j =Math.floor(Math.random()*8999)+1000;
                $(".codejpg").css({background:"pink",cursor:"pointer"});
                $(".codejpg #vcode").text(`${j}`);
                $(".codejpg #vcode").css({color:"blue"});
                
        });

        $(".checkBox").change(function(){
            if($(".checkBox").prop("checked")){
                $(".non").css({"display":"block"});
            }else{
                $(".non").css({"display":"none"});
            };
        });

        // $(".phoneuser").click(function(){
        //     $("#pcuser").css({
        //          "transform" : "rotateY(130deg)",
        //          "-webkit-transform":"rotateX(120deg)",
        //         "display":"none"
        //         // "width":"0px"
        //     });
        // });

        //     $("#phoneuser").animate({
        //         "display":"block",
        //         "width":"360px" 
        //     },1000);
        //     $("#span").css({width:"360px",height:"30px",display:"block"})
        //     // $("#phoneuser").show();
        //     // $("#pcuser").hide();
            
        // });
        //  $(".userlogin").click(function(){
        //     $("#pcuser").animate({"display":"block","width":"360px"},1000);
        //         $("#phoneuser").animate({"display":"none","width":"0px"},1000);
        //     //  $("#phoneuser").hide();
        //     // $("#pcuser").show();
            
        // });
        $(".phoneuser").click(function(){
            $("#phoneuser").animate({display:"block"},1000);
            $("#pcuser").animate({display:"none"},1000);
        });
        $(".userlogin").click(function(){
            $("#phoneuser").animate({display:"none"},1000);
            $("#pcuser").animate({display:"block"},1000);
        });
        // $(window).load( function(){
        //            var j =Math.floor(Math.random()*8999)+1000;
        //                 $(".codejpg").css({background:"pink",cursor:"pointer"});
        //                 $(".codejpg #vcode").text(`${j}`); 
        //         });
        
});

