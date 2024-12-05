module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return Array.isArray(mongooses)
            ? mongooses.map(mongoose => (mongoose?.toObject ? mongoose.toObject() : mongoose))
            : [];
    },
    mongooseToObject: function (mongoose) {
        return mongoose?.toObject ? mongoose.toObject() : mongoose;
    }
};
