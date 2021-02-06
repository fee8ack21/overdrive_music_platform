const nodemailer = require('nodemailer');
// 
module.exports = function () {
    var mailTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: "OAuth2",
            user: process.env.EMAIL_USER,
            clientId: process.env.EMAIL_CLIENT_ID,
            clientSecret: process.env.EMAIL_CLIENT_SECRET,
            accessToken: process.env.EMAIL_ACCESS_TOKEN,
            refreshToken: process.env.EMAIL_REFRESH_TOKEN,
            expires: 1484314697598
        }
    });
    //   
    var from = '"OverDrive! Music Platform" <fee8ack21@gmail.com>';
    var errorRecipient = 'fee8ack21@gmail.com';
    return {
        send: function (to, subj, body) {
            mailTransport.sendMail(
                {
                    from: from,
                    to: to,
                    subject: subj,
                    html: body
                },
                function (err) {
                    if (err) {
                        console.log('Unable to send email: ' + err);
                    }
                },
            );
        },
        emailError: function (message, filename, exception) {
            var body =
                '<h1>OverDrive! Music Platform Error</h1>' + 'message:<br><pre>' + message + '</pre><br>';
            if (exception) body += 'exception:<br><pre>' + exception + '</pre><br>';
            if (filename) body += 'filename:<br><pre>' + filename + '</pre><br>';
            mailTransport.sendMail(
                {
                    from: from,
                    to: errorRecipient,
                    subject: 'OverDrive! Music Platform Error',
                    html: body,
                    generateTextFromHtml: true,
                },
                function (err) {
                    if (err) {
                        console.log('Unable to send email: ' + err);
                    }
                },
            );
        },
    };
};