let raceNumber = Math.floor(Math.random() * 1000);

let earlyRunner = true;

let runnerAge = 31;

if (runnerAge > 18 && earlyRunner === true) {
    let raceNumber =+ 1000;
}

if (runnerAge > 18 && earlyRunner === true) {
    console.log(`You will run at 9:30am, and your race number will be ${raceNumber}.`);
} else if (runnerAge > 18 && earlyRunner === false) {
    console.log(`You will run at 11:00am, and your race number will be ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`You will run at 12:30pm, and your race number will be ${raceNumber}.`);
}
