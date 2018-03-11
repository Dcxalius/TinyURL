import { Meteor } from 'meteor/meteor';
import { Records } from '/imports/api/records.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('records', function() {
  return Records.find();
})