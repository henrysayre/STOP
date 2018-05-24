var id = 0;
var totalPoints = 0;
var allGoals = [new Goal("15 minute nature walk",20, "Going on a 15 minute(or longer) walk in nature", false), new Goal("Nature Selfie", 10, "Take a selfie in nature, false"), new Goal("") ];
var completedGoals = [];
var prize = "";
function Goal( goalName, numPoints, goalDescrip) {
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
            completedGoals.push(allGoals[i]);
        }
    }
}
function prizes(numPoints){
    prize = "Congratulations! You have achieved 50 points and now receive your first prize from STOP! Please accept a limited edition radio talk-set as a token of our gratitude for your work. "
    if(totalPoints == 50){
        document.getElementById("firstPrize").innerHTML = prize;
    }
}

function listGoals(){
    if(document.getElementById("listGoals").value === "goal1"){
        document.getElementById("output").innerHTML = allGoals[0].goalDescip + allGoals[0].numPoints;
    }
    if(document.getElementById("listGoals").value === "goal2"){
        document.getElementById("output").innerHTML = allGoals[1].goalDescip + "points accredited: " + allGoals[1].numPoints;
    }
    if(document.getElementById("listGoals").value === "goal3"){
        document.getElementById("output").innerHTML = allGoals[2].goalDescip + "points accredited: " + allGoals[2].numPoints;
    }
    if(document.getElementById("listGoals").value === "goal4"){
        document.getElementById("output").innerHTML = allGoals[3].goalDescip + allGoals[3].numPoints;
    }
    if(document.getElementById("listGoals").value === "goal5"){
        document.getElementById("output").innerHTML = allGoals[4].goalDescip + allGoals[4].numPoints;
    }


}
