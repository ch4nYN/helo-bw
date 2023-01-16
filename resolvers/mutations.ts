import { MutationResolvers } from '__generated__/resolvers-types';

// Use the generated `MutationResolvers` type to type check our mutations!
const mutations: MutationResolvers = {
  Mutation: {
    // Below, we mock adding a new book. Our data set is static for this
    // example, so we won't actually modify our data.
    addWeightData: async (_, { date, weight }, { dataSources }) => {
      return await dataSources.weightDataAPI.addWeightData({ date, weight });
    },
    updateWeightData: async (_, { id, date, weight }, { dataSources }) => {
      return await dataSources.weightDataAPI.updateWeightData({ id, date, weight });
    },
  },
};

export default mutations;
