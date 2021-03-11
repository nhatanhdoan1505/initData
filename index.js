const mongoose = require("mongoose");
const UserModel = require("./models/users");
const CharacterModel = require("./models/characters");
const PlayerModel = require("./models/players");
const RoomModel = require("./models/rooms");
const ServerModel = require("./models/servers");

let random_Boolean = [false, false, true, true, false, false, true, true, true, false]

mongoose.connect("mongodb://3.112.51.86:27017/themightgame", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log("Mongodb connected error : " + err)
    } else {
        console.log("Mongodb connected sucessfully")
    }
})


for(i = 0; i < 10; i++) {
    let user = new UserModel({
        name: `doannhatanh${i}`,
        password: `@Anh123456${i}`,
        email: `doannhatanh${i}@gmail.com`,
        linkSms: `linkSms${i}`,
        phone:`0123456789${i}`,
    })
    let character = new CharacterModel({
        name: `Gunner${i}`,
        coin: 500+i,
        paidCoin: 200+i,
        windFriction: 5+i,
        minimumAngle: 2+i,
        damage: 500+i,
        damagePerBullet: 100+i,
        numberOfBullets: 50+i
    });
    let server = new ServerModel({
        title:`Papa${i}`,
        image: `image${i}`,
        endpoint:`endpoint${i}`,
        isPrivate: random_Boolean[i],
        type:`server${i}`
    });

    user.save(err => {
        if(err){
            console.log(err);
        }
        console.log("save user sucessfully");
    });
    character.save(err => {
        if(err){
            console.log(err);
        }
        console.log("save character sucessfully");
    });
    server.save(err => {
        if(err) {
            console.log(err);
        }
        console.log("save server sucessfully");
    });
}

const saveRoom = async () => {
    let serverArr = await ServerModel.find({});
    for(i=0; i < 10; i++) {
        let room = new RoomModel({
            roomTitle: `PapaGroup${i}`,
            server: serverArr[i],
        })

        room.save(err => {
            if(err) {
                console.log(err);
            }
            console.log("save room successfully");
        })
    }
}

const savePlayer = async () => {
    let charArr =  await CharacterModel.find({});
    let roomArr = await RoomModel.find({});
    let userArr = await UserModel.find({});

    for (i = 0; i < 10; i++) {
        let player = new PlayerModel({
            lock: random_Boolean[i],
            lastOnline: Date.now(),
            x2XPTime: Date.now(),
            online: random_Boolean[i],
            appId: `1321356${i}`,
            coin: 1312312+i,
            lockedCoin: 1321354+i,
            paidCoin: 100+i,
            usedCharacter: random_Boolean[i],
            clan: 12313+i,
            ordinalNumber: 45645+i,
            fame: 13132+i,
            top: 10+i,
            xpMax: 213132+i,
            charXpMax: 1132+i,
            friends: `friends${i}`,
            item: `item${i}`,
            equipment:`equipment${i}`,
            itemChest:`itemChest${i}`,
            ruby:`ruby${i}`,
            mission:`mission${i}`,
            missionLevel:`missionLevel${i}`,
            char1: charArr[0],
            char2: charArr[1],
            char3: charArr[2],
            char4: charArr[3],
            char5: charArr[4],
            char6: charArr[5],
            char7: charArr[6],
            char8: charArr[7],
            char9: charArr[8],
            char10: charArr[9],
            giftDay: random_Boolean[i],
            giftCode:random_Boolean[i],
            limitedEvent: random_Boolean[i],
            mapPlus: random_Boolean[i],
            rollCall: 132132+i,
            roomId: roomArr[i],
            userId: userArr[i]
        });
        player.save(err => {
            if(err) {
                console.log(err);
            }
            console.log("save player sucessfully")
        })
    }
}


saveRoom();
savePlayer();