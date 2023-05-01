module.exports = (sequelize, Sequelize) => {
    // Sequelize by default generates createdAt and updatedAt
    const User = sequelize.define("user_table", {
        userid:{
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        // create_datetime:{
        //     type: Sequelize.DATE
        // },
        // update_datetime:{
        //     type: Sequelize.DATE
        // },
        username:{
            type: Sequelize.STRING
        },
        email_address:{
            type: Sequelize.STRING
        },
        encrypted_password:{
            type: Sequelize.STRING
        }
    });

    return User;
};