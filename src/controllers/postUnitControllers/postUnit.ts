import Supabase from '../../database/connection.js'
import tables from '../../database/tables.js'

import { type postBasicUnit } from '../../types/unitModels.js'

export async function postBasicUnit(unit: postBasicUnit) {
    try {
        const { data, error } = await Supabase
            .from(tables.basic)
            .insert(unit)


    } catch (error) {
        return {
            error: true,
            status: 'Fail',
            data: 'Ha ocurrido un error',
            errorMessage: error.message
        }
    }
}
