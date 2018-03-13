import { Records } from './records.js';

const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

Meteor.methods({
    encode(longUrl) {
        let newSeq = 0;
        
        if (Records.find().count() > 0) {
            let lastDoc = Records.find({}, { sort: { 'created': -1}, limit: 1 });
            lastDoc.forEach((element) => {
                newSeq = element.seq + 1;
            });
        }
        
        let randomNumber = Math.floor((Math.random() * (10000000000 - 1000000000)) + 1000000000);
        let encodeNumber = newSeq +randomNumber;

        let encodedUrl = '';
        while (encodeNumber > 0) {
            encodedUrl = alphabet[encodeNumber % 62] + encodedUrl;
            encodeNumber = Math.floor(encodeNumber / 62);
        }
        return { longUrl, encodedUrl, newSeq };  
    },

    removeRecord(){
        Records.remove({})
    },

    recordsInsert(userId, document) {
        return Records.insert({
            'userId': userId,
            'longUrl': document.longUrl,
            'seq': document.newSeq,
            'shortUrl': document.encodedUrl,
            'clicked': 0,
            'created': new Date(),
        }); 
    },

    recordsUpdate(userId) {
        return Records.update({_id: userId}, { $set: {userId: userId}});
    }
});
