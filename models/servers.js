const mongoose = require("mongoose")
const RoomModel = require("./rooms");

const ServerSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        image: { type: String, required: true, min: 1 },
        endpoint: { type: String, required: true, unique: true, min: 1, max: 20 },
        isPrivate: { type: Boolean, require: true },
        type: { type: String, require: true },
      },
      {
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
      }
);

ServerSchema.virtual("rooms", {
    ref: RoomModel,
    localField: "_id",
    foreignField: "server",
    options: { select: "___v" },
  });
  
  ServerSchema.pre(/^find/, function (next) {
    this.populate({
      path: "rooms",
    });
    next();
  });
  
  ServerSchema.statics.getServersArr = async function (){
    const serversList = await this.find(
      {},
      "_id title image endpoint isPrivate type"
    )
      .lean()
      .exec();
    return serversList;
  };
  
  ServerSchema.statics.getEndpoints = async function (){
    const serversList = await this.find().lean().exec();
    return (serversList).map((server) => server.endpoint);
  };

module.exports = mongoose.model('Server', ServerSchema)