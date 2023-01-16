
import WeightDataModel from '../models/WeightData.js';
import { AddWeightDataMutationResponse, UpdateWeightDataMutationResponse, WeightData } from '../__generated__/resolvers-types';

export class WeightDataDataSource {
  async listWeightData(): Promise<WeightData[]> {
    try {
      const datapoints: WeightData[] = await WeightDataModel.find({}).sort([['date', 'ascending']]);
      return datapoints;
    } catch(err) {
      return err
    }
  }

  // We are using a static data set for this small example, but normally
  // this Mutation would *mutate* our underlying data using a database
  // or a REST API.
  async addWeightData(data: WeightData): Promise<AddWeightDataMutationResponse> {
    const newWeightData = new WeightDataModel({
      date: data.date,
      weight: data.weight
    })

    try {
      const savedWeightData = await newWeightData.save();
      return {
        code: 200,
        success: true,
        message: 'New Weight Data Added',
        weightData: savedWeightData
      };
    } catch (err) {
      return {
        code: 500,
        success: false,
        message: 'Error while adding new weight data',
      };
    }
  }
  

  async updateWeightData(data: WeightData): Promise<UpdateWeightDataMutationResponse> {
    try {
      const updateParams = { date: data.date, weight: data.weight}
      const updatedWeightData = await WeightDataModel.findOneAndUpdate({ id: data.id }, updateParams)
      return {
        code: 200,
        success: true,
        message: 'Weight Data Updated',
        weightData: updatedWeightData
      };
    } catch(err) {
      return {
        code: 500,
        success: false,
        message: 'Error while updating weight data',
      };
    }
  }
}
