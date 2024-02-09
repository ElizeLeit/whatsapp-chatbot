// npm run start:prod
import qrcode from 'qrcode-terminal'
import { Client, LocalAuth } from 'whatsapp-web.js'

const client = new Client({
    authStrategy: new LocalAuth() // usar apenas em localhost
})

client.on('qr', qr => {
    qrcode.generate(qr, { small: true })
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', msg => {
    const content = msg.body.toLocaleLowerCase()
    if (content === 'teste') {
        client.sendMessage(msg.from, "Oláaaaa, teste chatbot")
    }
    if (content == 'ping') {
        msg.reply('pong');
    }
});

client.initialize();