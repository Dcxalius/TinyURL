import { Template } from 'meteor/templating';
import { Records } from '../../../imports/api/records.js'

import './form.template.html';

Template.form.onCreated(() => {
    Meteor.subscribe('records');

    Template.instance().encode = ((url) => {
        return new Promise ((resolve, reject) => {
            Meteor.call('encode', url, (error, results) => {
                if (error) reject(error);
                if (results) resolve(results);
            });
        });
    });

    Template.instance().insertDocument = ((userId, doc) => {
        return new Promise((resolve, reject) => {
            if (doc) {
                Meteor.call('recordsInsert', userId, doc, (error, documentId) => {
                    if (error) reject(error);
                    if (documentId) resolve(documentId);
                });
            }
        });
    });
});

Template.form.helpers({
    
});

Template.form.events({
    'submit' (event, template) {
        event.preventDefault();

        const url = event.target.urlInput.value;
        const userId = localStorage.getItem('userId');
        
        template.encode(url)
            .then((doc) => {
                template.insertDocument(userId, doc)
                    .then((documentId) => {
                        if (!userId) {
                            Meteor.call('recordsUpdate', documentId);
                            localStorage.setItem('userId', documentId);
                        }
                    });
            });
    }
});
