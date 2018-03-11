import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './main.html';
import { Records } from '/imports/api/records.js'

Template.form.onCreated(()=> { 
})

Template.form.helpers({
});

Template.form.events({
  'submit'(event) {
    event.preventDefault();
    const target = event.target;
    const url = target.urlInput.value;

    Meteor.call('encode', url);
  },
});


