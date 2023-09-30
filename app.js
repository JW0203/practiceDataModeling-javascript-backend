const express = require('express');
const app = express();
const port = 3000;

const {User, Profile} = require('./models')
const sequelize = require('./config/database')

sequelize.sync({ force:true });


app.get('/', async(req, res)=>{
    const saveUser = await User.create({
        name: "이름",
        profile:{
            gender: "male",
            photo: "me.jpg"
        }
    },{
        include:[Profile]
    })

    // const saveProfile = await Profile.create({
    //     gender: "male",
    //     photo: "me.jpg",
    //     userId: saveUser.id
    // })

    // 1:1 관계를 찾기
    const foundUser = await User.findOne({
        include:[Profile]
    })
    res.send(foundUser); // 없으면 무한로딩
})

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, async () => {

    console.log(`서버가 실행됩니다. http://localhost:${port}`);
})