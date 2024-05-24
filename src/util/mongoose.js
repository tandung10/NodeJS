
function mutipleMongooseToObject(mongooses) {
    return mongooses.map(mongoose => mongoose.toObject());
}
function mongooseToObject(mongoose) {
    return mongoose ? mongoose.toObject() : mongoose;
}


module.exports = { mutipleMongooseToObject, mongooseToObject };