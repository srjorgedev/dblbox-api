import Supabase from '../../database/connection.js'
import tables from '../../database/tables.js'

export async function getAllChapter() {
    try {
        const { data, error } = await Supabase
            .from(tables.dataChapter)
            .select('*')

        if (error) {
            throw new Error(error.message)
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
        const { data, error } = await Supabase
            .from(tables.dataChapter)
            .select('*')
            .eq('id', id)

        if (error) {
            throw new Error(error.message)
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