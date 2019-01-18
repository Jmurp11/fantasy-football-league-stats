import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    draft(year: Int!): [Draft],
    draftByOwner(owner: String): [Draft],
  }
  
  type Draft {
    id: ID,
    owner: String,
    player: String,
    position: String,
    team: String,
    pick: Int,
    round: Int,
    year: Int
  }
`;

export const resolvers = {
  Query: {
    draft: async (root, { args }) => {
      console.log(args);
    },
    draftByOwner: async (root, { args }) => {
      console.log(args);
    },
  },
};
