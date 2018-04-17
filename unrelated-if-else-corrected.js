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
function makeSalad (fruit1, fruit2) {
  sliceThe(fruit1);
  sliceThe(fruit2);
  mixBoth(fruit1, fruit2);  
};
function attendMeetups (meetup1, meetup2)
{
  registerForMeetup(meetup1);
  registerForMeetup(meetup2);
  showUpAt(meetup1);
  showUpAt(meetup2);   
};
makeSalad('apples', 'lettuce');
attendMeetups('javascript', '.net');