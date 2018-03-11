import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';
import { Records } from '/imports/api/records.js'
Template.form.onCreated(()=> { 

})
Template.list.onCreated(()=> { 
  
})
Template.list.onRendered(()=> { 
  
})
Template.list.helpers({
  topTen: () => {
    const lastTen = Meteor.subscribe('records');
  
        return lastTenRecords = Records.find({}, {sort:{created: -1}, limit:10})
        // console.log(lastTenRecords);
        // lastTenRecords.forEach(function(element) {
        //   console.log(element);
        // });

}
});

Template.form.events({
  'submit'(event) {
    event.preventDefault();
    const target = event.target;
    const url = target.urlInput.value;

    Meteor.call('encode', url);
  },
});

FlowRouter.route('/:shortUrl', {
  name: 'shortUrl',
  action(params) {
    const qwe = Meteor.subscribe('records');
    Tracker.autorun(() => {
      if(qwe.ready()) {
        const longUrl = Records.findOne({shortUrl: params.shortUrl}).longUrl;
        window.location = longUrl;

      } else {
        console.log('Loading...');
        // FlowRouter.redirect();
      }
    });
  }
});