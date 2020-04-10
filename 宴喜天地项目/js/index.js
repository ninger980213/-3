
$(".circle").click(function(){
 
    $(".ulList").toggle();
    for (var i = 0; i <$(".ulList li").length; i++) {//lg = 6
        console.log( (".ulList li").length);
           (function(i){//自执行函数，获取i
               setTimeout(function() {
                   console.log($(".ulList li:eq(i)"))
                   console.log(i)
                $(".ulList li").eq(i).show();
               }, i*200)//将 i 的值传进来 ，这样就可以每个一秒输出一个值
           })(i)
           
       }
      

    
})
$(function(){

$(".ulList li").hide();

clearTimeout();



})
