import * as express from "express";
import * as request from "request-promise";

export const searchRouter = express.Router();

searchRouter.get('/:playerId', function (req, res) {
    const playerId = req.params.playerId;

    const url = `https://stats.gogigantic.com/en/gigantic-careers/playersearch/?username=${playerId}&page_num=0&page_size=100`;

    console.log(url);

    request({url: url, json: true}).then(data => res.send(data));
});