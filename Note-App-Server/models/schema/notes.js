module.exports = (sequelize, DataTypes) => {
    return sequelize.define('feeds', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
        {
            freezeTableName: true,
        }
    );
};