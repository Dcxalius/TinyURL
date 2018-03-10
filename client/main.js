import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';



Template.form.onCreated(()=> {
  console.log("form created");
  Meteor.call('getLastSequence');
})

Template.form.helpers({
  input() {
    return Template.instance().input;
  }
});

Template.form.events({
 /*  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }, */


});

FlowRouter.route('/:shortURL', {
  name: 'shortURL',
  action(params) {
    console.log(params);

  }
})
