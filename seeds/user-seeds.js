const {
    User
} = require('../models');

const userData = [{
        username: "christopher",
        github: "christopher",
        email: "christopher_n@gmail.com",
        password: "123456"
    },
    {
        username: "william",
        github: "willp",
        email: "willp123@gmail.com",
        password: "134567"
    },
    {
        username: "jasmine",
        github: "jasstea",
        email: "jasstea@gmail.com",
        password: "tea123"
    },
    {
        username: "dannie",
        github: "dannienj",
        email: "dannie_nj@gmail.com",
        password: "dannnnn"
    },
    {
        username: "ha123",
        github: "nguyendinhkhanhha296",
        email: "ndkh@gmail.com",
        password: "ha123"
    },
    {
        username: "blessu",
        github: "blessU",
        email: "blessu@gmail.com",
        password: "654321"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;