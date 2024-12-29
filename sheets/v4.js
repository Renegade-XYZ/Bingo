import {Tile} from "../helpers/Tile.js";
import {Variation} from "../helpers/Variation.js";
import {CountableItem} from "../helpers/CountableItem.js";
import {
    ABYSSAL_ORPHAN,
    ABYSSAL_PROTECTOR,
    AHRIMS_HOOD,
    AHRIMS_ROBE_SKIRT,
    AHRIMS_ROBETOP,
    AHRIMS_STAFF,
    ARAXYTE_FANG,
    ARCANE_SIGIL,
    ARCHERS_RING,
    ARMADYL_HILT,
    BABY_CHINCHOMPA,
    BABY_MOLE,
    BALLISTA_LIMBS,
    BALLISTA_SPRING,
    BANDOS_HILT,
    BARON,
    BEAVER,
    BELLATOR_VESTIGE,
    BERSERKER_RING,
    BLOOD_MOON_CHESTPLATE,
    BLOOD_MOON_HELM,
    BLOOD_MOON_TASSETS,
    BLOODHOUND,
    BLUE_MOON_CHESTPLATE,
    BLUE_MOON_HELM,
    BLUE_MOON_SPEAR,
    BLUE_MOON_TASSETS,
    BRYOPHYTAS_ESSENCE,
    BUTCH,
    CALLISTO_CUB,
    CHROMIUM_INGOT,
    CLAWS_OF_CALLISTO,
    CRAWS_BOW,
    CRYSTAL_TOOL_SEED,
    CUT_ONYX,
    DHAROKS_GREATAXE,
    DHAROKS_HELM,
    DHAROKS_PLATEBODY,
    DHAROKS_PLATELEGS,
    DRAGON_HUNTER_WAND,
    DUAL_MACUAHUITL,
    ECLIPSE_ATLATL,
    ECLIPSE_MOON_CHESTPLATE,
    ECLIPSE_MOON_HELM,
    ECLIPSE_MOON_TASSETS,
    ELYSIAN_SIGIL,
    FANGS_OF_VENENATIS,
    GIANT_SQUIRREL,
    GODSWORD_SHARD_1,
    GODSWORD_SHARD_2,
    GODSWORD_SHARD_3,
    GOLDEN_ARMADYL_SPECIAL,
    GOLDEN_BANDOS_SPECIAL,
    GOLDEN_SARADOMIN_SPECIAL,
    GOLDEN_ZAMORAK_SPECIAL,
    GUTHANS_CHAINSKIRT,
    GUTHANS_HELM,
    GUTHANS_PLATEBODY,
    GUTHANS_WARSPEAR,
    HEAVY_FRAME,
    HELLPUPPY,
    HERBI,
    HERON,
    HILL_GIANT_CLUB,
    HOLY_ELIXER,
    HUBERTE,
    HUEYCOATL_HIDE,
    IKKLE_HYDRA,
    JAL_NIB_REK,
    JAR_OF_CHEMICALS,
    JAR_OF_DARKNESS,
    JAR_OF_DECAY,
    JAR_OF_DIRT,
    JAR_OF_DREAMS,
    JAR_OF_EYES,
    JAR_OF_MIASMA,
    JAR_OF_SAND,
    JAR_OF_SMOKE,
    JAR_OF_SOULS,
    JAR_OF_SPIRITS,
    JAR_OF_STONE,
    JAR_OF_SWAMP,
    JAR_OF_VENOM,
    KALPHITE_PRINCESS,
    KARILS_COIF,
    KARILS_CROSSBOW,
    KARILS_LEATHERSKIRT,
    KARILS_LEATHERTOP,
    LIGHT_FRAME,
    LIL_CREATOR,
    LIL_VIATHAN,
    LIL_ZIK,
    LITTLE_NIGHTMARE,
    MAGIC_FANG,
    MAGUS_VESTIGE,
    MALEDICATION_SHARD_1,
    MALEDICATION_SHARD_2,
    MALEDICATION_SHARD_3,
    MONKEY_TAIL,
    MOXI,
    MUSPHAN,
    NEXLING,
    NID,
    NOON,
    NOXIOUS_BLADE,
    NOXIOUS_POINT,
    NOXIOUS_POMMEL,
    ODIUM_SHARD_1,
    ODIUM_SHARD_2,
    ODIUM_SHARD_3,
    OLMLET,
    PET_CHAOS_ELEMENTAL,
    PET_DAGANNOTH_PRIME,
    PET_DAGANNOTH_REX,
    PET_DAGANNOTH_SUPREME,
    PET_DARK_CORE,
    PET_GENERAL_GRAARDOR,
    PET_KRAKEN,
    PET_KREEARRA,
    PET_KRIL_TSUTSAROTH,
    PET_PENANCE_QUEEN,
    PET_SMOKE_DEVIL,
    PET_SNAKELING,
    PET_ZILYANA,
    PHOENIX,
    PRINCE_BLACK_DRAGON,
    QUETZIN,
    RIFT_GUARDIAN,
    RING_OF_THE_GODS,
    ROCK_GOLEM,
    ROCKY,
    SARADOMIN_HILT,
    SCORPIAS_OFFSPRING,
    SCURRY,
    SCYTHE_OF_VITUR,
    SEERS_RING,
    SERPENTINE_VISAGE,
    SKOTOS,
    SKULL_OF_VETION,
    SMOL_HEREDIT,
    SMOLCANO,
    SPECTRAL_SIGIL,
    SPIRIT_SHIELD,
    SRARACHA,
    SUNFIRE_FANATIC_CHAUSSES,
    SUNFIRE_FANATIC_CUIRASS,
    SUNFIRE_FANATIC_HELM,
    TANGLEROOT,
    TANZANITE_FANG,
    THAMMARONS_SCEPTRE,
    TINY_TEMPOR,
    TOME_OF_EARTH,
    TORAGS_HAMMERS,
    TORAGS_HELMET,
    TORAGS_PLATEBODY,
    TORAGS_PLATELEGS,
    TREASONOUS_RING,
    TUMEKENS_GUARDIAN,
    TUMEKENS_SHADOW,
    TWISTED_BOW,
    TYRANNICAL_RING,
    TZREK_JAD,
    ULTOR_VESTIGE,
    UNCUT_ONYX,
    VENATOR_SHARD,
    VENATOR_VESTIGE,
    VENENATIS_SPIDERLING,
    VERACS_BRASSARD,
    VERACS_FLAIL,
    VERACS_HELM,
    VERACS_PLATESKIRT,
    VETION_JR,
    VIGGORAS_CHAINMACE,
    VOIDWAKER_BLADE,
    VOIDWAKER_GEM,
    VOIDWAKER_HILT,
    VORKI,
    WARRIOR_RING,
    WISP,
    YOUNGLLEF,
    ZALCANO_SHARD,
    ZAMORAK_HILT,
    ZENYTE_SHARD
} from "../helpers/Items.js";
import {Item} from "../helpers/Item.js";

