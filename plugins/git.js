const Fox = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Fox.addCommand({pattern: 'git', fromMe: false, desc: Lang.WP}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://bit.ly/3pFQeWS";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: `◄━⦁🦊 FOX🦊⦁━►
            

*owner number CEHunter* :https://wa.me/905525902609.


*owner fox whatsapp bot grup* :https://chat.whatsapp.com/EBAZblmwkVp3SOpZ75yOeW.


*github* : https://github.com/CEHunter30/FOXI.


◄━⦁🦊 FOX🦊⦁━►
■□ ~CEHUNTER~■□ 

`}) 

}));
