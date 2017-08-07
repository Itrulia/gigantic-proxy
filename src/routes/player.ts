import * as express from "express";
import * as request from "request-promise";

export const playerRouter = express.Router();

playerRouter.get('/:playerId', function (req, res) {
    const playerId = req.params.playerId.replace("#", "%23");
    const url = `https://gigantic-mmr-api.azurewebsites.net/leaderboards/${playerId}`;

    console.log(url);

    request({url: url, json: true}).then(data => res.send(data));
});