var GraphQLObjectType = require('graphql').GraphQLObjectType;
var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLID = require('graphql').GraphQLID;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLInteger = require('graphql').GraphQLInteger;

// User type

exports.userType = new GraphQLObjectType({
    name: 'user',
    fields: function () {
        return {
            id: {
                type: new GraphQLNonNull(GraphQLID)
            },
            name: {
                type: GraphQLString
            },
            addres: {
                type: GraphQLString
            },
            phone: {
                type: GraphQLString
            }
        }
    }
});