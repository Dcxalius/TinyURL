// import { Meteor } from 'meteor/meteor';
// import { Records } from '/imports/api/records.js';

// Meteor.startup(() => {
//   // code to run on server at startup
// });

// Meteor.publish('records', () => {
//   return Records.find();
// })

// Meteor.publish('lastTen', () => {
//   return Records.find({}, {sort:{created: -1}, limit:10});
// })

import '/imports/startup/server';
import '/imports/startup/both';
