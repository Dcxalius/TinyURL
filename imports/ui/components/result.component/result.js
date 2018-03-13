import { Template } from 'meteor/templating';
import { Records } from '../../../api/records/records.js'

import './result.template.html';
Template.result.showResult = new ReactiveVar(false);

Template.result.helpers({
  showResult: () => {
    return Template.result.showResult.get();
  },
});