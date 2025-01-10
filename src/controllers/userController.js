const userRepository = require("../repositories/userRepository");

exports.getUser = (req, res) => {
    try{
            const resp = userRepository.basicUser();
            return res.status(200).json(resp)
    }catch(e){
        console.log("error in controller",e)
    }
}