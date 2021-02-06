const express = require('express')
const app = express()
// 
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(jsonParser)
app.use(urlencodedParser)
// 
var cors = require('cors')
app.use(cors())
// 
var dotenv = require('dotenv')
dotenv.config()
// 
const mysql = require('mysql');
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});
db.connect();
// partner page
app.get('/partner', (req, res) => {
    db.query('SELECT * FROM partner', function (error, results, fields) {
        if (error) throw error;
        res.send(JSON.stringify(results))
    })
})
// member page / login
app.post('/memberlogin', (req, res) => {
    let sql = `SELECT * FROM member WHERE account = '${req.body.account}'`
    db.query(sql, function (error, results) {
        console.log(results.length)
        if (error) throw error;
        console.log('post login success')
        if (results.length > 0) {
            if (results[0].password === req.body.password) {
                res.send('登入成功')
            } else {
                res.send('密碼錯誤')
            }
        } else {
            res.send('無此帳號')
        }
    })
})
// member page / google login
// const { OAuth2Client } = require('google-auth-library')
// const client = new OAuth2Client(process.env.LOGIN_CLIENT_ID)
// app.post("/membergooglelogin", async (req, res) => {
//     const { token }  = req.body
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: process.env.LOGIN_CLIENT_ID
//     });
//     const { name, email, picture } = ticket.getPayload();    
//     const user = await db.user.upsert({ 
//         where: { email: email },
//         update: { name, picture },
//         create: { name, email, picture }
//     })
//     res.status(201)
//     res.json(user)
// })
// member page / sign up
app.post('/membersignup', (req, res) => {
    let sql1 = `SELECT * FROM member WHERE account = '${req.body.account}'`
    let sql2 = `INSERT INTO member (account, password, email) VALUES ('${req.body.account}', '${req.body.password}', '${req.body.email}')`
    db.query(sql1, function (error, results) {
        if (error) throw error;
        console.log('post signup success')
        if (results.length > 0) {
            res.send('已有相同帳號')
        } else {
            db.query(sql2, function (error, results) {
                res.send('註冊成功')
            })
        }
    })
})
// member page / forgot
app.post('/memberforgot', (req, res) => {
    let sql1 = `SELECT * FROM member WHERE email = '${req.body.email}'`
    let sql2 = `UPDATE member SET password ='00000000' WHERE email='${req.body.email}'`
    db.query(sql1, function (error, results) {
        let memberAccount = results[0].account
        let memberEmail = results[0].email
        if (error) throw error;
        console.log('post forgot success')
        if (results.length === 0) {
            res.send('無此信箱')
        } else {
            db.query(sql2, function (error, results) {
                const emailService = require('./lib/email')()
                emailService.send(
                    memberAccount + '<' + memberEmail + '>', //收信人
                    'OverDrive! Music Platform ', // 標題
                    '<h3>Hi' + memberAccount + ',</h3><p>Here is your new password: </p><h3>00000000<h3/><p>Best,</p><p>OverDrive! Music Platform</p>' // 內文
                )
                res.send('修改密碼')
            })
        }
    })
})
//  contact page 
app.post('/contact', (req, res) => {
    let sql = `INSERT INTO contact (name, email, message) VALUES ('${req.body.name}', '${req.body.email}', '${req.body.message}')`
    db.query(sql, function (error, results) {
        if (error) throw error;
    })
    // 
    const emailService = require('./lib/email')()
    emailService.send(
        req.body.name + '<' + req.body.email + '>', //收信人
        'OverDrive! Music Platform ', // 標題
        '<h3>Hi' + req.body.name + ' ,</h3><p>thanks for contacting us, we will reply to you as soon as possible.</p><br/><p>Best,</p><p>OverDrive! Music Platform</p>' // 內文
    )
})
// 
const port = 3001;
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
});