const voidwaker = new Tile('Complete Voidwaker', 'https://oldschool.runescape.wiki/images/thumb/Voidwaker_detail.png/150px-Voidwaker_detail.png?01835', [
    new Variation(new CountableItem(VOIDWAKER_HILT), new CountableItem(VOIDWAKER_GEM), new CountableItem(VOIDWAKER_BLADE))
]);

const godsword = new Tile('Godsword From Scratch', 'https://oldschool.runescape.wiki/images/thumb/Zamorak_godsword_detail.png/140px-Zamorak_godsword_detail.png?f52af', [
    new Variation(new CountableItem(ARMADYL_HILT), new CountableItem(GOLDEN_ARMADYL_SPECIAL), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(BANDOS_HILT), new CountableItem(GOLDEN_BANDOS_SPECIAL), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(SARADOMIN_HILT), new CountableItem(GOLDEN_SARADOMIN_SPECIAL), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(ZAMORAK_HILT), new CountableItem(GOLDEN_ZAMORAK_SPECIAL), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3))
]);

const dt2ring = new Tile('DT2 Ring from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Magus_ring_detail.png/150px-Magus_ring_detail.png?7d63e', [
    new Variation(new CountableItem(ULTOR_VESTIGE), new CountableItem(BERSERKER_RING), new CountableItem(CHROMIUM_INGOT, 3)),
    new Variation(new CountableItem(BELLATOR_VESTIGE), new CountableItem(WARRIOR_RING), new CountableItem(CHROMIUM_INGOT, 3)),
    new Variation(new CountableItem(MAGUS_VESTIGE), new CountableItem(SEERS_RING), new CountableItem(CHROMIUM_INGOT, 3)),
    new Variation(new CountableItem(VENATOR_VESTIGE), new CountableItem(ARCHERS_RING), new CountableItem(CHROMIUM_INGOT, 3)),
]);

