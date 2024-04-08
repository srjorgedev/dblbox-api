const tables = {
    basic: 'unit_basic',
    src: 'unit_src',
    arts: 'unit_arts',
    ability: 'unit_ability',
    zenkaiAbility: 'unit_ability_zenkai',
    zenkaiArts: 'unit_arts_zenkai',
    dataAffinity: 'data_affinity',
    dataType: 'data_type',
    dataTag: 'data_tag',
    dataChapter: 'data_chapter',
    dataRarity: 'data_rarity'
}

export const columns = {
    data: {
        id: 'id',
        dataEn: 'data_en',
        dataEs: 'data_es'
    },
    unit: {
        id: 'unit_id',
        name: 'unit_name',
        affinity: 'unit_affinity',
        tag: 'unit_tag',
        chapter: 'unit_chapter',
        rarity: 'unit_rarity',
        type: 'unit_type'
    }
}

export default tables