import {Template} from 'meteor/templating';
import {Records} from '../../../imports/api/records.js'

import './form.template.html';
const lastTen = Meteor.subscribe('records');

Template.form.onCreated(() => {
    console.log("ASD");
  });
Template.form.events({
    'submit' (event) {
      event.preventDefault();
      const target = event.target;
      const url = target.urlInput.value;
      Meteor.call('encode', url);
    }
  });