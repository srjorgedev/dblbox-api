import { getAllFromTable, getFromTableByQuery } from "../getDataControllers/getDataFromTable.js"
import tables from "../../database/tables.js"

export async function getAllUnits() {
    try {
        const basic = await getAllFromTable(tables.basic)
        if (basic.error || basic.status == 'Fail') throw new Error('Basic ' + basic.errorMessage)

        const ability = await getAllFromTable(tables.ability)
        if (ability.error || ability.status == 'Fail') throw new Error('Ability ' + ability.errorMessage)

        const zenkaiAbility = await getAllFromTable(tables.zenkaiAbility)
        if (zenkaiAbility.error || zenkaiAbility.status == 'Fail') throw new Error('Zenkai ' + zenkaiAbility.errorMessage)

        const arts = await getAllFromTable(tables.arts)
        if (arts.error || arts.status == 'Fail') throw new Error('Arts ' + arts.errorMessage)

        const src = await getAllFromTable(tables.src)
        if (src.error || src.status == 'Fail') throw new Error('Src ' + src.errorMessage)

        const units = basic.data.map(unit => {
            const unitAbility = ability.data.find(data => data.unit_id === unit.unit_id)
            const unitAbilityZenkai = zenkaiAbility.data.find(data => data.unit_id === unit.unit_id)
            const unitArts = arts.data.find(data => data.unit_id === unit.unit_id)
            const unitSrc = src.data.find(data => data.unit_id === unit.unit_id)

            delete unitAbility.unit_id
            delete unitArts.unit_id
            delete zenkaiAbility.unit_id
            delete unitSrc.unit_id

            return ({
                unit: {
                    basic: { ...unit },
                    arts: { ...unitArts },
                    src: { ...unitSrc },
                    ability: { ...unitAbility },
                    abilityZenkai: { ...unitAbilityZenkai }
                }
            })
        })

        return units
    } catch (error) {
        return ({
            status: 'Fail',
            data: null,
            error: true,
            errorMessage: error.message
        })
    }
}

export async function getUnitById(id) {
    try {
        const basic = await getFromTableByQuery(tables.basic, 'unit_id', id)
        if (basic.error || basic.status == 'Fail') throw new Error(basic.errorMessage)

        const ability = await getFromTableByQuery(tables.ability, 'unit_id', id)
        if (ability.error || ability.status == 'Fail') throw new Error(ability.errorMessage)

        const zenkaiAbility = await getFromTableByQuery(tables.zenkaiAbility, 'unit_id', id)
        if (zenkaiAbility.error || zenkaiAbility.status == 'Fail') throw new Error(zenkaiAbility.errorMessage)

        const arts = await getFromTableByQuery(tables.arts, 'unit_id', id)
        if (arts.error || arts.status == 'Fail') throw new Error(arts.errorMessage)

        const src = await getFromTableByQuery(tables.src, 'unit_id', id)
        if (src.error || src.status == 'Fail') throw new Error(src.errorMessage)

        delete ability.data.unit_id
        delete arts.data.unit_id
        delete zenkaiAbility.data.unit_id
        delete src.data.unit_id

        return ({
            unit: {
                basic: { ...basic.data },
                arts: { ...arts.data },
                src: { ...src.data },
                ability: { ...ability.data },
                abilityZenkai: { ...zenkaiAbility.data }
            }
        })

    } catch (error) {
        return ({
            status: 'Fail',
            data: null,
            error: true,
            errorMessage: error.message
        })
    }
}

export async function getAllUnitsBasic() {
    try {
        const basic = await getAllFromTable(tables.basic)
        if (basic.error || basic.status == 'Fail') throw new Error(basic.errorMessage)

        const src = await getAllFromTable(tables.src)
        if (src.error || src.status == 'Fail') throw new Error(src.errorMessage)

        const units = basic.data.map(unit => {
            const unitSrc = src.data.find(data => data.unit_id === unit.unit_id)
            delete unitSrc.unit_id

            return ({
                unit: {
                    basic: {
                        unit_id: unit.unit_id,
                        unit_name: unit.unit_name,
                        unit_affinity: unit.unit_affinity,
                        unit_rarity: unit.rarity,
                        unit_type: unit.unit_type,
                        option_zenkai: unit.option_zenkai,
                        option_tag_switch: unit.option_tag_switch,
                        option_transformation: unit.option_transformation,
                        option_legends_limited: unit.option_legends_limited,
                    },
                    src: { ...unitSrc },
                }
            })
        })

        return units

    } catch (error) {
        return ({
            status: 'Fail',
            data: null,
            error: true,
            errorMessage: error.message
        })
    }
}