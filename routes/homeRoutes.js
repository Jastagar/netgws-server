const homeRouter= require("express").Router()

homeRouter.route("/").get((req,res)=>{
    res.status(200).json({
        message:"Hello World"
    })
})

module.exports = homeRouter