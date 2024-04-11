import Supabase from "../../database/connection.js"

export async function getAllFromTable(table) {
    try {
        const { data, error } = await Supabase
            .from(table)
            .select('*')
            .order('unit_id', { ascending: false })

        if (error) throw new Error(error.message)
        if (data.length <= 0) throw new Error(`Tabla ${table} sin datos.`)

        return {
            status: 'Ok',
            data: data,
            error: false,
            errorMessage: null
        }
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
            .eq(column, query)

        if (error) throw new Error(error.message)
        if (data.length <= 0) throw new Error(`Tabla ${table} sin datos.`)

        return {
            status: 'Ok',
            data: data[0],
            error: false,
            errorMessage: null
        }
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
