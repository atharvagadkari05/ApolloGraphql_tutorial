const {userdata} =require('../randomData')


const resolvers = {
    Query: {
        users() {
      return userdata
        },
    },
  };

  module.exports = {resolvers}