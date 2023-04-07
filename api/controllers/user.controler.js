const userService = require('../services/user.service');

async function logIn(req, res, next) {
    try {
        const name = req.body.name;
        const password = req.body.password;

        const respone = await userService.logIn(name, password);
        if(respone.code == 1) {
            console.log(respone.user);
            req.session.user = JSON.stringify(respone.user);
            res.status(200).json({
                code: 200,
                message: "Login success!"
            })
        } else {
            res.status(401).json({
                code: 401,
                message: "Wrong password or name!"
            })
        }
        
    } catch(err) {
        console.log("An erro when login!" , err.message);
        next(err);
    }
}

async function registerAccount(req, res, next) {
    try {
        const name =  req.body.name;
        const password = req.body.password;
        const address = req.body.address;
        const respone = await userService.registerAccount(name, password,address);
        if(respone) {
            res.status(200).json({
                code: 200,
                msg: "Account was created!"
            })
        } else {
            res.status(409).json({
                code: 409,
                msg: "Account already exists!"
            })
        }
    } catch(err) {
        console.log("An erro when register", err.message);
        next(err);
    }
}

module.exports = {
    logIn, registerAccount
}