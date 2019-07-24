import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  extend type Query {
    gamesByYear(year: Int!): [Game],
    gamesByTeam(team: String!): [Game],
    gamesByTeamAndYear(team: String, year: String): [Game],
  }
  type Game {
    id: ID,
    home: String,
    away: String,
    homeScore: Float,
    awayScore: Float,
    playoff: Boolean,
    week: Int,
    year: Int
  }
`;

export const resolvers = {
  Query: {
    gamesByYear: async (root, { args }) => {
      console.log(args);
    },
    gamesByTeam: async (root, { args }) => {
      console.log(args);
    },
    gamesByTeamAndYear: async (root, { args }) => {
      console.log(args);
    },
  },
};
