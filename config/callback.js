module.exports = {
    ErrorMessage: (error) => {
        return new Object({
            status: false,
            message: error,
        })
    },
    CreateMessage: (item) => {
        return new Object({
            status: true,
            data: item
        })
    },
    GetMessage: (item) => {
        return new Object({
            status: true,
            data: item,
        })
    },
    
    DeleteMessage: (item) => {
        return new Object({
            status: true,
            data: item
        })
    },
    UpdateMessage: (item) => {
        return new Object({
            status: true,
            data: item
        })
    },
}