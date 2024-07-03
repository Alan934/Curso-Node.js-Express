const models ={ //objeto de las propiedades que usamos con moongous
    usersModel: require("./nosql/users"),
    tracksModel: require("./nosql/tracks"),
    storageModel: require("./nosql/storage")
}

module.exports = models