const mongoose = require("mongoose")

const CharacterSchema = new mongoose.Schema(
    {
        name: { type: String },
        coin: { type: Number },
        paidCoin: { type: Number },
        windFriction: { type: Number },
        minimumAngle: { type: Number },
        damage: { type: Number },
        damagePerBullet: { type: Number },
        numberOfBullets: { type: Number },
      }
);

module.exports = mongoose.model('Character', CharacterSchema)