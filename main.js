/* Loops and Arrays - part 2:

Challenge: Let's say that you are working at a new night club, as part of your new job
you are in charge of letting people in based on their age. 
Your customers need to be at least 21 years of age to let in the nightclub. 
Please send a personalized message to your possible clients to let them know 
if they can get in or not.
 */

const nightClubRegister = [
  {
    name: "Ahmed",
    lastname: "Abdool",
    age: 25,
    gender: "male",
  },
  {
    name: "Sally",
    lastname: "Morgan",
    age: 18,
    gender: "female",
  },
  {
    name: "Dionne",
    lastname: "Brown",
    age: 29,
    gender: "female",
  },
  {
    name: "Max",
    lastname: "Forrester",
    age: 20,
    gender: "male",
  },
];

for (let i = 0; i < nightClubRegister.length; i++) {
  if (nightClubRegister[i].age >= 21) {
    console.log(
      `Welcome ${nightClubRegister[i].name} to our new Night Club. I hope you enjoy your night with us :-) `
    );
  } else {
    console.log(
      `Unfortunately, ${nightClubRegister[i].name} will be able to join us after your 21st birthday :-( `
    );
  }
}
