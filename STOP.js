var id = 0;
var totalPoints = 0;
var allGoals = [new goal("15 minute nature walk",20, "Going on a 15 minute(or longer) walk in nature", false), new goal()];
var prize = "";


function goal( goalName, numPoints, goalDescrip) {
    this.id = id++;
    this.goalName = goalName;
    this.numPoints = numPoints;
    this.goalDescip = goalDescrip;
    this.completed = false;
}

function points(goalName, numPoints){
    for(var i = 0; i < allGoals.length; i++ ){
        if(allGoals[i] == true){
            totalPoints += allGoals[i].numPoints;
        }
    }
}

function completeGoal(goalId) {
    for(var i = 0; i < allGoals.length; i++){

    }

    //iterate through aLL GOALS AND MARK THE ONE COMPLETE THAT THEY COMPLKTER
}

function prizes(numPoints){
    if(totalPoints == 100){
        //set html element to return prize
    }
}