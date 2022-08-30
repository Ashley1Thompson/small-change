const { AuthenticationErro, AuthenticationError } = require('apollo-server-express');
const { User, GoodDeed } = require('../models');
// const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        users: async () => {
            return User.find().populate('goodDeeds')
        },
        goodDeeds: async (parent, { username }) => {
            const params = username ? { username } : {};
            return GoodDeed.find(params).sort({ createdAt: -1 });
        },
        me: async (parent, args, context) => {
            if (context.user) {
                return User.finOne({ _id: context.user._id }).populate('goodDeeds');
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        }
    },

    Mutation: {
        addUser: async (parent, {username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('No user found with this username');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect username or password'); 
            }

            // const token = signToken(user);

            // return { token, user };
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
        },
        removeGoodDeed: async (parent, { goodDeedId }, context) => {
            if (context.user) {
                const goodDeed = await GoodDeed.findOneAndUpdate({
                    _id: goodDeedId,
                    goodDeedAuthor: context.user.username, 
                });

                await User.findOneAndUpdate(
                    { _id: context.user.id },
                    { $pull: { goodDeeds: thought._id }}
                );
                return goodDeed;
            }
            throw new AuthenticationError('You need to be logged in to do that!');
        }
    }
}

module.exports = resolvers;