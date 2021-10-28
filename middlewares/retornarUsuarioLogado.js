exports.loggedInfo = (sessionInfo) => {
    let response = {}
    if (sessionInfo) {
      response.usuario = sessionInfo
      response.logged = true 
    } else {
      response.usuario = false
      response.logged = false 
    }
    return response
}