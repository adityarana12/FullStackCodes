const logger=((req,res,next)=>{
   const { method, path, ip } = req;
    console.log(`${method} ${path}-${ip}`)
    next()    
})
module.exports=logger;
