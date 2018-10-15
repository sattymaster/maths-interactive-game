var playing = false;
var score;
var action;
var time;
var z;
var wrong;
document.getElementById("startset").onclick =
    function(){
    if(playing == true)
        {
            location.reload();
			
			
        }
    else{
        score=0;
		wrong=0
        document.getElementById("scorevalue").innerHTML=score;
		document.getElementById("remain").style.display= "block";
		document.getElementById("startset").innerHTML= "resetgame";
		playing= true;
		time=60;
		hide("correct")
		hide("gameover");
		questio();
		startcounter();
		
		 function startcounter(){
			action =setInterval(function(){
				time -= 1;
				document.getElementById("timeremaining").innerHTML=time;
				
				   if(time ==0)
				   {
					   stopcounter();
					   show("gameover");
					   document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>your score is "+score +".</p>";
					   if(wrong>10){
						   document.getElementById("gameover").innerHTML = "<p>Game over!</p><p>your score is "+score +".</p><p>your wrong score</p>"+wrong +"which is poor you should improve.</p>";
					   }
					   hide("remain");
					   playing=false;
					   
					   		document.getElementById("startset").innerHTML= "start game";
					   
					      
				   }
				
			},100);
		 }
		
		function stopcounter(){
			clearInterval(action);
		}
		function show(ID)
		{
			document.getElementById(ID).style.display ="block";
		}
		function hide(ID)
		{
			document.getElementById(ID).style.display = "none";
		}
		
    }

for(i=1; i<5; i++){
    document.getElementById("div"+i).onclick = function(){
    //check if we are playing     
    if(playing == true){//yes
        if(this.innerHTML == z){
        //correct answer
            
            //increase score by 1
            score++;
            document.getElementById("scorevalue").innerHTML = score;
            //hide wrong box and show correct box
            hide("wrong");
            show("correct");
            setTimeout(function(){
                hide("correct");   
            }, 1000);
            
            //Generate new Q&A
            
            questio();
        }else{
        //wrong answer
            hide("correct");
            show("wrong");
            setTimeout(function(){
                hide("wrong");   
            }, 1000);
			questio();
			wrong++;
        }
    }
}   
}
function questio()
		{
			
			var x=Math.round(9*Math.random())+1;
			var y=Math.round(9*Math.random())+1;
			 z=x*y;
			var answers=[z];
			var correctposition=Math.round(3*Math.random())+1;
			document.getElementById("question").innerHTML=x+"X"+y;
			document.getElementById("div"+correctposition).innerHTML=z;
			for(i=1;i<5;i++)
				{
					var wrong;
					if(i != correctposition)
						{   do{
							wrong=(Math.round(9*Math.random())+1)*(Math.round(9*Math.random())+1)
						}while(answers.indexOf(wrong)>-1);
						 document.getElementById("div"+i).innerHTML=wrong;
						 answers.push(wrong);
						 
					            
							
						}
				}
			
			
			
		}
		
}