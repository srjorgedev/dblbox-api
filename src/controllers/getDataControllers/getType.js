import Supabase from '../../database/connection.js'
import tables from '../../database/tables.js'

export async function getAllType() {
    try {
        const { data, error } = await Supabase
            .from(tables.dataType)
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

export async function getTypeById(id) {
    try {
        const { data, error } = await Supabase
            .from(tables.dataType)
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