import {Item} from '../helpers/Item.js';
import {Tile} from '../helpers/Tile.js';
import {Variation} from '../helpers/Variation.js';
import {CountableItem} from '../helpers/CountableItem.js';
import {
    ABYSSAL_ORPHAN,
    ABYSSAL_PROTECTOR,
    ANCIENT_DHIDE_BOOTS,
    ARCANE_SIGIL,
    ARMADYL_DHIDE_BOOTS,
    BABY_CHINCHOMPA,
    BABY_MOLE,
    BANDOS_DHIDE_BOOTS,
    BARON, BEAVER,
    BELLATOR_VESTIGE,
    BLOODHOUND,
    BONE_CLAW,
    BUTCH,
    CALLISTO_CUB,
    CRYSTAL_ARMOUR_SEED,
    CRYSTAL_TOOL_SEED,
    DIZANAS_QUIVER,
    ELYSIAN_SIGIL,
    ENHANCED_WEAPON_SEED,
    GIANT_SQUIRREL,
    GUTHIX_DHIDE_BOOTS,
    HELLPUPPY,
    HERBI,
    HERON,
    IKKLE_HYDRA,
    INFERNAL_CAPE,
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
    KALPHITE_PRINCESS,
    LIL_CREATOR,
    LIL_VIATHAN,
    LIL_ZIK,
    LITTLE_NIGHTMARE,
    MAGMA_MUTAGEN,
    MAGUS_VESTIGE,
    MUSPHAN,
    NEXLING,
    NOON,
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
    ROCK_GOLEM,
    ROCKY,
    SARADOMIN_DHIDE_BOOTS,
    SCORPIAS_OFFSPRING,
    SCURRY,
    SCYTHE_OF_VITUR,
    SKOTOS,
    SMOL_HEREDIT,
    SMOLCANO,
    SPECTRAL_SIGIL,
    SRARACHA,
    TANGLEROOT,
    TANZANITE_MUTAGEN,
    TINY_TEMPOR,
    TORMENTED_SYNAPSE,
    TUMEKENS_GUARDIAN,
    TUMEKENS_SHADOW,
    TWISTED_BOW,
    TZREK_JAD,
    ULTOR_VESTIGE,
    VENATOR_SHARD,
    VENATOR_VESTIGE,
    VENENATIS_SPIDERLING,
    VETION_JR,
    VIRTUS_MASK,
    VIRTUS_ROBE_BOTTOM,
    VIRTUS_ROBE_TOP,
    VOIDWAKER_BLADE,
    VOIDWAKER_GEM,
    VOIDWAKER_HILT,
    VORKI,
    WISP,
    YOUNGLLEF,
    ZALCANO_SHARD,
    ZAMORAK_DHIDE_BOOTS
} from '../helpers/Items.js';

const toa = new Tile('Tombs of Amascut', 'https://oldschool.runescape.wiki/images/thumb/Tombs_of_Amascut.png/1920px-Tombs_of_Amascut.png', [
    new Variation(new CountableItem(new Item('ToA Purple'), 3))
], '3 purple chests in total');

const tob = new Tile('Theatre of Blood', 'https://oldschool.runescape.wiki/images/Theatre_of_Blood_logo.png', [
    new Variation(new CountableItem(new Item('ToB Purple'), 3))
],'3 purple chests in total');

const cox = new Tile('Chambers of Xeric', 'https://oldschool.runescape.wiki/images/Chambers_of_Xeric_logo.png', [
    new Variation(new CountableItem(new Item('CoX Purple'), 3))
],'3 purple chests in total');

const nex = new Tile('Nex', 'https://oldschool.runescape.wiki/images/thumb/Nex.png/1280px-Nex.png', [
    new Variation(new CountableItem(new Item('Nex Unique'), 3))
], 'Everything that\'s on the log counts, except Nihil shards and Nexling');

