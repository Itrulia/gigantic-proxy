import * as express from "express";
import {searchRouter} from "./routes/search";
import {playerRouter} from "./routes/player";

const app = express();

app.get('/*',function(req,res,next){
    res.header("Access-Control-Allow-Origin" , "*");
    next();
});

app.use('/search', searchRouter);
app.use('/player', playerRouter);

app.use(function (req, res, next) {
    const err = new Error('Not Found');
    (err as any).statusCode = 404;

    next(err);
});

app.use(function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }

    res.status(err.statusCode);
    res.send({
        message: err.error.status.message,
        error: err.statusCode
    });
});

app.listen(8080, () => {});