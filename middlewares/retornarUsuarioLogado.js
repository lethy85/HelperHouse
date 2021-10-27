exports.loggedInfo = () => {
    let usuario
    let logged
    if (req.session && req.session.user) {
      usuario = req.session.user
      logged = true
    } else {
        logged = false
        usuario = false
    }
}