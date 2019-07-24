import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    standings(year: Int!): [Standings]
  }

  type Standings {
    id: ID,
    name: String,
    wins: Int,
    losses: Int,
    ties: Int,
    pct: Float,
    year: Int
  }
`;

export const resolvers = {
  Query: {
    standings: async (root, { args }) => {
      console.log(args);
    },
  },
};
