const userModels = require('../models/userModels')



// creating user function
const createUser = async(req,res) => {
    console.log(req.body)


    // # destructuring
    const {name, phone, email} = req.body

    // 2 validation 
    if(!name || !phone || !email ) {
        return res.json({success: false,
        message: 'please enter required fields'});
    }

    // try- catch (error handeling)
    try {
        //check if the user already exist
        const existingUser = await   userModels.findOne({phone : phone})
        if (existingUser){
            return res.json({
                "success" : false,
                "message" : "User already exists"
            })
        }  

    const newUser = new userModels({
        //fields : values recieved from user
        name : name,
        phone : phone,
        email : email,
    })

    await newUser.save(
        newUser
    ) 

    // 6. send the success response
    return res.json({
        "success" : true,
        "message" : "user created successfully"
    })
  
        
    } catch (error) {
        console.log(error)
        res.json({
            "success" : false,
            message : 'internal server error'

        });
    }
    

}

//2.Login

//3. Update Profile


//4. Change password


//Exporting 
module.exports = {
    createUser
}