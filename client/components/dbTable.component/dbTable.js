import { Template } from 'meteor/templating';
import { Records } from '../../../imports/api/records.js'

import './dbTable.template.html';

Template.form.onCreated(() => {
  Meteor.subscribe('records');
});
  
Template.dbTable.helpers({
    topTen: () => {
      return Records.find({}, {sort:{created: -1}, limit:10});
    },
    checkIfEmpty: () => {
      let record;
      Records.find({}, {limit: 1}).forEach((element) => {
        record = element; 
      });
      return record;  
    }
  });