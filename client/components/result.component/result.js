import { Template } from 'meteor/templating';
import { Records } from '../../../imports/api/records.js'

import './result.template.html';

Template.result.helpers({
    result: () => {
      return true;
      
    },
  });