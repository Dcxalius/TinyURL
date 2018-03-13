import { Template } from 'meteor/templating';
import { Records } from '../../../api/records/records.js'

import './dbTable.template.html';

Template.dbTable.userId = new ReactiveVar();

Template.dbTable.onCreated(function() {
  Meteor.subscribe('records');
});
  
Template.dbTable.onRendered(function() {
  Template.dbTable.userId.set(localStorage.getItem('userId'));
});

Template.dbTable.helpers({
    topTen: () => {
      return Records.find({'userId': Template.dbTable.userId.get()}, {sort:{created: -1}, limit:10});
    },
    checkIfEmpty: () => {
      let record;
      Records.find({}, {limit: 1}).forEach((element) => {
        record = element; 
      });
      return record;  
    },
    host:() =>{
      return window.location.host;
    },
    getUserId: () => {
      return Template.dbTable.userId.get(); 
    },

    updateUserId: () => {
      Template.dbTable.userId.set(localStorage.getItem('userId'));
    }
  });
  
  Template.dbTable.events({
    'click': function(){
    console.log("You clicked something");
    // Records.remove(this._id);
    console.log(Template.dbTable);
    Meteor.call('removeRecord');
  }
});
