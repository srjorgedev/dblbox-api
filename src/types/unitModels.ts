export type postBasicUnit = {
    unit_id: string,
    unit_name: string,
    unit_affinity: number[],
    unit_chapter: number,
    unit_tag: number[],
    unit_type: number,
    option_tag_switch: boolean,
    option_transformation: boolean,
    option_zenkai: boolean,
    option_legends_limited: boolean,
    option_awaken_art: boolean,
    unit_rarity: number
}

export type postSrcUnit = {
    unit_id: string,
    unit_icon: string,
    unit_bchacut: string
}

export type postAbilityUnit = {
    unit_id: string,
    z_ability: string[],
    z_limited_ability: string[],
    ultra_ability: string[],
    main_ability: string[],
    p_ability_one: string[],
    p_ability_two: string[]
}

export type postAbilityZenkaiUnit = {
    unit_id: string,
    main_ability: string[],
    p_ability_one: string[],
    p_ability_two: string[],
    p_ability_three: string[],
    p_ability_four: string[],
    zenkai_ability: string[]
}

export type postArtsUnit = {
    unit_id: string,
    art_strike: string[],
    art_blast: string[],
    art_special_art: string[],
    art_special_move: string[],
    art_ultimate: string[],
    art_awaken: string[],
    boost_cards: string[],
}

export type postArtsZenkaiUnit = {
    unit_id: string,
    art_strike: string[],
    art_blast: string[],
    art_special_art: string[],
    art_special_move: string[],
    art_ultimate: string[],
    art_awaken: string[],
    boost_cards: string[],
}