exports.basicUser = () => {
    try{
        return {res : "baic api called"}
    }catch(e){
        console.log("error in repository",e)
    }
}