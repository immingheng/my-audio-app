// This is incomplete - by right I wanted to create more rights - moderator, admin, user, etc to do role based access control
exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};


exports.userBoard = (req, res) => {
    res.status(200).send("User Content.");
}