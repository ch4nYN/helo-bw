import { Schema, model, connect } from 'mongoose';

interface WeightDataProps {
    weight: number;
    date: DateConstructor;
}

const weightDataSchema = new Schema<WeightDataProps>(
    {
        weight: { type: Number, required: true },
        date: { type: Date, required: true },
    },
    {
        timestamps: { createdAt: true, updatedAt: true }
    }
);

const WeightDataModel = model<WeightDataProps>('WeightData', weightDataSchema);

export default WeightDataModel;