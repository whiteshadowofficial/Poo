/* Copyright (C) 2021 ws virus Fucker.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
VIRUS - FUCKER
*/

const Stefanie = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const ANIME = "\n\n  *👩‍🦰Stefanie bot Anime List*\n\n╔═════════▷\n╠🌼: .loli\n╠🌼: .wifu\n╠🌼: .neko\n╠🌼: .ava\n╠🌼: .kemo\n╠🌼: .awoo\n╠🌼: .shinobu\n╠🌼: .megumin\n╚═════════▷"
const fs = require('fs');
const Ln = "Anime List"
const axios = require('axios');
let Language = require('../language');
let Lang = Language.getString('stefanie');
const Config = require('../config');
let tk = Config.WORKTYPE == 'public' ? false : true


    Stefanie.addCommand({ pattern: 'loli ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://docs-jojo.herokuapp.com/api/randomloli`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Stefanie.addCommand({ pattern: 'ava ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/anime/sfw/avatar?apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Stefanie.addCommand({ pattern: 'kemo ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {
      
        var ttinullimage = await axios.get(`https://${Config.ZRUN}.xyz/api/anime/sfw/kemonomimi?apikey=${Config.ZTH}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Stefanie.addCommand({ pattern: 'wifu ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/waifu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));


    Stefanie.addCommand({ pattern: 'awoo ?(.*)', fromMe: tk,dontAddCommandList: true}, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/awoo?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));   
    
    
    Stefanie.addCommand({ pattern: 'shinobu ?(.*)', fromMe: tk, dontAddCommandList: true}, (async (message, match) => {
        
        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/shinobu?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Stefanie.addCommand({ pattern: 'megumin ?(.*)', fromMe: tk, dontAddCommandList: true}, (async (message, match) => {
        

        var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/megumin?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));

    Stefanie.addCommand({ pattern: 'alist ?(.*)', fromMe: tk, dontAddCommandList: false, desc: Lang.ANIMELIST,}, (async (message, match) => {await message.client.sendMessage(message.jid,ANIME, MessageType.text);

    }));

    Stefanie.addCommand({ pattern: 'neko ?(.*)', fromMe: true, dontaddCommandList: true}, (async (message, match) => {

       var ttinullimage = await axios.get(`https://bx-${Config.ON}.herokuapp.com/api/sfw/neko?apikey=${Config.CCN}`, { responseType: 'arraybuffer' })

        await message.sendMessage(Buffer.from(ttinullimage.data), MessageType.image, { mimetype: Mimetype.jpg, caption: Config.BOT_NAME})
    
    }));