const nightmare = new Tile('The Nightmare of Ashihama', 'https://oldschool.runescape.wiki/images/The_Nightmare.png', [
    new Variation(new CountableItem(new Item('Nightmare Unique'), 1))
], 'Everything that\'s on the log counts, except Slepey tablet and Parasite egg');

const muspah = new Tile('Phantom Muspah', 'https://oldschool.runescape.wiki/images/thumb/Phantom_Muspah_%28ranged%29.png/1280px-Phantom_Muspah_%28ranged%29.png', [
    new Variation(new CountableItem(VENATOR_SHARD, 5))
]);

const graardor = new Tile('General Graardor', 'https://oldschool.runescape.wiki/images/General_Graardor.png', [
    new Variation(new CountableItem(new Item('General Graardor Unique'), 3))
], 'Bandos chestplate, Bandos tassets, Bandos boots and Bandos hilt count');

const tsutsaroth = new Tile('K\'ril Tsutsaroth', 'https://oldschool.runescape.wiki/images/thumb/K%27ril_Tsutsaroth.png/1280px-K%27ril_Tsutsaroth.png', [
    new Variation(new CountableItem(new Item('K\'ril Tsutsaroth Unique'), 3))
], 'Staff of the Dead, Zamorakian spear, Steam battlestaff and Zamorak hilt count');

const zilyana = new Tile('Commander Zilyana', 'https://oldschool.runescape.wiki/images/Commander_Zilyana.png', [
    new Variation(new CountableItem(new Item('Commander Zilyana Unique'), 3))
], 'Armadyl crossbow, Saradomin hilt, Saradomin sword and Saradomin\'s light count');

const kree = new Tile('Kree\'arra', 'https://oldschool.runescape.wiki/images/thumb/Kree%27arra.png/280px-Kree%27arra.png', [
    new Variation(new CountableItem(new Item('Kree\'arra Unique'), 3))
], 'Armadyl chestplate, Armadyl chainskirt, Armadyl helmet and Armadyl hilt count');

const megarare = new Tile('Raid Megarare', 'https://oldschool.runescape.wiki/images/Coins_detail.png', [
    new Variation(new CountableItem(TUMEKENS_SHADOW)),
    new Variation(new CountableItem(TWISTED_BOW)),
    new Variation(new CountableItem(SCYTHE_OF_VITUR))
]);

const gauntlet = new Tile('The Gauntlet', 'https://oldschool.runescape.wiki/images/Crystalline_Hunllef.png', [
    new Variation(new CountableItem(CRYSTAL_ARMOUR_SEED, 4)),
    new Variation(new CountableItem(ENHANCED_WEAPON_SEED, 1))
]);

const biscape = new Tile('BiS Cape', 'https://oldschool.runescape.wiki/images/thumb/Sol_Heredit.png/1024px-Sol_Heredit.png', [
    new Variation(new CountableItem(DIZANAS_QUIVER, 1)),
    new Variation(new CountableItem(INFERNAL_CAPE, 1))
]);

const voidwaker = new Tile('Complete Voidwaker', 'https://oldschool.runescape.wiki/images/thumb/Voidwaker_equipped_female.png/800px-Voidwaker_equipped_female.png', [
    new Variation(new CountableItem(VOIDWAKER_HILT), new CountableItem(VOIDWAKER_GEM), new CountableItem(VOIDWAKER_BLADE))
]);

const moonsofperil = new Tile('Moons of Peril', 'https://oldschool.runescape.wiki/images/Eyatlalli.png', [
    new Variation(new CountableItem(new Item('Moons of Peril Unique'), 6))
], 'Everything that\'s on the log counts, except Atlatl darts');

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
    new Variation(new CountableItem(YOUNGLLEF))
]);

const dhideboots = new Tile('Blessed Boots', 'https://oldschool.runescape.wiki/images/Zamorak_d%27hide_boots_equipped_female.png', [
    new Variation(new CountableItem(ANCIENT_DHIDE_BOOTS)),
    new Variation(new CountableItem(ARMADYL_DHIDE_BOOTS)),
    new Variation(new CountableItem(BANDOS_DHIDE_BOOTS)),
    new Variation(new CountableItem(GUTHIX_DHIDE_BOOTS)),
    new Variation(new CountableItem(SARADOMIN_DHIDE_BOOTS)),
    new Variation(new CountableItem(ZAMORAK_DHIDE_BOOTS))
]);

