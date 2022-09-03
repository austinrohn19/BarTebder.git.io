const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/config');
const jwt = require('jsonwebtoken');
// create our User model
class User extends Model {
    // set up method to run on instance data (per user) to check password
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
    getJwtToken() {
        return jwt.sign({ id: this.id }, process.env.JWT_SECRET, {
            expiresIn: 5000
        });
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            required: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            minlength: [8, 'your password must be at least 8 characters.'],
            select: false,
            validate: {
                len: [8]
            }
        },
        //address information data tpyes
        name:{
           type: DataTypes.STRING,
           allowNull: false,
           required: true,
        },
        companyName:{
            type: DataTypes.STRING,
            allowNull: false,
            required: true, 
        },
        street:{
            type: DataTypes.STRING, 
            allowNull: false,
            required: true, 
        },
        city:{
            type: DataTypes.STRING,
            allowNull: false, 
            required: true,
        },
        state:{
            type: DataTypes.STRING,
            allowNull: false,
            required: true,      
        },
        zipCode:{
            type: DataTypes.NUMBER, 
            allowNull: false, 
            required: true,
        },
        country:{
            type: DataTypes.STRING,
            allowNull: false,
            required: true, 
        },
        //contact information data tpyes
        fullName: {
            type: DataTypes.STRING, 
            allowNull: false,
            required: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false, 
            required: [true,'Please enter your Email address'],
            validate:{ 
                isEmail: true}
            
        },
        number: {
            type: DataTypes.NUMBER,
            allowNull: false,
            required: false,
        },
        //Bar Information Data tpyes
        barTypes: {
            type: DataTypes.STRING, 
            allowNull: false,
            required: true,
        },
        LED:{
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        Key:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        POS: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        POSBrand: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vender: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        VenderIntergration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        //Optional Information Data tpyes
        water: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        electric: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        wages: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        rent: {
            type: DataTypes.NUMBER, 
            allowNull: false,
        },
        FOH: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        BOH: {
            type: DataTypes.NUMBER,
            allowNull: false,   
        },
        taxes: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        Misc: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
    })
        hooks: {
            // set up beforeCreate lifecycle "hook" functionality
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
                return newUserData;
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    }
);

module.exports = User;

// const userSchema = new mongoose.Schema({
//     //user name is being created
//     name: {
//         type: String,
//         required: [true, 'Please enter your name.'],
//         maxlength: [30, 'your name cant exceed 30 characters']
//     },
//     //email of the user for validation and setting up of the account
//     email: {
//         type: String,
//         required: [true, 'Please enter your email address'],
//         unique: true,
//         validate: [validator.isEmail, 'Please enter a valid email address.']
//     },
//     //password the user sets
//     password: {
//         type: String,
//         required: [true, 'Please enter your password'],
//         minlength: [8, 'your password must be at least 8 characters.'],
//         select: false
//     },
//     //this is the id and url of the image because we are using cloudary to store our photos in
//     avatar: {
//         public_id: {
//             type: String,
//             requires: true
//         },
//         url: {
//             type: String,
//             required: true
//         }
//     },
//     //default setting that is being created
//     role: {
//         type: String,
//         default: 'user'
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     resetPasswordToken: String,
//     resetPasswordExpire: Date

// })

// // Encrypting password before saving user
// userSchema.pre('save', async function (next) {
//     if (!this.isModified('password')) {
//         next()
//     }

//     this.password = await bcrypt.hash(this.password, 10)
// })

// // Compare user password
// userSchema.methods.comparePassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password)
// }

// // Return JWT token


// // Generate password reset token
// userSchema.methods.getResetPasswordToken = function () {
//     // Generate token
//     const resetToken = crypto.randomBytes(20).toString('hex');

//     // Hash and set to resetPasswordToken
//     this.resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex')

//     // Set token expire time
//     this.resetPasswordExpire = Date.now() + 30 * 60 * 1000

//     return resetToken

// }

// module.exports = mongoose.model('User', userSchema);