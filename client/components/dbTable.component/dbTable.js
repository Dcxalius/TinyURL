import { Template } from 'meteor/templating';
import { Records } from '../../../imports/api/records.js'

import './dbTable.template.html';
const lastTen = Meteor.subscribe('records');

Template.form.onCreated(() => {
    console.log("asdasf");
  });
Template.dbTable.helpers({
    topTen: () => {
      return Records.find({}, {sort:{created: -1}, limit:10});
    },
    checkIfEmpty: () => {
        console.log("empty checker");
      let record;
      Records.find({}, {limit: 1}).forEach((element) => {
        record = element; 
      });
      return record;  
    }
  });