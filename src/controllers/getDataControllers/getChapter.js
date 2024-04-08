import { getAllFromTable, getFromTableByQuery } from './getDataFromTable.js'
import tables, {columns} from '../../database/tables.js'

export async function getAllChapter() {
    try {
        const { data, error, errorMessage, status } = await getAllFromTable(tables.dataChapter)

        if (error, status === 'Fail') {
            throw new Error(errorMessage)
        }

        return (
            {
                status: 'Success',
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

export async function getChapterById(id) {
    try {
        const { data, error, status, errorMessage } = await getFromTableByQuery(tables.dataChapter, columns.data.id, id)

        if (error, status === 'Fail') {
            throw new Error(errorMessage)
        }

        return (
            {
                status: 'Success',
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