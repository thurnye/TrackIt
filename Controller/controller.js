const User = require('../Model/user')
const Subscription = require('../Model/subscription')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 6 

//Signup User
const postSignup = async (req, res, next) => {
    try {
        //CREATE USER
        const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
        const newUser = new User ({
            FirstName: req.body.firstName,
            LastName: req.body.lastName,
            Phone: req.body.phone,
            Email: req.body.email,
            Password: hashedPassword,
            EmploymentStatus: req.body.employmentStatus,
            Company: req.body.company,
            JobTitle: req.body.jobTitle,
            NetIncome: req.body.netIncome
        })
        console.log("newUser:", newUser)
        const user = await newUser.save()
        const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
        
        // send a response to the front end
        res.status(200).json(token)
        
        
    } catch (error) {
        res.status(400).json('Bad Credentials');
    }
        
}


//Login user
const getLoginUser = (req, res, next) => {
    const id = req.params.id;
    User.findById(id)
    .then(data => {
        res.send({data})
    })
    .catch(err => res.status(400).json(err))
}



// Updated User
const PostUpdatedUser = async (req, res, next) => {
    const id = req.body.id;
    User.findById(id)
    .then(user => {
        user.FirstName = req.body.firstName;
        user.LastName = req.body.lastName;
        user.Phone = req.body.phone;
        user.Email = req.body.email;
        user.Password = req.body.password;
        user.EmploymentStatus = req.body.employmentStatus;
        user.Company = req.body.company;
        user.JobTitle = req.body.jobTitle;
        user.NetIncome = req.body.netIncome;
        return user.save()
    })
    .then((user) => {
        // send a response to the front end
        res.status(200).json(user)
    })
    .catch(err => res.status(400).json(err));
}

//DELETING A USER
const postDelete = async (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    await User.findByIdAndDelete(id)
    .then(result => {
        console.log(result)
          res.status(200).json(result)
      })
    .catch(err => res.status(400).json(err))
}

module.exports = {
    postSignup,
    getLoginUser,
    PostUpdatedUser, 
    postDelete
}