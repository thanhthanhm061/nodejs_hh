const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://thanhthanhm061:Sa4o759ZikPuWIM7@thanhngue.i9yhn.mongodb.net/Nodejs_education_dev',{
    
        });
        console.log('Connect successfully!!!');
        
    } catch (error) {
        console.log('Connect fully!!!');
        
    }
}

module.exports = {connect};