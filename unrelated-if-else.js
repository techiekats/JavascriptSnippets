function sliceThe(fruit) {
    console.log(`Sliced the ${fruit}`);
};
function mixBoth(fruit1, fruit2) {
  console.log(`Mixed both ${fruit1} and ${fruit2}`);  
};
function registerForMeetup(meetup) {
  console.log(`Registered for ${meetup}`);  
};
function showUpAt(meetup) {
  console.log(`Showed up at ${meetup}`);  
};

/*Review comment 1: Because the function does not have a defined purpose, cannot be given a meaningful name*/
function doThisOrThat (type, arg1, arg2, arg3, arg4) {
    /*Review comment 2: each branch uses only part of the arguments list*/
    /*Review comment 3: The type argument used for branching introduces unnecessary coupling*/
    if (type==='makeSalad') {
        sliceThe(arg1);
        sliceThe(arg2);
        mixBoth(arg1, arg2);
    }
    else {
        registerForMeetup(arg3);
        registerForMeetup(arg4);
        showUpAt(arg3);
        showUpAt(arg4);
    }
};

doThisOrThat('makeSalad', 'kale', 'spinach', 'javascript', '.net');
doThisOrThat('go to meetups', 'apples', 'lettuce', 'javascript', '.net');


