var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInteger = require('graphql').GraphQLInteger;
var UserType = require('../types/user');
var services = require('../../services');

exports.update = {
    type: UserType.userType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLString),
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        addres: {
            type: new GraphQLNonNull(GraphQLString),
        },
        phone: {
            type: new GraphQLNonNull(GraphQLString),

        }
    },
        resolve(root, params) {
            return services.updateUser(params)
    }
}