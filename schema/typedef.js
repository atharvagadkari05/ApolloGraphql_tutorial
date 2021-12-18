const {gql} = require('apollo-server-express')

const typeDef = gql`

type User{
    name:string!
    address:string!
    country:string!
    contact:int!
    email: string!
}

type query{
users:[User!]!

}

`
module.exports = {typeDef}