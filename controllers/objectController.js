const RcObject = require('../models/RcObject')

exports.registerObject = function (req, res) {
    console.log(req.body)
    let rcObject = new RcObject(req.body)
    res.send("Votre objet a bien été enregistré avec les infos suivantes: <br><br>"
        + "Nom Prénom: " + rcObject.data.names + "<br>"
        + "Email: " + rcObject.data.email + "<br>"
        + "Type de réparation: " + rcObject.data.type + "<br>"
        + "Temps: " + rcObject.data.time + "<br>"
        + "Description: " + rcObject.data.failure)
}