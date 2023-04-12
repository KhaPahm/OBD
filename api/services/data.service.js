const dataRepository = require('../repositories/data.repositories');

async function updateSetUp(column, value, vehicle_name) {
    try {
        const id = await dataRepository.updateSetUp(column, value, vehicle_name);
        return id;
    } catch(err) {
        throw new Error('Service: Cannot update setup');
    }
}

async function deleteSetUp(column, vehicle_name) {
    try {
        await dataRepository.deleteSetUp(column, vehicle_name);
    } catch(err) {
        throw new Error('Service: Cannot delete setup');
    }
}

async function getData(vehicle_name, limit) {
    try {
        const setup = await dataRepository.getSetup(vehicle_name);
        let setup_data = setup[0];
        let newData = {}
        Object.entries(setup_data)
            .filter(([, value]) => value !== null)
            .forEach(([key, value]) => (newData[key] = value));
        delete newData.Vehicle_Name;
        delete newData.SetUp_ID;

        const conlumnData = Object.keys(newData);
        const keys = Object.values(newData);
        const conlumnDataQuery = "Time," + conlumnData.toString();

        const limitData = Number(limit) * 10;

        const datas = await dataRepository.getData(conlumnDataQuery, vehicle_name, limitData);
        const respone = [];
        console.log(datas);

        datas.forEach((value) => {
            const v = Object.values(value);
            object = {};
            for(let i = 0; i < keys.length+1; i++) {
                if(i == 0) {
                    object["Time"] = v[i];
                } else {
                    object[keys[i]] = v[i]; 
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
    updateSetUp, deleteSetUp, getData
}