import * as express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import {resolvers, typeDefs} from '../lib'

const { PORT = 3000 } = process.env;

async function startServer() {
    const app = express.default();
    const apolloServer = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app, path: '/gql' });

    app.use('/', (req, res) => {
        res.status(200).send({
            status: res.statusCode,
            message: 'Hello World!',
        });
    });

    app.use((req, res) => {
        res.status(404).send({
            status: res.statusCode,
            message: 'Not Found',
        });
	});

    app.listen({ port: PORT }, () => {
        console.log(`🚀 Server ready at http://localhost:${PORT}`)
        console.log(`🚀 GQL ready at http://localhost:${PORT}${apolloServer.graphqlPath}`)
    });
}

startServer();