const enviromentMode = process.env.NODE_ENV

console.log("Running in enviromentMode:",enviromentMode)

function info(...args){
    if(enviromentMode==="DEVELOPMENT"){
        console.log("")
        console.log(...args)
        console.log("<--------------------------------------------------->")
    }
    return
}
function err(...args){
    if(enviromentMode==="DEVELOPMENT"){
        console.log("")
        console.err(...args)
        console.log("<--------------------------------------------------->")
    }
    return
}
function warn(...args){
    if(enviromentMode==="DEVELOPMENT"){
        console.log("")
        console.warn(...args)
        console.log("<--------------------------------------------------->")
    }
    return
}

module.exports = {
    info,
    err,
    warn
}