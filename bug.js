```javascript
//Incorrect usage of $inc operator in MongoDB update query.
db.collection('myCollection').updateOne({"_id":ObjectId("651234567890")},{$inc:{count:-1}});
```