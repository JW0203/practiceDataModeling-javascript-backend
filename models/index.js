const Profile = require('./profile');
const User = require('./user');


// 1 : 1 Association (관계맺는 법)
User.hasOne(Profile);
Profile.belongsTo(User);

module.exports = {
    Profile,
    User
}