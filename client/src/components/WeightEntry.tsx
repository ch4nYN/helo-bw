import { useMutation } from '@apollo/client';
import React from 'react';
import { ADD_WEIGHT_DATA_MUTATION, LIST_WEIGHT_DATA_QUERY } from '../apis';

export interface Data {
    weight: number;
    date: string;
}

const WeightEntry = () => {
    const [weight, setWeight] = React.useState<number>(0);
    const [date, setDate] = React.useState<string>("")
    const [disabled, setDisabled] = React.useState(true);
    
    const [addWeightData, { loading, error}] = useMutation(ADD_WEIGHT_DATA_MUTATION, {
        variables: {
          weight,
          date,
        },
        refetchQueries: [ LIST_WEIGHT_DATA_QUERY ]
    });
    
    const saveData = () => {
        addWeightData();
        // clear
        setDate("");
        setWeight(0)
    }
    React.useEffect(() => {
        if (date === "" || weight <= 0) {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }, [date, weight])

    return(
        <div className="flex mb-5">
            <input className="w-42 border-2 p-2 rounded mr-4" type="date" value={date} onChange={e => setDate(e.target.value)}/>
            <div className="border-2 p-2 rounded mr-4">
                <input className="w-12" type="number" value={weight} onChange={e => setWeight(parseFloat(e.target.value))}/>
                <span>lbs</span>
            </div>
            <button onClick={() => saveData()} disabled={disabled} className={`w-24 bg-green-700 text-white rounded cursor-pointer uppercase text-sm ${disabled ? 'bg-gray-500': ''}`}>add</button>
        </div>
    )
}

export default WeightEntry;