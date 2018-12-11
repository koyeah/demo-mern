var mongoose = require("mongoose");

var ArticleSchema = new mongoose.Schema({
    title: String, 
    content: String,
    author: {
        id: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "User"
        },
        name: String
     }
});

module.exports = mongoose.model("Article", ArticleSchema);