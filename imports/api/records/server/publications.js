import { Meteor } from 'meteor/meteor';
import { Records } from '../records.js';

Meteor.publish('records', () => {
    return Records.find();
  })
  
  Meteor.publish('lastTen', () => {
    return Records.find({}, {sort:{created: -1}, limit:10});
  })