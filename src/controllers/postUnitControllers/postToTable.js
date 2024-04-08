import Supabase from "../../database/connection.js"

export default async function postToTable(table, unit) {
    try {
        if (table === null || table === "" || table == []) throw new Error('La tabla no fue proporcionada')
        if (unit === null || unit === "" || unit == []) throw new Error('Los datos no fueron proporcionados')

        const { data, error } = Supabase
            .from(table)
            .insert(unit)

        if (error) throw new Error(error.message)

        return {
            data: data,
            status: 'Ok',
            error: false,
            errorMessage: null
        }

    } catch (error) {
        return {
            data: 'Ha ocurrido un error',
            status: 'Fail',
            error: true,
            errorMessage: error.message
        }

    }
}