const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

Meteor.methods({

    encode(num) {
        if (num === 0) return 0;

        let encodedUrl = '';
        while (num > 0) {
            encodedUrl = alphabet[num % 62] + encodedUrl;
            num = Math.floor(num / 62);
        }
        return encodedUrl;
    },

    decode(str) {
        var decoded = 0;
        while (str){
          var index = alphabet.indexOf(str[0]);
          var power = str.length - 1;
          decoded += index * (Math.pow(62, power));
          str = str.substring(1);
        }
        return decoded;
    },

    getLastSequence(){
        Records.insert({seq: 0});
        if (!Records.find().count()) {
            return Records.find().count();
        }
        let lastDoc = Records.find({}, {sort:{'_id': -1}, limit:1})/* .sort({_id:-1}).limit(1) */;
        lastDoc.forEach((element) => {
            console.log(element.seq);
        });
    },
});