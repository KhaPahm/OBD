const dataRepository = require('../repositories/data.repositories');

async function updateSetUp({Vehicle_name, ColunmName, Value}) {
    try {
        const result = await dataRepository.updateSetUp({Vehicle_name, ColunmName, Value});
        return result;
    } catch(err) {
        throw new Error('Service: Cannot update setup');
    }
}

async function getSetUp(Vehicle_name) {
    try {
        const result = await dataRepository.getSetup(Vehicle_name);
        return result;
    } catch(err) {
        throw new Error('Service: Cannot get setup');

    }
}

async function deleteSetUp(column, vehicle_name) {
    try {
        await dataRepository.deleteSetUp(column, vehicle_name);
    } catch(err) {
        throw new Error('Service: Cannot delete setup');
    }
}

async function hidedata(column, vehicle_name) {
    try {
        await dataRepository.hidedata(column, vehicle_name);
    } catch(err) {
        throw new Error('Service: Cannot hide setup');
    }
}

async function getData(vehicle_name, limit) {
    try {
        const setup = await dataRepository.getSetup(vehicle_name);
        if (setup.length <= 0) {
            return null
        }
        let stringQuery = "";
        let colunmName = [];
        for(let i = 0; i < setup.length; i++) {
            if(setup[i].State == 1) {
                stringQuery = stringQuery + "," + setup[i].ColunmName;
                colunmName.push(setup[i].Value)
            }
        }

        stringQuery =  "Time," + stringQuery.slice(1);

        const limitData = Number(limit) * 10;

        const datas = await dataRepository.getData(stringQuery, vehicle_name, limitData);
        const respone = [];

        datas.forEach((value) => {
            const v = Object.values(value);
            object = {};
            for(let i = 0; i < colunmName.length+1; i++) {
                if(i == 0) {
                    object["Time"] = v[i];
                } else {
                    object[colunmName[i-1]] = v[i]; 
                }
            }
            respone.push(object);
        });

        return respone;
    } catch(err) {
        throw new Error('Service: Cannot get data!')
    }
}

module.exports = {
    updateSetUp, deleteSetUp, getData, getSetUp, hidedata
}