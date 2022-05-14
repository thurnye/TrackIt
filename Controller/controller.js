const User = require('../Model/user')
const Subscription = require('../Model/subscription')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 6 

//Signup User
const postSignup = async (req, res, next) => {
    try {
        console.log(req.body.password)
        //CREATE USER
        const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS)
        const newUser = new User ({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            password: hashedPassword,
            employmentStatus: req.body.employmentStatus,
            company: req.body.company,
            jobTitle: req.body.jobTitle,
            netIncome: req.body.netIncome
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
const getLoginUser = async (req, res, next) => {
    try {
        const email = req.body.email
        console.log(req.body)
        const user = await User.findOne({ email: email }).populate('subscriptions').lean().exec();
        console.log(user)
        if (!(await bcrypt.compare(req.body.password, user.password))) throw new Error()
        const token = jwt.sign({ user }, process.env.SECRET,{ expiresIn: '24h' });
        res.json(token)
        
    } catch {
        res.status(400).json("email or password is incorrect!.");
    }
}



// Updated User
const PostUpdatedUser = async (req, res, next) => {
    const id = req.body.id;
    User.findById(id)
    .then(user => {
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.phone = req.body.phone;
        user.email = req.body.email;
        user.Password = req.body.password;
        user.employmentStatus = req.body.employmentStatus;
        user.company = req.body.company;
        user.jobTitle = req.body.jobTitle;
        user.netIncome = req.body.netIncome;
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