const wildernessRings = new Tile('Wilderness Rings', 'https://oldschool.runescape.wiki/images/thumb/Treasonous_ring_detail.png/200px-Treasonous_ring_detail.png?859ba', [
    new Variation(new CountableItem(RING_OF_THE_GODS), new CountableItem(TREASONOUS_RING), new CountableItem(TYRANNICAL_RING))
]);

const wildernessShield = new Tile('Wilderness Shield', 'https://oldschool.runescape.wiki/images/thumb/Malediction_ward_detail.png/130px-Malediction_ward_detail.png?c708e', [
    new Variation(new CountableItem(MALEDICATION_SHARD_1), new CountableItem(MALEDICATION_SHARD_2), new CountableItem(MALEDICATION_SHARD_3)),
    new Variation(new CountableItem(ODIUM_SHARD_1), new CountableItem(ODIUM_SHARD_2), new CountableItem(ODIUM_SHARD_3)),
]);

const wildernessWeapon = new Tile('Wilderness Weapon from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Ursine_chainmace_detail.png/170px-Ursine_chainmace_detail.png?115b4', [
    new Variation(new CountableItem(CRAWS_BOW), new CountableItem(FANGS_OF_VENENATIS)),
    new Variation(new CountableItem(THAMMARONS_SCEPTRE), new CountableItem(SKULL_OF_VETION)),
    new Variation(new CountableItem(VIGGORAS_CHAINMACE), new CountableItem(CLAWS_OF_CALLISTO)),
]);

const megarare = new Tile('Raid Megarare', 'https://oldschool.runescape.wiki/images/Coins_detail.png', [
    new Variation(new CountableItem(TUMEKENS_SHADOW)),
    new Variation(new CountableItem(TWISTED_BOW)),
    new Variation(new CountableItem(SCYTHE_OF_VITUR))
]);

const spiritShield = new Tile('Spirit Shield from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Elysian_spirit_shield_detail.png/120px-Elysian_spirit_shield_detail.png?e83cd', [
    new Variation(new CountableItem(ELYSIAN_SIGIL), new CountableItem(SPIRIT_SHIELD), new CountableItem(HOLY_ELIXER)),
    new Variation(new CountableItem(ARCANE_SIGIL), new CountableItem(SPIRIT_SHIELD), new CountableItem(HOLY_ELIXER)),
    new Variation(new CountableItem(SPECTRAL_SIGIL), new CountableItem(SPIRIT_SHIELD), new CountableItem(HOLY_ELIXER))
]);

const toa = new Tile('Tombs of Amascut', 'https://oldschool.runescape.wiki/images/thumb/Tombs_of_Amascut.png/1920px-Tombs_of_Amascut.png', [
    new Variation(new CountableItem(new Item('ToA Purple'), 5))
], 'Lightbearer and Osmumten\'s fang do NOT count');

const tob = new Tile('Theatre of Blood', 'https://oldschool.runescape.wiki/images/Theatre_of_Blood_logo.png', [
    new Variation(new CountableItem(new Item('ToB Purple'), 5))
], 'Avernic defender hilt does NOT count');

