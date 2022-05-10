
   
const mongoose = require('mongoose');
const {Schema} = mongoose;


const subscriptionSchema = new Schema({
    companyName: {
        type: String,
        require: true
    },
    amount: {
        type: String,
        require: true
    },
    category:{
        type: String,
        required: true
    },
    renewalDate: {
        type: Date,
        required: true
    },
    renewalPeriod: {
        type: String,
        required: true
    },
    startingDate: {
        type: Date,
        required: true
    },
    active: {
        type: Boolean
    },
    logo: {
        type: String
    },
    customizedName: {
        type: String
    },
    Subscriber: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
},
{
    timestamps: true
  }
)

module.exports = mongoose.model('Subscriptions', subscriptionSchema);
