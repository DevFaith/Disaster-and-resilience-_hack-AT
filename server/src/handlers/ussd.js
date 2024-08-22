// ussd.js

const africastalking = require('africastalking')({
    apiKey: 'atsk_3140b6a8b52cfc7c06e3e8b5fa5ec700a2996080a1de2fe939de9bfc75835d2f68b4d46b',
    username: 'faithwaithera'
});

const ussd = africastalking.USSD;

const handleUSSD = ({ sessionId, serviceCode, phoneNumber, text }) => {

    let response = '';

    switch (text) {
        case '':
            response = `CON Welcome to Community Resilience Building
1. Educational Resources
2. Community Events
3. Join WhatsApp Group`;
            break;
        case '1':
            response = `CON Educational Resources:
1. Health
2. Agriculture`;
            break;
        case '2':
            response = `CON Community Events:
1. Upcoming Workshops
2. Local Meetups`;
            break;
        case '1*1':
            response = `END Health Resources:
- Benefits of a balanced diet
- Preventative healthcare tips`;
            break;
        case '1*2':
            response = `END Agriculture Resources:
- Sustainable farming techniques
- Pest control methods`;
            break;
        case '2*1':
            response = `END Upcoming Workshops:
- Date: 12th August
- Venue: Community Hall`;
            break;
        case '2*2':
            response = `END Local Meetups:
- Date: 20th August
- Venue: City Park`;
            break;
        case '3':
            response = `END Join our WhatsApp Group:
https://chat.whatsapp.com/EXReSdJnvVaCtocMNGNNXb`;
            break;
        default:
            response = `END Invalid option. Please try again.`;
    }

    return response;
};

module.exports = handleUSSD;