const cox = new Tile('Chambers of Xeric', 'https://oldschool.runescape.wiki/images/Chambers_of_Xeric_logo.png', [
    new Variation(new CountableItem(new Item('CoX Purple'), 5))
], 'Arcane prayer scroll and Dexterous prayer scroll do NOT count');

const barrows = new Tile('Full Barrows', 'https://oldschool.runescape.wiki/images/thumb/Dharok%27s_armour_equipped_male.png/150px-Dharok%27s_armour_equipped_male.png?3d05c', [
    new Variation(new CountableItem(GUTHANS_WARSPEAR), new CountableItem(GUTHANS_HELM), new CountableItem(GUTHANS_PLATEBODY), new CountableItem(GUTHANS_CHAINSKIRT)),
    new Variation(new CountableItem(VERACS_FLAIL), new CountableItem(VERACS_HELM), new CountableItem(VERACS_BRASSARD), new CountableItem(VERACS_PLATESKIRT)),
    new Variation(new CountableItem(TORAGS_HAMMERS), new CountableItem(TORAGS_HELMET), new CountableItem(TORAGS_PLATEBODY), new CountableItem(TORAGS_PLATELEGS)),
    new Variation(new CountableItem(DHAROKS_GREATAXE), new CountableItem(DHAROKS_HELM), new CountableItem(DHAROKS_PLATEBODY), new CountableItem(DHAROKS_PLATELEGS)),
    new Variation(new CountableItem(KARILS_CROSSBOW), new CountableItem(KARILS_COIF), new CountableItem(KARILS_LEATHERTOP), new CountableItem(KARILS_LEATHERSKIRT)),
    new Variation(new CountableItem(AHRIMS_STAFF), new CountableItem(AHRIMS_HOOD), new CountableItem(AHRIMS_ROBETOP), new CountableItem(AHRIMS_ROBE_SKIRT)),
]);

const sunfire = new Tile('Full Sunfire fanatic', 'https://oldschool.runescape.wiki/images/Sunfire_fanatic_armour_equipped_male.png?7b83b', [
    new Variation(new CountableItem(SUNFIRE_FANATIC_HELM), new CountableItem(SUNFIRE_FANATIC_CUIRASS), new CountableItem(SUNFIRE_FANATIC_CHAUSSES))
]);

const hueycoatl = new Tile('The Hueycoatl', 'https://oldschool.runescape.wiki/images/The_Hueycoatl.png?7b216', [
    new Variation(new CountableItem(DRAGON_HUNTER_WAND), new CountableItem(TOME_OF_EARTH), new CountableItem(HUEYCOATL_HIDE, 6))
]);

const moonsofperil = new Tile('Moons of Peril', 'https://oldschool.runescape.wiki/images/Blood_moon_armour_equipped_male.png?c6908', [
    new Variation(new CountableItem(BLOOD_MOON_HELM), new CountableItem(BLOOD_MOON_CHESTPLATE), new CountableItem(BLOOD_MOON_TASSETS), new CountableItem(DUAL_MACUAHUITL)),
    new Variation(new CountableItem(BLUE_MOON_HELM), new CountableItem(BLUE_MOON_CHESTPLATE), new CountableItem(BLUE_MOON_TASSETS), new CountableItem(BLUE_MOON_SPEAR)),
    new Variation(new CountableItem(ECLIPSE_MOON_HELM), new CountableItem(ECLIPSE_MOON_CHESTPLATE), new CountableItem(ECLIPSE_MOON_TASSETS), new CountableItem(ECLIPSE_ATLATL))
]);

const venatorBow = new Tile('Venator Bow', 'https://oldschool.runescape.wiki/images/thumb/Venator_bow_detail.png/130px-Venator_bow_detail.png?6167b', [
    new Variation(new CountableItem(VENATOR_SHARD, 5))
]);

