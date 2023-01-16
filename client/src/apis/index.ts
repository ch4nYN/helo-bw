import { gql } from "@apollo/client";

export const LIST_WEIGHT_DATA_QUERY = gql`
{
    weightData {
        id
        weight
        date
    }
}
`;

export const ADD_WEIGHT_DATA_MUTATION = gql`
    mutation AddWeightData($weight: Float, $date: String) {
        addWeightData(weight: $weight, date: $date) {
            code
            message
            success
            weightData {
                date
                id
                weight
            }
        }
}
`

export const UPDATE_WEIGHT_DATA_MUTATION = gql`
    mutation UpdateWeightData($updateWeightDataId: String, $weight: Float, $date: Date) {
        updateWeightData(id: $updateWeightDataId, weight: $weight, date: $date) {
            code
            message
            success
            weightData {
            date
            id
            weight
            }
        }
    }
`