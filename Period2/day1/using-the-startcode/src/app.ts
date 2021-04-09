import express from "express";
import dotenv from "dotenv";
import path from "path"
import FriendsFacade from "./facades/DummyDB-Facade"
import friendRoutes from "./routes/FriendRoutes"
import { IFriend } from "./interfaces/IFriend";
import { Request, Response } from "express";
import { ApiError } from "./errors/apiErrors";
const Joi = require('joi');
const facade = new FriendsFacade();
dotenv.config()

const app = express()
app.use(express.json());

app.use(express.static(path.join(process.cwd(), "public")))
// Something has to go in here

function validateFriend(friend: IFriend) {
    const schema = {
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(5).required()
    }
    return Joi.validate(friend, schema)
}

app.use("/api/friends", friendRoutes)

app.get("/demo", (req, res) => {
    let a = 124;
    console.log(a);
    res.send("Server is really up");
})


app.get("/api/friend/all", async (req, res) => {
    const friends = await facade.getAllFriends();
    res.send(friends);
})

app.get('/api/friend/:email', async (req, res) => {
    const friend = await facade.getFriend(req.params.email);
    res.send(friend);
});

app.post('/api/friend', async (req, res) => {

    const { error } = validateFriend(req.body); // this is object desctructuring, instead of writing result.error
    if (error) return res.status(400).send(error.details[0].message);

    const friend: IFriend = {
        id: "id" + (facade.friends.length + 1).toString(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };

    res.send(await facade.addFriend(friend));
});

app.delete('/api/friend/:email', async (req, res) => {
    res.send(await facade.deleteFriend(req.params.email));
});

//404 handlers for api-requests
app.use("/api", (req, res, next) => {
    res.status(404).json({ errorCode: 404, msg: "not found" })
});

app.use((err: any, req: Request, res: Response, next: Function) => {
    if (err instanceof (ApiError)) {
        const errorCode = err.errorCode ? err.errorCode : 500;
        res.status(errorCode).json({ errorCode: 404, msg: "api not found" })
    } else {
        next(err);
    }
});

export default app;

