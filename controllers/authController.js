const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const handleErrors = (err) => {
    console.log(err.message, err.code);
    let errors = { username: '', password: '' };

    if (err.message === 'incorrect username') {
        errors.username = 'That username is not registered';
    }

    if (err.message === 'incorrect password') {
        errors.password = 'That password is incorrect';
    }


    if (err.code === 11000) {
        errors.username = 'That username is already registered';
        return errors;
    }

    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }

    return errors;
}


const register = async (req, res) => {
    const { username, password } = req.body;


    try {
        const user = await User.create({
            username,
            password
        });
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true });
        res.status(201).json("User created");

    } catch (error) {
        const errors = handleErrors(error);

        res.status(400).json({ errors : errors});
    }
}


const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.login(username, password);
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true });
        res.status(200).json(`Welcome, ${user.username}`);

    } catch (error) {
        const errors = handleErrors(error);

        res.status(400).json({ errors : errors });
    }
}



const createToken = (id) => {
    return jwt.sign({ id }, 'secretData', { expiresIn: '1h' });
}
    



const logout = (req, res) => { 
    res.cookie('jwt', '', { maxAge: 1 });
    res.json(
        'Successfully logged out'
    )
}


                            


module.exports = { register, login, logout }
