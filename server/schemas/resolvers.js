const { AuthenticationErro, AuthenticationError } = require('apollo-server-express');
const { User, GoodDeed } = require('../utils/auth');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('goodDeeds')
        },
        goodDeeds: async (parent, { username }) => {
            const params = username ? { username } : {};
            return GoodDeed.find(params).sort({ createdAt: -1 });
        }
    },

    Mutation: {
        addUser: async (parent, {username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        addGoodDeed: async (parent, { goodDeedText }, context) => {
            if (context.user) {
                const goodDeed = await GoodDeed.create({
                    goodDeedText,
                    goodDeedAuthor: context.user.username,
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { goodDeeds: goodDeed._id}}
                );

                return goodDeed
            }
            throw new AuthenticationError('You need to be logged in!');
        }
    }
}

module.exports = resolvers;