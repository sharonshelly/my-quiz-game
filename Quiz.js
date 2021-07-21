class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz
    background("gre");
    fill("Black");
    textSize(30);
    text("My Result Of The Quiz",300,50);

    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();
    if (allContestants !== undefined){
      var display_answers = 230;
     fill("Blue");
     textSize(15);
     text("*NOTE : CONTESTANT WHO ASWERED IT CORRECT ARE HIGHLIGHTED WITH GREEN COLOR!",130,230);

     for (var plr in allContestants){
       var correctAns = "2";
       if (correctAns === allContestants[plr].answer)
        fill("green")
       else
        fill("red");
        textSize(20);
        display_answers+=30
        text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answers)

     }
    }

    //write condition to check if contestantInfor is not undefined


    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
