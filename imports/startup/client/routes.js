import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Records } from './../../api/records/records.js'

import '../../ui/layouts/body/body.js';
import '../../ui/layouts/header/header.js';

import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';

FlowRouter.route('/', {
  name: 'App.home',
  action() {
    // BlazeLayout.render('header');

    BlazeLayout.render('App_body', { main: 'App_home' });

/*     BlazeLayout.render('App_header', { main: 'header' });
 */
  },
  // name: 'App.head',
  // action() {
  //   // BlazeLayout.render('App_body', { main: 'App_home' });
 
  // }
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};


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