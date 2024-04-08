import Supabase from "../../database/connection"

export async function getAllFromTable(table) {
    try {
        const { data, error } = await Supabase
            .from(table)
            .select('*')

        if (error) throw new Error(error.message)
        if (data[0].length <= 0) throw new Error(`Tabla ${table} sin datos.`)

        return data
    }
    catch (error) { 
        return {
            status: 'Fail',
            data: 'Ha ocurrido un error',
            error: true,
            errorMessage: error.message
        }
    }
}

export async function getFromTableByQuery(table, column, query) {
    try {
        const { data, error } = await Supabase
            .from(table)
            .select('*')

        if (error) throw new Error(error.message)
        if (data[0].length <= 0) throw new Error(`Tabla ${table} sin datos.`)

        return data
    }
    catch (error) { 
        return {
            status: 'Fail',
            data: 'Ha ocurrido un error',
            error: true,
            errorMessage: error.message
        }
    }
}