import { MongoClient, Db, Collection } from "mongodb"
import connect from "./connect";
import setupTestData from "./setupTestData"

(async function Tester() {
    const client = await connect();
    const db = client.db("day1ex1")
    const collection = db.collection("inventory")
    const status = await setupTestData(collection)

    //Add your play-around code here
    const result = collection.find(
        { status: "A" }
    ).project({ item: 1, _id: 0 }); //possible to att .limit(<number>);
    const asArr = await result.toArray();
    console.log(asArr)

    client.close()
})()
