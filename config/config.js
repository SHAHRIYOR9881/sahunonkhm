module.exports = {
    port: 5000,
    databaseUrl: "mongodb://127.0.0.1:27017/sanitariya", // sirepidclone_sanitariya
    secretKey: "784sdsdsdhyohsu7324gcx64c847324gcx64cw5evr798",
    secretTime: 1000 * 60 * 60 * 2,
    databaseOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
}