const dks = new Tile('Dagannoth Kings', 'https://oldschool.runescape.wiki/images/thumb/Dagannoth_Prime.png/1024px-Dagannoth_Prime.png', [
    new Variation(new CountableItem(new Item('Dagannoth Ring'), 3))
], 'Berserker ring, Seer\'s ring and Archer\'s ring count');


const zalcano = new Tile('Zalcano', 'https://oldschool.runescape.wiki/images/thumb/Zalcano.png/800px-Zalcano.png', [
    new Variation(new CountableItem(CRYSTAL_TOOL_SEED)),
    new Variation(new CountableItem(ZALCANO_SHARD))
]);

const dt2 = new Tile('Desert Treasure II', 'https://oldschool.runescape.wiki/images/thumb/Desert_Treasure_II_logo.png/1920px-Desert_Treasure_II_logo.png', [
    new Variation(new CountableItem(new Item('Awakener\'s orb or Chromium Ingot'), 5)),
    new Variation(new CountableItem(VENATOR_VESTIGE)),
    new Variation(new CountableItem(BELLATOR_VESTIGE)),
    new Variation(new CountableItem(MAGUS_VESTIGE)),
    new Variation(new CountableItem(ULTOR_VESTIGE)),
    new Variation(new CountableItem(VIRTUS_MASK)),
    new Variation(new CountableItem(VIRTUS_ROBE_TOP)),
    new Variation(new CountableItem(VIRTUS_ROBE_BOTTOM))
]);

const zulrah = new Tile('Zulrah', 'https://oldschool.runescape.wiki/images/Zulrah_%28magma%29.png', [
    new Variation(new CountableItem(new Item('Fang or Visage'), 3)),
    new Variation(new CountableItem(TANZANITE_MUTAGEN)),
    new Variation(new CountableItem(MAGMA_MUTAGEN))
]);

const barrows = new Tile('Barrows', 'https://oldschool.runescape.wiki/images/Strange_Old_Man.png', [
    new Variation(new CountableItem(new Item('Barrows Armour or Weapon'), 6))
], 'Everything that\'s on the log counts, except Bolt racks');

const wgs = new Tile('While Guthix Sleeps', 'https://oldschool.runescape.wiki/images/thumb/While_Guthix_Sleeps_logo.png/1920px-While_Guthix_Sleeps_logo.png', [
    new Variation(new CountableItem(TORMENTED_SYNAPSE, 2)),
    new Variation(new CountableItem(BONE_CLAW, 2)),
    new Variation(new CountableItem(TORMENTED_SYNAPSE), new CountableItem(BONE_CLAW))
]);

const corp = new Tile('Corporeal Beast', 'https://oldschool.runescape.wiki/images/thumb/Corporeal_Beast.png/1280px-Corporeal_Beast.png', [
    new Variation(new CountableItem(ARCANE_SIGIL)),
    new Variation(new CountableItem(ELYSIAN_SIGIL)),
    new Variation(new CountableItem(SPECTRAL_SIGIL)),
    new Variation(new CountableItem(JAR_OF_SPIRITS)),
    new Variation(new CountableItem(PET_DARK_CORE))
]);

const jar = new Tile('Any Jar', 'https://oldschool.runescape.wiki/images/Jarr.png', [
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
    new Variation(new CountableItem(JAR_OF_SWAMP))
]);

export const rows = [
    [cox, tob, toa, wgs, dt2],
    [nex, graardor, tsutsaroth, zilyana, kree],
    [nightmare, corp, megarare, zulrah, muspah],
    [dks, zalcano, biscape, moonsofperil, gauntlet],
    [barrows, voidwaker, pet, dhideboots, jar]
];
