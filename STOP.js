var totalPoints = 0;
var allGoals = [new Goal("15 minute nature walk",20, "Going on a 15 minute(or longer) walk in nature.", false), new Goal("Nature Selfie", 10, "Take a selfie in nature.", false), +
    new Goal("Plant a seed",25,"Plant a seed of any type in nature.",false), + new Goal("City Cleanup", 30, "Spend a day and clean a neighborhood, beach, or any open space in nature.", false)];

var completedGoals = [];
var prize = "";
function Goal( goalName, numPoints, goalDescrip) {
    this.goalName = goalName;
    this.numPoints = numPoints;
    this.goalDescip = goalDescrip;
    this.completed = false;
}
function points(goalName, numPoints){
    for(var i = 0; i < allGoals.length; i++ ){
        if(allGoals[i].completed == true){
            totalPoints += allGoals[i].numPoints;
            completedGoals.push(allGoals[i]);
        }
    prizes();
    }
}
function prizes(){
    prize = "Congratulations! You have achieved 50 points and now receive your first prize from STOP! Please accept a limited edition radio talk-set as a token of our gratitude for your work. ";
    if(totalPoints >= 50 && totalPoints <= 100){
        document.getElementById("firstPrize").innerHTML = prize;
    }
}

function listGoals(){
    if(document.getElementById("listGoals").value === "goal1"){
        document.getElementById("output").innerHTML = allGoals[0].goalDescip + " Points accredited: " + allGoals[0].numPoints;
    }
    if(document.getElementById("listGoals").value === "goal2"){
        document.getElementById("output").innerHTML = allGoals[1].goalDescip + " Points accredited: " + allGoals[1].numPoints;
    }
    if(document.getElementById("listGoals").value === "goal3"){
        document.getElementById("output").innerHTML = allGoals[2].goalDescip + " Points accredited: " + allGoals[2].numPoints;
    }
    if(document.getElementById("listGoals").value === "goal4"){
        document.getElementById("output").innerHTML = allGoals[3].goalDescip + " Points accredited: " + allGoals[3].numPoints;
    }
    if(document.getElementById("listGoals").value === "goal5"){
        document.getElementById("output").innerHTML = allGoals[4].goalDescip + " Points accredited: " + allGoals[4].numPoints;
    }


}