const pet = new Tile('Any Pet', 'https://oldschool.runescape.wiki/images/Bob_the_Jagex_cat.png', [
    new Variation(new CountableItem(ABYSSAL_ORPHAN)),
    new Variation(new CountableItem(ABYSSAL_PROTECTOR)),
    new Variation(new CountableItem(BABY_CHINCHOMPA)),
    new Variation(new CountableItem(BABY_MOLE)),
    new Variation(new CountableItem(BARON)),
    new Variation(new CountableItem(BEAVER)),
    new Variation(new CountableItem(BLOODHOUND)),
    new Variation(new CountableItem(BUTCH)),
    new Variation(new CountableItem(CALLISTO_CUB)),
    new Variation(new CountableItem(GIANT_SQUIRREL)),
    new Variation(new CountableItem(HELLPUPPY)),
    new Variation(new CountableItem(HERBI)),
    new Variation(new CountableItem(HERON)),
    new Variation(new CountableItem(IKKLE_HYDRA)),
    new Variation(new CountableItem(JAL_NIB_REK)),
    new Variation(new CountableItem(KALPHITE_PRINCESS)),
    new Variation(new CountableItem(LIL_CREATOR)),
    new Variation(new CountableItem(LIL_VIATHAN)),
    new Variation(new CountableItem(LIL_ZIK)),
    new Variation(new CountableItem(LITTLE_NIGHTMARE)),
    new Variation(new CountableItem(MUSPHAN)),
    new Variation(new CountableItem(NEXLING)),
    new Variation(new CountableItem(NOON)),
    new Variation(new CountableItem(OLMLET)),
    new Variation(new CountableItem(PET_CHAOS_ELEMENTAL)),
    new Variation(new CountableItem(PET_DAGANNOTH_PRIME)),
    new Variation(new CountableItem(PET_DAGANNOTH_REX)),
    new Variation(new CountableItem(PET_DAGANNOTH_SUPREME)),
    new Variation(new CountableItem(PET_DARK_CORE)),
    new Variation(new CountableItem(PET_GENERAL_GRAARDOR)),
    new Variation(new CountableItem(PET_KRAKEN)),
    new Variation(new CountableItem(PET_KREEARRA)),
    new Variation(new CountableItem(PET_KRIL_TSUTSAROTH)),
    new Variation(new CountableItem(PET_PENANCE_QUEEN)),
    new Variation(new CountableItem(PET_SMOKE_DEVIL)),
    new Variation(new CountableItem(PET_SNAKELING)),
    new Variation(new CountableItem(PET_ZILYANA)),
    new Variation(new CountableItem(PHOENIX)),
    new Variation(new CountableItem(PRINCE_BLACK_DRAGON)),
    new Variation(new CountableItem(QUETZIN)),
    new Variation(new CountableItem(RIFT_GUARDIAN)),
    new Variation(new CountableItem(ROCKY)),
    new Variation(new CountableItem(ROCK_GOLEM)),
    new Variation(new CountableItem(SCORPIAS_OFFSPRING)),
    new Variation(new CountableItem(SCURRY)),
    new Variation(new CountableItem(SKOTOS)),
    new Variation(new CountableItem(SMOLCANO)),
    new Variation(new CountableItem(SMOL_HEREDIT)),
    new Variation(new CountableItem(SRARACHA)),
    new Variation(new CountableItem(TANGLEROOT)),
    new Variation(new CountableItem(TINY_TEMPOR)),
    new Variation(new CountableItem(TUMEKENS_GUARDIAN)),
    new Variation(new CountableItem(TZREK_JAD)),
    new Variation(new CountableItem(VENENATIS_SPIDERLING)),
    new Variation(new CountableItem(VETION_JR)),
    new Variation(new CountableItem(VORKI)),
    new Variation(new CountableItem(WISP)),
    new Variation(new CountableItem(YOUNGLLEF)),
    new Variation(new CountableItem(HUBERTE)),
    new Variation(new CountableItem(NID)),
    new Variation(new CountableItem(MOXI)),
    new Variation(new CountableItem(QUETZIN))
]);

const nex = new Tile('Nex', 'https://oldschool.runescape.wiki/images/thumb/Nex.png/1280px-Nex.png', [
    new Variation(new CountableItem(new Item('Nex Unique'), 3))
], 'Everything that\'s on the log counts, except Nihil shards');

