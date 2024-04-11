import Supabase from '../../database/connection.js'
import tables from '../../database/tables.js'

export async function postBasicUnit(unit) {
    try {
        const { data, error } = await Supabase
            .from(tables.basic)
            .insert(unit)

        if (error) throw new Error(error.message)

        return {
            error: false,
            status: 'Ok',
            data: 'Datos subidos',
            errorMessage: null
        }


    } catch (error) {
        return {
            error: true,
            status: 'Fail',
            data: 'Ha ocurrido un error',
            errorMessage: error.message
        }
    }
}

export async function postAbilityUnit(unit) {
    try {
        const { data, error } = await Supabase
            .from(tables.ability)
            .insert(unit)

        if (error) throw new Error(error.message)

        return {
            error: false,
            status: 'Ok',
            data: 'Datos subidos',
            errorMessage: null
        }


    } catch (error) {
        return {
            error: true,
            status: 'Fail',
            data: 'Ha ocurrido un error',
            errorMessage: error.message
        }
    }
}

export async function postArtsUnit(unit) {
    try {
        const { data, error } = await Supabase
            .from(tables.arts)
            .insert(unit)

        if (error) throw new Error(error.message)

        return {
            error: false,
            status: 'Ok',
            data: 'Datos subidos',
            errorMessage: null
        }


    } catch (error) {
        return {
            error: true,
            status: 'Fail',
            data: 'Ha ocurrido un error',
            errorMessage: error.message
        }
    }
}

export async function postSrcUnit(unit) {
    try {
        const { data, error } = await Supabase
            .from(tables.src)
            .insert(unit)

        if (error) throw new Error(error.message)

        return {
            error: false,
            status: 'Ok',
            data: 'Datos subidos',
            errorMessage: null
        }


    } catch (error) {
        return {
            error: true,
            status: 'Fail',
            data: 'Ha ocurrido un error',
            errorMessage: error.message
        }
    }
}

export async function postZenkaiAbilityUnit(unit) {
    try {
        const { data, error } = await Supabase
            .from(tables.zenkaiAbility)
            .insert(unit)

        if (error) throw new Error(error.message)

        return {
            error: false,
            status: 'Ok',
            data: 'Datos subidos',
            errorMessage: null
        }


    } catch (error) {
        return {
            error: true,
            status: 'Fail',
            data: 'Ha ocurrido un error',
            errorMessage: error.message
        }
    }
}
