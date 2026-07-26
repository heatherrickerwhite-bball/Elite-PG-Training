const today = new Date().toDateString();

const lastWorkout = Storage.load("lastWorkout");

let streak = Storage.load("streak") || 0;

function completeWorkout(){

if(lastWorkout !== today){

streak++;

Storage.save("streak",streak);

Storage.save("lastWorkout",today);

}

}
