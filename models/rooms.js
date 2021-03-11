const mongoose = require("mongoose")
const PlayerModel = require("./players");

const RoomSchema = new mongoose.Schema(
    {
        roomTitle: { type: String, require: true, max: 20, min: 1 },
        server: { type: mongoose.Schema.Types.ObjectId, ref: "Server", require: true },
      },
      {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
      }
);

RoomSchema.virtual("players", {
    ref: PlayerModel,
    localField: '_id',
    foreignField: 'room',
    options: { select: '-__v'}
});

module.exports = mongoose.model('Room', RoomSchema)