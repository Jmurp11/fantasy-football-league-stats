import { merge } from 'lodash';
import {
  typeDefs as Standings,
  resolvers as standingsResolvers,
} from './standings';
import {
  typeDefs as Draft,
  resolvers as draftResolvers,
} from './draft';
import {
  typeDefs as Game,
  resolvers as gameResolvers,
} from './game';

const Query = `
  type Query {
    _empty: String
  }
`;

export const typeDefs = [Query, Draft, Game, Standings];
export const resolvers = merge({}, draftResolvers, gameResolvers, standingsResolvers);
