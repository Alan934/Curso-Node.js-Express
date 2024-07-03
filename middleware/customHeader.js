const customHeader = (req, res, next)=>{
    try {
        const apiKey = req.headers.apiKey;
        if (apiKey === "alan-01" ) {
            next();
        } else{
            res.status(403)
            res.send({error: "API Key no válida", message: "Debes proporcionar una API Key válida"});
        }
    } catch (err) {
        res.status(403)
        res.send({error: "Algo ocurrio en el custum Header", message: err.message });
    }

}

module.exports = customHeader