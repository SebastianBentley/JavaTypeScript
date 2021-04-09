import { MongoClient, Db, Collection } from "mongodb"
import connect from "./connect";
import setupTestData from "./setupTestData"

(async function Tester() {
    const client = await connect();
    const db = client.db("day1ex1")
    const collection = db.collection("inventory")
    const status = await setupTestData(collection)

    //Add your play-around code here

    //Update paper
    await collection.updateOne(
        { item: "paper" },
        {
            $set: { "size.uom": "cm", status: "P" },
            $currentDate: { lastModified: true }
        }
    )

    //Update all with "qty" less than 50
    await collection.updateMany(
        { "qty": { $lt: 50 } },
        {
            $set: { "size.uom": "in", status: "P" },
            $currentDate: { lastModified: true }
        }
    )

    //Replace the first document from the inventory collection where item: "paper":
    await collection.replaceOne(
        { item: "paper" },
        { item: "paper", instock: [{ warehouse: "A", qty: 60 }, { warehouse: "B", qty: 40 }] }
    )

    client.close()
})()
