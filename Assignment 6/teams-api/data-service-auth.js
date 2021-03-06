const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// You must write a userSchema for a new user account,
// in a source code file named "user.js"
const userSchema = require('./models/user.js');

module.exports = function (mongoDBConnectionString) {

    let User;

    return {
        connect: function () {
            return new Promise(function (resolve, reject) {
                let db = mongoose.createConnection(mongoDBConnectionString);

                db.on('error', (err) => {
                    reject(err); // reject the promise with the provided error
                });

                db.once('open', () => {
                    User = db.model("users", userSchema);
                    resolve();
                });
            });
        },
        registerUser: function (userData) {
            return new Promise(function (resolve, reject) {

                if (userData.password != userData.password2) {
                    reject("Passwords do not match");
                } else {

                    // Generate a "salt" using 10 rounds
                    bcrypt.genSalt(10, function (err, salt) {
                        if (err) {
                            reject("There was an error encrypting the password");
                        } else {

                            // Encrypt the password: userData.password
                            bcrypt.hash(userData.password, salt, function (err, hash) {

                                if (err) {
                                    reject("There was an error encrypting the password");
                                } else {

                                    userData.password = hash;

                                    let newUser = new User(userData);

                                    newUser.save((err) => {
                                        if (err) {
                                            if (err.code == 11000) {
                                                reject("User Name already taken");
                                            } else {
                                                reject("There was an error creating the user: " + err);
                                            }

                                        } else {
                                            resolve("User " + userData.userName + " successfully registered");
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        },
        checkUser: function (userData) {
            return new Promise(function (resolve, reject) {

                User.find({ userName: userData.userName })
                    .exec()
                    .then((users) => {

                        if (users.length == 0) {
                            reject("Unable to find user " + userData.userName);
                        } else {
                            bcrypt.compare(userData.password, users[0].password).then((res) => {
                                if (res === true) {
                                    resolve(users[0]);
                                } else {
                                    reject("Incorrect password for user " + userData.userName);
                                }
                            });
                        }
                    }).catch((err) => {
                        reject("Unable to find user " + userData.userName);
                    });
            });
        },
        findUserById: function (userId) {
            return new Promise(function (resolve, reject) {

                User.find({ _id: userId })
                    .exec()
                    .then((users) => {
                        if (users.length == 0) {
                            reject("Unable to find user with id " + userId);
                        } else {
                            resolve(users[0]);
                        }
                    }).catch((err) => {
                        reject("Unable to find user with id " + userId);
                    });
            });
        }
    };

}