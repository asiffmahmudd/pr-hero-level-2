

db.test.insertOne({name: "Something"})
db.test.insertMany([
    {name: "Complete Web Development"}   ,
    {name: "Next Web Development"}   
])

db.test.findOne({age: 17})
db.test.find({ gender: "Male"})
db.test.find({ gender: "Male"}, { name: 1, email: 1, gender: 1 })
db.test.find({ gender: "Male"}).project({ name: 1, email: 1, gender: 1 })
db.test.findOne({ gender: { $eq: "Male"}})
db.test.findOne({ age: { $eq: 12}})
db.test.findOne({ age: { $ne: 12}})
db.test.find({ age: { $gte: 12}}).sort({age: 1})
db.test.find({ age: { $gte: 18, $lte: 30 }, gender: "Female" }, {age: 1}).sort({age: 1})

db.test.find(
    { 
        age: { $in: [18, 20, 22, 24, 26, 28, 30]}, 
        gender: "Female" 
    }, 
    {age: 1}
)
.sort({age: 1})
    
db.test.find(
    { 
        age: { $nin: [18, 20, 22, 24, 26, 28, 30]}, 
        gender: "Female",
        interests: {$in: ["Cooking", "Gaming"]}
    }
)
.sort({age: 1})


db.test.find(
    { 
        $and : [
            { gender: "Female"},
            { age: {$ne: 15}}, 
            { age: {$lte: 30}}, 
        ]
    }
).project(
    {age: 1}
)
.sort({age: 1})


db.test.find(
    { 
        $or : [
            { "skills.name": "JAVASCRIPT"},
            { "skills.name": "Python"} 
        ]
    }
).project(
    {skills: 1}
)


db.test.find(
    { phone: { $exists: true } }
)
.sort({age: 1})

db.test.find(
    { age: { $type: "number" } }
)

db.test.find(
    { friends: { $size: 4 } }
)
.project( 
    {friends : 1}    
)

db.test.find(
    { company: { $type: "null" } }
)
.project( 
    {company : 1}    
)

db.test.find(
    { "interests.2": "Cooking" }
)
.project( 
    {interests : 1}    
)

db.test.find(
    { interests: { $all : ["Cooking", "Gaming", "Travelling"] }}
)
.project( 
    {interests : 1}    
)

db.test.find({ 
    skills: { 
        $elemMatch : {
            name: 'Javascript',
            level: "Intermidiate"
        } 
    }
})
.project( 
    {interests : 1}    
)

db.test.updateOne(
    {_id: ObjectId("6406ad64fc13ae5a40000071")},  
    {
        $set:{
            age: 85
        }
    }
)


db.test.updateOne(
    {_id: ObjectId("6406ad64fc13ae5a40000071")},  
    {
        $addToSet:{
            interests: "Skiing"
        }
    }
)

db.test.updateOne(
    {_id: ObjectId("6406ad64fc13ae5a40000071")},  
    {
        $addToSet:{
            interests: {$each : ["Driving", "Bowling"]}
        }
    }
)

db.test.updateOne(
    {_id: ObjectId("6406ad64fc13ae5a40000071")},  
    {
        $unset: {
            birthday: ""
        }
    }
)

db.test.updateOne(
    {_id: ObjectId("6406ad64fc13ae5a40000071")},  
    {
        $pop: {
            friends: 1
        }
    }
)

db.test.updateOne(
    {_id: ObjectId("6406ad64fc13ae5a40000071")},  
    {
        $pull: {
            friends: "Mir Hussain"
        }
    }
)

db.test.updateOne(
    {_id: ObjectId("6406ad64fc13ae5a40000071"), "education.major": "Music"},  
    {
        $set: {
            "education.$.major": "CSE"
        }
    }
)

db.test.updateOne(
    {_id: ObjectId("6406ad64fc13ae5a40000071")},  
    {
        $inc: {
            age: 1
        }
    }
)

db.test.deleteOne({ _id: ObjectId("6406ad64fc13ae5a40000071")})





















