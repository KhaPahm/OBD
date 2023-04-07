const userRepository = require('../repositories/user.repository');
const path = require('path');
const bcrypt = require('bcrypt')

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
        // console.log(name, password);
        const respone = await userRepository.getAccount(name);
        if(respone.length != 0) {
            const match = await bcrypt.compare(password,respone[0].Password)
            //Return an object with code is 1 and user is respone of query if match name and password
            if(match) return {
                code: 1,
                user: {
                    name: respone[0].Name,
                    role: respone[0].Role,
                    address: respone[0].Address
                }
            };
        }
        // Return an object with code 0 and user is N/A if account doesn't have in db or wrong password
        return {
            code: 0,
            user: null
        }
    } catch(err) {
        throw new Error('Service: Cannot get account');
    }
}

module.exports = {
    getAccount, logIn
}