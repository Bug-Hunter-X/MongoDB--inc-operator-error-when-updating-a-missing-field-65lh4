```javascript
//Solution 1: Using $setOnInsert to handle missing fields
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{
  $set: {count: 0},
  $inc: {count: -1}
}, {upsert: true});

//Solution 2: Using $set and $inc in a single query to set the field if it is missing 
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{
  $inc:{count:-1},
  $setOnInsert:{count:0}
});
```