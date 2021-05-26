const fs = require("fs");

exports.items = [
    {
    "id": 1,
    "employee_name": "Tiger Nixon",
    "employee_salary": 320800,
    "employee_age": 61,
    "profile_image": ""
    },
    {
    "id": 2,
    "employee_name": "Garrett Winters",
    "employee_salary": 170750,
    "employee_age": 63,
    "profile_image": ""
    },
    {
    "id": 3,
    "employee_name": "Ashton Cox",
    "employee_salary": 86000,
    "employee_age": 66,
    "profile_image": ""
    },
    {
    "id": 4,
    "employee_name": "Cedric Kelly",
    "employee_salary": 433060,
    "employee_age": 22,
    "profile_image": ""
    },
    {
    "id": 5,
    "employee_name": "Airi Satou",
    "employee_salary": 162700,
    "employee_age": 33,
    "profile_image": ""
    }
];

//Returns the private key in the system
exports.readPrivateKey = () => {
    let filePath = "./config/keys/dev.key"
    try{
        let data = fs.readFileSync(filePath,'utf-8');
        if(!data){
            console.log('Cannot read the private key');
            return
        }
        return data
    }catch(error){
        console.log(error)
    }
}

exports.readPublicKey = () => {
    let filePath = './config/keys/dev.key.pub'
    try {
        let data = fs.readFileSync(filePath, 'utf-8');
        if(!data){
            console.log('Cannot read the public key!');
            return
        }
        return data
    } catch(error) {
        console.log(error)
    }
}

// Sample user object
exports.user = Object.freeze({
    userId: "123456",
    firstName: "John",
    lastName: "Wick",
    fullName: "John Wick",
    email: "johnwick@example.com"
});