const mongoose = require("mongoose");
const Article = require("./models/article");
const data = [
    { title: "seed title 1", content: "seed content 1" },
    { title: "seed title 2", content: "seed content 2" },
    { title: "seed title 3", content: "seed content 3" },
    { title: "seed title 4", content: "seed content 4" },
];


module.exports = () => {
    Article.remove({}, (err) => {
        if (err) {
            return console.log('[Seed]', err.message);
        }
        console.log("'[Seed]', 'removed Articles!");
        Article.create( data, (err, articles) => {
            if (err) {
                return console.log('[Seed]', err);
            }
            console.log("'[Seed]', 'created Articles!", articles);

        });
    });
};