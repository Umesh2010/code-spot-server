const express = require("express");
const roomsRoutes = express.Router();

roomsRoutes.route("/api/Room/").get(async function(req, res) {
    console.log("this is params data ::: ", req.query.roomName);
    return res.json({
        message: "Room file work Success"
    });
});

module.exports = roomsRoutes;