
const mongoose = require('mongoose');
const {Schema} = mongoose


const userSchema = new Schema({
    
    FirstName: {
    type: Schema.Types.String,
    },
    LastName: {
    type: Schema.Types.String,
    },
    Phone: {
      type: Schema.Types.Number,
    },
    Email: {
      type: Schema.Types.String,
    },
    Password: {
      type: Schema.Types.String,
    },
    EmploymentStatus: {
    type: Schema.Types.String,
    },
    Company: {
    type: Schema.Types.String,
    },
    JobTitle: {
    type: Schema.Types.String,
    },
    NetIncome: {
    type: Schema.Types.Number,
    },
    Subscriptions:[{
      type: Schema.Types.ObjectId,
      ref: 'Subscription', 
    }
  ],
},
   
{
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);