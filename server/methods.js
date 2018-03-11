import { Records } from '/imports/api/records.js';

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
        const key = 1000000000; 
        let encodeNumber = newSeq + key;

        let encodedUrl = '';
        while (encodeNumber > 0) {
            encodedUrl = alphabet[encodeNumber % 62] + encodedUrl;
            encodeNumber = Math.floor(encodeNumber / 62);
        }

        Records.insert({
            'longUrl': longUrl,
            'seq': newSeq,
            'shortUrl': encodedUrl,
            'created': new Date(),
        });
    },

    decode(str) {
        var decoded = 0;
        while (str) {
            var index = alphabet.indexOf(str[0]);
            var power = str.length - 1;
            decoded += index * (Math.pow(62, power));
            str = str.substring(1);
        }
        console.log(decoded);
        return decoded;
    },
    // cutURL(url) {
    //     pathName = url.split('/').slice(-1).join('/');
    //       console.log(pathName);
    //       let newSeq =methods.getLastSequence()+1;
 
        
    //     console.log('the last seq is '+newSeq);
    //     let test;
    //     test= newSeq + 1;
    //     console.log(test);
    //     Meteor.call('encode', test);

    // },
    getLastTen(){
        let lastDoc = Records.find({}, { sort: { 'created': -1}, limit: 10 });
        let shortUrl;
        let longUrl;
        lastDoc.forEach((element) => {
            shortUrl=element.shortUrl;
            longUrl=element.longUrl;           
            console.log(shortUrl + "   " + longUrl);          
        });            
    }

});