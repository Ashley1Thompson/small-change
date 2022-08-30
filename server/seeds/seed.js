const db = require('../config/connection');
const { User, GoodDeed } = require('../models');
const userSeeds = require('./userSeeds.json');
const goodDeedSeeds = require('./goodDeedSeeds.json');

db.once('open', async () => {
    try {
        await GoodDeed.deleteMany({});
        await User.deleteMany({});

        await User.create(userSeeds);

        for (let i = 0; i < goodDeedSeeds.length; i++) {
            const { _id, goodDeedAuthor } = await GoodDeed.create(goodDeedSeeds[i]);
            const user = await User.findOneAndUpdate(
                { username: goodDeedAuthor },
                {
                    $addToSet: {
                        goodDeeds: _id,
                    },
                }
            );
        }
    } catch (err) {
        console.error(err);
        process.exit(1);
    }

    console.log('DATA IS SEEEEEEEEEDED! :)');
    process.exit(0)
})