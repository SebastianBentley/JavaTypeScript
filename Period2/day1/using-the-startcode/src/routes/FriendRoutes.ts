import { Router } from "express"
const router = Router();

import Facade from "../facades/DummyDB-Facade"
import { ApiError } from "../errors/apiErrors";
const facade = new Facade;
router.get("/all", async (req: any, res) => {
    const friends = await facade.getAllFriends();
    const friendsDTO = friends.map(friend => {
        const { firstName, lastName } = friend
        return { firstName: firstName, lastName } //Two ways, the silly way, and the easy way
    })
    res.json(friendsDTO);
})

router.get("/findby-username/:userid", async (req, res, next) => {
    const userId = req.params.userid;
    try {
        const friend = await facade.getFriend(userId);
        if (friend == null) {
            throw new ApiError("user not found", 404);
        }
        const { firstName, lastName, email } = friend;
        const friendDTO = { firstName, lastName, email }
        res.json(friendDTO);
    } catch (err) {
        next(err)
    }
})



export default router