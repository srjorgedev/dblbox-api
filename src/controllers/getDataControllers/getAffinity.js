import tables, { columns } from '../../database/tables.js'
import { getAllFromTable, getFromTableByQuery } from './getDataFromTable.js'

export async function getAllAffinity() {
    try {
        const { data, error, errorMessage, status } = await getAllFromTable(tables.dataAffinity)

        if (error || status === 'Fail', data.length <= 0) {
            throw new Error(errorMessage)
        }

        return (
            {
                status: 'Ok',
                error: false,
                data: data,
                errorMessage: null
            }
        )

    } catch (error) {
        return {
            status: 'Fail',
            error: true,
            data: 'Ha ocurrido un error',
            errorMessage: error
        }
    }
}

export async function getAffinityById(id) {
    try {
        const { data, error, errorMessage, status } = await getFromTableByQuery(tables.dataAffinity, columns.data.id, id)

        if (error || status === 'Fail', data.length <= 0) {
            throw new Error(errorMessage)
        }

        return (
            {
                status: 'Ok',
                error: false,
                data: data,
                errorMessage: null
            }
        )

    } catch (error) {
        return {
            status: 'Fail',
            error: true,
            data: 'Ha ocurrido un error',
            errorMessage: error
        }
    }
}