var randSeries=[]
var i=0
$(document).keypress(start)
        
       
function start(){
     let random = Math.floor(Math.random()*4)
     $('h1').text('Level '+(i+1))
     switch(random){
         case 0:
                $('.green').addClass('pressed');
                setTimeout(function(){
                   $('.green').removeClass('pressed');
                },100)
                new Audio('sounds/green.mp3').play();
                randSeries.push('green')
                break;
         case 1:
                $('.red').addClass('pressed');
                setTimeout(function(){
                 $('.red').removeClass('pressed');
                },100)
                new Audio('sounds/red.mp3').play();
                randSeries.push('red')
                break;
         case 2: 
                $('.yellow').addClass('pressed');
                setTimeout(function(){
                  $('.yellow').removeClass('pressed');
                },100)
                new Audio('sounds/yellow.mp3').play();
                randSeries.push('yellow')
                break;
         case 3:
                 $('.blue').addClass('pressed');
                 setTimeout(function(){
                   $('.blue').removeClass('pressed');
                },100)
                new Audio('sounds/blue.mp3').play();
                randSeries.push('blue')
                break;
     }
     
     i=0
}


$('.btn').click(function(){
       $(this).addClass('pressed')
       setTimeout(()=>{
           $(this).removeClass('pressed');
       },100)

       if(randSeries[i]===$(this).attr('id')){
            new Audio('sounds/'+randSeries[i]+'.mp3').play();
       }
       else{
            new Audio('sounds/wrong.mp3').play();
            $(document.body).addClass('game-over');
            setTimeout(function(){
              $(document.body).removeClass('game-over');
            },100)
            $('h1').text('Game Over, Press Any Key to Restart');
            exit();
       }
      
       if(i<randSeries.length)
          i++
       if(i==randSeries.length){
          setTimeout(function(){
              start();
          },1000)
       }
})

