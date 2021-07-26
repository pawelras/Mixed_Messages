const activities = ['Go bungee jumping' , 'Try paragliding', 'Go swimming at night', 'Try horse riding', 'Experience hot-air balooning', 'Have a moonlight dinner', 'Paint a landscape'];
const places = ['in Australia', 'on Machu Picchu', 'in Paris', 'in at least 3 different countries', 'in Worchestershire or in Chichester', 'at home'];
const methods = ['with your dog', 'wearing a tutu dress', 'stark naked', 'with your eyes closed', 'while singing to Lady Gaga', 'on your own'];


const genBucketList = () => {
let activity = activities[Math.floor(Math.random() * activities.length)];
let place = places[Math.floor(Math.random() * places.length)];
let method = methods[Math.floor(Math.random() * methods.length) ];
console.log('This is your random bucket list: ');
console.log(`${activity} ${place} ${method}.`)
}

genBucketList();