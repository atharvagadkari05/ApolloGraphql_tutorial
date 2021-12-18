const express = require('express')
const app = express();
const {ApolloServer} = require('apollo-server-express');
const {typeDef} = require('./schema/typedef')
const {resolvers} =require('./schema/resolver')

const server = new ApolloServer({ typeDef, resolvers });

server.applyMiddleware({app})

app.listen(4000,()=>{
  console.log("listening at 4000")
})