const jar = new Tile('Any Jar', 'https://oldschool.runescape.wiki/images/thumb/Jar_of_souls_detail.png/90px-Jar_of_souls_detail.png?e6cf8', [
    new Variation(new CountableItem(JAR_OF_CHEMICALS)),
    new Variation(new CountableItem(JAR_OF_DARKNESS)),
    new Variation(new CountableItem(JAR_OF_DECAY)),
    new Variation(new CountableItem(JAR_OF_DIRT)),
    new Variation(new CountableItem(JAR_OF_DREAMS)),
    new Variation(new CountableItem(JAR_OF_EYES)),
    new Variation(new CountableItem(JAR_OF_MIASMA)),
    new Variation(new CountableItem(JAR_OF_SAND)),
    new Variation(new CountableItem(JAR_OF_SMOKE)),
    new Variation(new CountableItem(JAR_OF_SOULS)),
    new Variation(new CountableItem(JAR_OF_SPIRITS)),
    new Variation(new CountableItem(JAR_OF_STONE)),
    new Variation(new CountableItem(JAR_OF_SWAMP)),
    new Variation(new CountableItem(JAR_OF_VENOM)),
]);

const f2p = new Tile('F2P Jackpot', 'https://oldschool.runescape.wiki/images/thumb/Bryophyta%27s_staff_detail.png/1280px-Bryophyta%27s_staff_detail.png?7ef7e', [
    new Variation(new CountableItem(HILL_GIANT_CLUB)),
    new Variation(new CountableItem(BRYOPHYTAS_ESSENCE))
]);

const ballista = new Tile('Ballista from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Heavy_ballista_detail.png/200px-Heavy_ballista_detail.png?04867', [
    new Variation(new CountableItem(BALLISTA_SPRING), new CountableItem(BALLISTA_LIMBS), new CountableItem(MONKEY_TAIL), new CountableItem(HEAVY_FRAME)),
    new Variation(new CountableItem(BALLISTA_SPRING), new CountableItem(BALLISTA_LIMBS), new CountableItem(MONKEY_TAIL), new CountableItem(LIGHT_FRAME)),
    new Variation(new CountableItem(ZENYTE_SHARD, 5)),
]);

const zulrah = new Tile('Zulrah', 'https://oldschool.runescape.wiki/images/thumb/Zulrah_%28serpentine%29.png/250px-Zulrah_%28serpentine%29.png?29a54', [
    new Variation(new CountableItem(TANZANITE_FANG), new CountableItem(MAGIC_FANG), new CountableItem(SERPENTINE_VISAGE))
]);

const rancour = new Tile('Amulet of rancour from scratch', 'https://oldschool.runescape.wiki/images/Amulet_of_rancour_detail.png?43deb', [
    new Variation(new CountableItem(CUT_ONYX), new CountableItem(ZENYTE_SHARD), new CountableItem(ARAXYTE_FANG)),
    new Variation(new CountableItem(UNCUT_ONYX), new CountableItem(ZENYTE_SHARD), new CountableItem(ARAXYTE_FANG)),
], 'The onyx may NOT be bought from a store');

const zalcano = new Tile('Zalcano', 'https://oldschool.runescape.wiki/images/thumb/Zalcano.png/800px-Zalcano.png', [
    new Variation(new CountableItem(CRYSTAL_TOOL_SEED)),
    new Variation(new CountableItem(ZALCANO_SHARD))
]);

const nightmare = new Tile('The Nightmare of Ashihama', 'https://oldschool.runescape.wiki/images/The_Nightmare.png', [
    new Variation(new CountableItem(new Item('Nightmare Unique'), 1))
], 'Everything that\'s on the log counts, except Slepey tablet and Parasite egg');

export const rows = [
    [cox, tob, toa, wildernessWeapon, wildernessShield],
    [sunfire, barrows, moonsofperil, wildernessRings, dt2ring],
    [godsword, spiritShield, megarare, jar, venatorBow],
    [voidwaker, ballista, pet, rancour, f2p],
    [hueycoatl, zalcano, nex, nightmare, zulrah]
];
