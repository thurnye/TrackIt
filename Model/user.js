
const mongoose = require('mongoose');
const {Schema} = mongoose


const userSchema = new Schema({
    
    firstName: {
    type: Schema.Types.String,
    },
    lastName: {
    type: Schema.Types.String,
    },
    phone: {
      type: Schema.Types.Number,
    },
    email: {
      type: Schema.Types.String,
    },
    password: {
      type: Schema.Types.String,
    },
    employmentStatus: {
    type: Schema.Types.String,
    },
    company: {
    type: Schema.Types.String,
    },
    jobTitle: {
    type: Schema.Types.String,
    },
    netIncome: {
    type: Schema.Types.Number,
    },
    subscriptions:[{
      type: Schema.Types.ObjectId,
      ref: 'Subscriptions', 
    }
  ],
},
   
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);