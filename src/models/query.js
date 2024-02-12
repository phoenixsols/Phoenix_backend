
module.exports = (sequelize,DataTypes)=>{
    const query = sequelize.define(
        "query",
        {
            name:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            email:{
                type:DataTypes.STRING(50),
                allowNull:false
            },
            businessName:{
                type:DataTypes.STRING(255),
                allowNull:false
            },
            description:{
                type:DataTypes.STRING(500),
                allowNull:false
            }
        },
        {
            underscored:true
        }
    )
}