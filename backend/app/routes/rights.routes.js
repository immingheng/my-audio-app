const {authJWT} = require("../middleware");
const controller = require("../controllers/rights.controller");

// This is incomplete - by right I wanted to create more rights - moderator, admin, user, etc to do role based access control
module.exports = function(app) {
    app.use(function(req, res, next){
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/rights/user", 
        [authJWT.verifyToken],
        controller.user
    );

}