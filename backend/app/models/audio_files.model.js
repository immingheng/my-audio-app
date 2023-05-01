module.exports = (sequelize, Sequelize) => {
   // Sequelize by default generates createdAt and updatedAt
    const AudioFiles = sequelize.define("audio_files", {
        audio_id:{
            type: Sequelize.INTEGER,
            primaryKey:true
        },
        userid:{
            type: Sequelize.INTEGER
        },
        // create_datetime:{
        //     type: Sequelize.DATE
        // },
        // update_datetime:{
        //     type: Sequelize.DATE
        // },
        audio_file:{
            type: Sequelize.BLOB
        },
        description:{
            type: Sequelize.STRING
        },
        category:{
            type: Sequelize.STRING
        }
    });

    return AudioFiles;
};