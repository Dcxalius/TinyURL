import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Records } from './../../../imports/api/records.js'

import './../../index.html';


FlowRouter.route('/:shortUrl', {
    name: 'shortUrl',
    action(params) {
      const qwe = Meteor.subscribe('records');
      Tracker.autorun((computation) => {
        if (qwe.ready()) {
          const record = Records.findOne({shortUrl: params.shortUrl});
          const recordId = record._id; 
          const longUrl = record.longUrl;
          let clicked = record.clicked;
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