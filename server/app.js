const express = require('express');
const { ApolloServer } = require('apollo-server-express');

// Load schema & resolvers
const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

// const server =  new ApolloServer({
//     typeDefs,
//     resolvers
// })

// const app = express();
// server.start();
// server.applyMiddleware({ app })

// app.listen( { port: 4000 }, () => {
//     console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
// })

async function startApolloServer(typeDefs, resolvers){
    const server = new ApolloServer({typeDefs, resolvers})
    const app = express();
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    const PORT = 4000;
    app.listen(PORT, () => {
    console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
})
}

startApolloServer(typeDefs, resolvers);