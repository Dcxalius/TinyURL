import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';
import { Records } from '/imports/api/records.js'
// Template.form.onCreated(()=> { 

// })
// Template.list.onCreated(()=> { 
  
  
// })
// Template.list.onRendered(()=> { 
  
// })
// Template.list.helpers({
//   topTen: () => {
//     const lastTen = Meteor.subscribe('records');
//         return lastTenRecords = Records.find({}, {sort:{created: -1}, limit:10})
// }
// });

const lastTen = Meteor.subscribe('records');

Template.form.events({
  'submit'(event) {
    event.preventDefault();
    const target = event.target;
    const url = target.urlInput.value;
    Meteor.call('encode', url);
  },
});

Template.dbTable.helpers({
    topTen: () => {
      return Records.find({}, {sort:{created: -1}, limit:10});
    },

    checkIfEmpty: () => {
      let record;
      Records.find({}, {limit: 1}).forEach(function(element) {
        record = element; 
      });
      console.log(record);
      return record;  
    }
  });

FlowRouter.route('/:shortUrl', {
  name: 'shortUrl',
  action(params) {
    const qwe = Meteor.subscribe('records');
    Tracker.autorun((computation) => {
      if(qwe.ready()) {
        const record = Records.findOne({shortUrl: params.shortUrl});
        const recordId = record._id; 
        const longUrl = record.longUrl;
        let clicked = record.clicked;
        console.log(clicked);
        Records.update({ _id: recordId }, { $set: { clicked: clicked + 1 }})
        window.location = longUrl;
        computation.stop();
      } else {
        console.log('Loading...');
        // FlowRouter.redirect();
      }
    });
  }
});