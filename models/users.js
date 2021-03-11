const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name: { type: mongoose.Schema.Types.String },
    password: { type: String, default: "" },
    email: {type: String},
    resetPasswordCode: {type: Number, default: ""},
    lock: { type: Boolean, default: false },
    active: { type: Boolean, default: false },
    activationCode: { type: String, default: "" },
    activationTime: { type: Date, default: Date.now() },
    ip: { type: String, default: "" },
    deviceName: { type: String, default: "" },
    linkSms: { type: String },
    phone: { type: String },
    verify: { type: Boolean, default: false },
    role: { type: String, default: "user" }
})

module.exports = mongoose.model('User', UserSchema)