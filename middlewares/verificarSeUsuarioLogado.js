module.exports = function (req, res, next){
    let logged
    if(req.session.user){
        logged = true
        next();
    } else {
        logged = false
        res.redirect("/login");
    }
};