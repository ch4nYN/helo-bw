import { useMutation, useQuery } from '@apollo/client';
import moment from 'moment';
import React from 'react';
import { LIST_WEIGHT_DATA_QUERY, UPDATE_WEIGHT_DATA_MUTATION } from '../apis';

interface WeightData {
    id: string;
    weight: number; 
    date: Date
}
export interface QueryResults {
    weightData: WeightData[]
}
const HistoryTable = () => {
    const { data, loading, error } = useQuery<QueryResults | undefined>(LIST_WEIGHT_DATA_QUERY);
    const [updateWeightData] = useMutation(UPDATE_WEIGHT_DATA_MUTATION, {
        refetchQueries: [ LIST_WEIGHT_DATA_QUERY ]
    });

    const [editRow, setEditRow] = React.useState<string | undefined>();
    const [newWeight, setNewWeight] = React.useState<number>(0);
    const [newDate, setNewDate]= React.useState<string>("");

    const saveEditedRow = (prevData: WeightData) => {
        if (newWeight <= 0 || newDate === "") return;
        console.log(editRow)
        updateWeightData({
            variables: {
                id: editRow,
                weight: newWeight,
                date: new Date(newDate)
            }
        })
        // clear after saving
        clear()
    }

    const cancelEditRow = () => {
        clear()
    }

    const clear = () => {
        setEditRow(undefined);
        setNewDate("");
        setNewWeight(0)
    }

    if (loading) return <div>loading...</div>
    if (error) return <div>{error.message}</div>
    
    return(
        <table className="border mb-5 text-left">
            <thead>
                <tr className="border">
                    <th className="border w-44 px-2">Date</th>
                    <th className="border w-24 px-2">Weight</th>
                    <th className="border w-16 px-2">Edit</th>
                </tr>
            </thead>
            {data && (
                <tbody>
                    {data.weightData.map((d) => {
                        if (d.id === editRow) {
                            console.log(d)
                            return(
                                <tr key={`${d.id}`}>
                                    <td className="border">
                                        <input className="border" type="date" value={newDate} onChange={e => setNewDate(e.target.value)} />
                                    </td>
                                    <td className="border">
                                        <input className="border" type="number" value={newWeight} onChange={e => setNewWeight(parseFloat(e.target.value))} />
                                    </td>
                                    <td className="border text-blue-500 cursor-pointer " >
                                        <span className="mr-2 text-green-500" onClick={() => saveEditedRow(d)}>Save</span>
                                        <span className="text-red-500" onClick={() => cancelEditRow()}>Cancel</span>
                                    </td>
                                </tr>
                            )
                        }
                        return(
                            <tr className="border" key={`${d.id}`}>
                                <td className="border">{moment(d.date).format('L') }</td>
                                <td className="border">{d.weight} lbs</td>
                                <td className="border underline text-blue-500 cursor-pointer" onClick={() => {setEditRow(d.id); console.log(d.id)}}>Edit</td>
                            </tr>
                        )
                    })}
                </tbody>
            )}
        </table>
    )
}

export default HistoryTable;