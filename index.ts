import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { WeightDataDataSource } from './datasources/weightData.js';
import resolvers from './resolvers/index.js';
import { readFileSync } from 'fs';
import mongoose from 'mongoose';
import { GraphQLScalarType } from 'graphql';

// db connection
mongoose.connect('mongodb+srv://admin123:admin123@cluster0.72orr.mongodb.net/helo-bw-app?retryWrites=true&w=majority')

// Note: this only works locally because it relies on `npm` routing
// from the root directory of the project.
const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });

export interface MyContext {
  dataSources: {
    weightDataAPI: WeightDataDataSource;
  };
}

// custom scalrs
const dateScalar = new GraphQLScalarType({
  name: 'Date',
  parseValue(value: string) {
    return new Date(value);
  },
  serialize(value: Date) {
    return value.toISOString();
  },
  })

const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers: {
    Date: dateScalar,
    ...resolvers
  },
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      // We are using a static data set for this example, but normally
      // this would be where you'd add your data source connections
      // or your REST API classes.
      dataSources: {
        weightDataAPI: new WeightDataDataSource(),
      },
    };
  },
});

console.log(`🚀 Server listening at: ${url}`);
