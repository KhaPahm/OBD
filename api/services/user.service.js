const userRepository = require('../repositories/user.repository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const generateToken =  async (payload, secrectSign) => {
    try {
        const access_token = await jwt.sign(payload, secrectSign);
        return access_token;
    }  catch(error) {
        console.log(`Error in generate access token: ${erro}`);
        return null;
    }
}

// async function hashPassword(password) 

async function getAccount (name) {
    try {
        const respone = await userRepository.getAccount(name);
        return respone
    } catch(err) {
        throw new Error('Service: Cannot get account');
    }
}

async function logIn (name, password) {
    try {
        const respone = await userRepository.getAccount(name);
        if(respone.length != 0) {
            const match = await bcrypt.compare(password,respone[0].Password)
            //Return an object with code is 1 and user is respone of query if match name and password
            
            if(match) {
                const user = {
                    name: respone[0].User_name,
                    role: respone[0].Role,
                    address: respone[0].Address
                };
                const signingKey = process.env.JWT_SIGN_KEY;
                const access_token = await generateToken(user, signingKey);
                console.log(access_token);

                return access_token;
            } else {
                return null;
            }
        }
        // Return an object with code 0 and user is N/A if account doesn't have in db or wrong password
        return null;
    } catch(err) {
        throw new Error('Service: Cannot get account');
    }
}

async function registerAccount(name, password, address, role = 1) {
    try {
        const checked = await userRepository.getAccount(name);
        if(checked.length != 0) {
            return false;
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            await userRepository.registerAccount(name, hashedPassword, address, role);
            return true;
        }
    } catch (err) {
        throw new Error('Service: Cannot register account!');
    }
}

module.exports = {
    getAccount, logIn, registerAccount
}