const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient
const dbUrl = "mongodb://127.0.0.1:27017"
const dbName = "Task-1"

MongoClient.connect(dbUrl, (error, data)=>{

    const db = data.db(dbName)

    db.collection("users").insertOne({
        name:"hossam",
        age:24
    },(error, res)=>{
        if(error){
            console.log(error)
        }
        console.log(res.insertedId)
    })

    db.collection("users").insertMany([
        {
            name:"mohamed",
            age:31
        },
        {
            name:"ahmed",
            age:26
        },
        {
            name:"osamn",
            age:28
        },
        {
            name:"mazen",
            age:30
        },
        {
            name:"ahmed",
            age:22
        },
        {
            name:"esraa",
            age:27
        },
        {
            name:"asmaa",
            age:27
        },
        {
            name:"omnia",
            age:27
        },
        {
            name:"ahmed",
            age:27
        },
        {
            name:"hend",
            age:27
        },
    ],(error, res)=>{
        if(error){
            console.log(error)
        }
        console.log(res.insertedCount)
    })


    db.collection("users").find({age:27}).toArray((error, res)=>{
        if(error){
            console.log(error)
        }
        console.log(res)
    })


    db.collection("users").find({age:27}).limit(3).toArray((error, res)=>{
        if(error){
            console.log(error)
        }
        console.log(res)
    })


    db.collection("users").updateOne({_id:mongodb.ObjectId("65fcbaa44db637db9a1b6bb3")},
    {$set:{name:"mohamed"}})
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})


    db.collection("users").updateOne({_id:mongodb.ObjectId("65fcbaa44db637db9a1b6bb4")},
    {$set:{name:"mamdoh"}})
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})

    db.collection("users").updateOne({_id:mongodb.ObjectId("65fcbaa44db637db9a1b6bb5")},
    {$set:{name:"mamdoh"}})
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})


    db.collection("users").updateOne({_id:mongodb.ObjectId("65fcbaa44db637db9a1b6bb6")},
    {$set:{name:"mamdoh"}})
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})
    

    db.collection("users").updateOne({_id:mongodb.ObjectId("65fcbaa44db637db9a1b6bb3")},
    {$inc:{age: 5}})
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})


    db.collection("users").updateOne({_id:mongodb.ObjectId("65fcbaa44db637db9a1b6bb4")},
    {$inc:{age: 5}})
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})

    db.collection("users").updateOne({_id:mongodb.ObjectId("65fcbaa44db637db9a1b6bb5")},
    {$inc:{age: 1}})
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})


    db.collection("users").updateOne({_id:mongodb.ObjectId("65fcbaa44db637db9a1b6bb6")},
    {$inc:{age: 1}})
    .then((data)=>{console.log(data.modifiedCount)})
    .catch((error)=>{console.log(error)})


    db.collection("users").updateMany({age:25},
        {$inc:{age:5}})
        .then((data)=>{console.log(data.modifiedCount)})
        .catch((error)=>{console.log(error)})


    db.collection("users").deleteMany({age:27})
    .then((data)=>{console.log(data.deletedCount)})
    .catch((error)=>{console.log(error)})

})