import {
    ABYSSAL_PROTECTOR,
    AHRIMS_HOOD,
    AHRIMS_ROBE_SKIRT,
    AHRIMS_ROBETOP,
    AHRIMS_STAFF,
    ANCESTRAL_HAT,
    ANCESTRAL_ROBE_BOTTOM,
    ANCESTRAL_ROBE_TOP,
    ARCANE_SIGIL,
    ARCHERS_RING,
    ARMADYL_HILT,
    BALLISTA_LIMBS,
    BALLISTA_SPRING,
    BANDOS_HILT,
    BELLATOR_VESTIGE,
    BERSERKER_RING,
    BLUDGEON_AXON,
    BLUDGEON_CLAW,
    BLUDGEON_SPINE,
    CHROMIUM_INGOT,
    CLAWS_OF_CALLISTO,
    CRAWS_BOW,
    CRYSTAL_ARMOUR_SEED,
    DHAROKS_GREATAXE,
    DHAROKS_HELM,
    DHAROKS_PLATEBODY,
    DHAROKS_PLATELEGS,
    DRACONIC_VISAGE,
    DRAGON_AXE,
    DRAGON_BOOTS,
    DRAGON_HARPOON,
    DRAGON_PICKAXE, DRAGON_PICKAXE_BROKEN,
    ELYSIAN_SIGIL, ENHANCED_WEAPON_SEED,
    ETERNAL_CRYSTAL,
    FANGS_OF_VENENATIS,
    GODSWORD_SHARD_1,
    GODSWORD_SHARD_2,
    GODSWORD_SHARD_3,
    GOLDEN_ARMADYL_SPECIAL,
    GOLDEN_BANDOS_SPECIAL,
    GOLDEN_SARADOMIN_SPECIAL,
    GOLDEN_TENCH,
    GOLDEN_ZAMORAK_SPECIAL,
    GUTHANS_CHAINSKIRT,
    GUTHANS_HELM,
    GUTHANS_PLATEBODY,
    GUTHANS_WARSPEAR,
    HEAVY_FRAME,
    HOLY_ELIXER,
    HOLY_ORNAMENT_KIT,
    INFINITY_BOOTS,
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
    JUSTICIAR_CHESTGUARD,
    JUSTICIAR_FACEGUARD,
    JUSTICIAR_LEGGUARDS,
    KARILS_COIF,
    KARILS_CROSSBOW,
    KARILS_LEATHERSKIRT,
    KARILS_LEATHERTOP,
    LIGHT_FRAME,
    LIL_CREATOR,
    MAGIC_FANG, MAGMA_MUTAGEN,
    MAGUS_VESTIGE,
    MALEDICATION_SHARD_1,
    MALEDICATION_SHARD_2,
    MALEDICATION_SHARD_3,
    MASORI_BODY,
    MASORI_CHAPS,
    MASORI_CRAFTING_KIT,
    MASORI_MASK,
    MONKEY_TAIL,
    ODIUM_SHARD_1,
    ODIUM_SHARD_2,
    ODIUM_SHARD_3,
    PEARL_BARBARIAN_ROD,
    PEARL_FISHING_ROD,
    PEARL_FLY_FISHING_ROD,
    PEGASIAN_CRYSTAL,
    PET_PENANCE_QUEEN,
    PHOENIX,
    PRIMORDIAL_CRYSTAL,
    RANGER_BOOTS,
    RING_OF_THE_GODS,
    SANGUINE_ORNAMENT_KIT,
    SARADOMIN_HILT,
    SCYTHE_OF_VITUR,
    SEERS_RING,
    SERPENTINE_VISAGE,
    SKELETAL_VISAGE,
    SKULL_OF_VETION,
    SMOLCANO,
    SPECTRAL_SIGIL,
    SPIRIT_SHIELD,
    TANZANITE_FANG, TANZANITE_MUTAGEN,
    THAMMARONS_SCEPTRE,
    TINY_TEMPOR,
    TORAGS_HAMMERS,
    TORAGS_HELMET,
    TORAGS_PLATEBODY,
    TORAGS_PLATELEGS,
    TORVA_FULL_HELM,
    TORVA_PLATEBODY,
    TORVA_PLATELEGS,
    TREASONOUS_RING,
    TUMEKENS_SHADOW,
    TWISTED_BOW,
    TWISTED_ORNAMENT_KIT,
    TYRANNICAL_RING,
    ULTOR_VESTIGE,
    VENATOR_SHARD,
    VENATOR_VESTIGE,
    VERACS_BRASSARD,
    VERACS_FLAIL,
    VERACS_HELM,
    VERACS_PLATESKIRT,
    VIGGORAS_CHAINMACE,
    VOIDWAKER_BLADE,
    VOIDWAKER_GEM,
    VOIDWAKER_HILT,
    WARRIOR_RING,
    WYVERN_VISAGE,
    ZAMORAK_HILT
} from "../helpers/Items.js";
import {Tile} from "../helpers/Tile.js";
import {CountableItem} from "../helpers/CountableItem.js";
import {Variation} from "../helpers/Variation.js";

const cerberus = new Tile('Cerberus', 'https://oldschool.runescape.wiki/images/thumb/Cerberus.png/280px-Cerberus.png?47f4c', [
    new Variation(new CountableItem(PRIMORDIAL_CRYSTAL, 1), new CountableItem(DRAGON_BOOTS, 1)),
    new Variation(new CountableItem(ETERNAL_CRYSTAL, 1), new CountableItem(INFINITY_BOOTS, 1)),
    new Variation(new CountableItem(PEGASIAN_CRYSTAL, 1), new CountableItem(RANGER_BOOTS, 1))
]);

const voidwaker = new Tile('Complete Voidwaker', 'https://oldschool.runescape.wiki/images/thumb/Voidwaker_detail.png/150px-Voidwaker_detail.png?01835', [
    new Variation(new CountableItem(VOIDWAKER_HILT), new CountableItem(VOIDWAKER_GEM), new CountableItem(VOIDWAKER_BLADE))
]);

const justiciar = new Tile('Full Justiciar', 'https://oldschool.runescape.wiki/images/thumb/Justiciar_armour_equipped_male.png/130px-Justiciar_armour_equipped_male.png?17b57', [
    new Variation(new CountableItem(JUSTICIAR_FACEGUARD), new CountableItem(JUSTICIAR_CHESTGUARD), new CountableItem(JUSTICIAR_LEGGUARDS))
]);

const masori = new Tile('Full Masori', 'https://oldschool.runescape.wiki/images/thumb/Masori_armour_equipped_female.png/120px-Masori_armour_equipped_female.png?d7d2c', [
    new Variation(new CountableItem(MASORI_MASK), new CountableItem(MASORI_BODY), new CountableItem(MASORI_CHAPS))
]);

const torva = new Tile('Full Torva', 'https://oldschool.runescape.wiki/images/thumb/Torva_armour_equipped_male.png/130px-Torva_armour_equipped_male.png?a8f29', [
    new Variation(new CountableItem(TORVA_FULL_HELM), new CountableItem(TORVA_PLATEBODY), new CountableItem(TORVA_PLATELEGS))
]);

const wildernessRings = new Tile('Wilderness Rings', 'https://oldschool.runescape.wiki/images/thumb/Treasonous_ring_detail.png/200px-Treasonous_ring_detail.png?859ba', [
    new Variation(new CountableItem(RING_OF_THE_GODS), new CountableItem(TREASONOUS_RING), new CountableItem(TYRANNICAL_RING))
]);

const wildernessShield = new Tile('Wilderness Shield', 'https://oldschool.runescape.wiki/images/thumb/Malediction_ward_detail.png/130px-Malediction_ward_detail.png?c708e', [
    new Variation(new CountableItem(MALEDICATION_SHARD_1), new CountableItem(MALEDICATION_SHARD_2), new CountableItem(MALEDICATION_SHARD_3)),
    new Variation(new CountableItem(ODIUM_SHARD_1), new CountableItem(ODIUM_SHARD_2), new CountableItem(ODIUM_SHARD_3)),
]);

const ancestral = new Tile('Full Ancestral', 'https://oldschool.runescape.wiki/images/thumb/Ancestral_robes_equipped_male.png/100px-Ancestral_robes_equipped_male.png?86902', [
    new Variation(new CountableItem(ANCESTRAL_HAT), new CountableItem(ANCESTRAL_ROBE_TOP), new CountableItem(ANCESTRAL_ROBE_BOTTOM))
]);

const megarare = new Tile('Any Megarare', 'https://oldschool.runescape.wiki/images/thumb/Tumeken%27s_shadow_%28uncharged%29_detail.png/180px-Tumeken%27s_shadow_%28uncharged%29_detail.png?24f11', [
    new Variation(new CountableItem(TUMEKENS_SHADOW)),
    new Variation(new CountableItem(TWISTED_BOW)),
    new Variation(new CountableItem(SCYTHE_OF_VITUR))
]);

const dt2ring = new Tile('DT2 Ring from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Magus_ring_detail.png/150px-Magus_ring_detail.png?7d63e', [
    new Variation(new CountableItem(ULTOR_VESTIGE), new CountableItem(BERSERKER_RING), new CountableItem(CHROMIUM_INGOT, 3)),
    new Variation(new CountableItem(BELLATOR_VESTIGE), new CountableItem(WARRIOR_RING), new CountableItem(CHROMIUM_INGOT, 3)),
    new Variation(new CountableItem(MAGUS_VESTIGE), new CountableItem(SEERS_RING), new CountableItem(CHROMIUM_INGOT, 3)),
    new Variation(new CountableItem(VENATOR_VESTIGE), new CountableItem(ARCHERS_RING), new CountableItem(CHROMIUM_INGOT, 3)),
]);

const godsword = new Tile('Godsword From Scratch', 'https://oldschool.runescape.wiki/images/thumb/Zamorak_godsword_detail.png/140px-Zamorak_godsword_detail.png?f52af', [
    new Variation(new CountableItem(ARMADYL_HILT), new CountableItem(GOLDEN_ARMADYL_SPECIAL), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(BANDOS_HILT), new CountableItem(GOLDEN_BANDOS_SPECIAL), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(SARADOMIN_HILT), new CountableItem(GOLDEN_SARADOMIN_SPECIAL), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(ZAMORAK_HILT), new CountableItem(GOLDEN_ZAMORAK_SPECIAL), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3))
]);

const wildernessWeapon = new Tile('Wilderness Weapon from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Ursine_chainmace_detail.png/170px-Ursine_chainmace_detail.png?115b4', [
    new Variation(new CountableItem(CRAWS_BOW), new CountableItem(FANGS_OF_VENENATIS)),
    new Variation(new CountableItem(THAMMARONS_SCEPTRE), new CountableItem(SKULL_OF_VETION)),
    new Variation(new CountableItem(VIGGORAS_CHAINMACE), new CountableItem(CLAWS_OF_CALLISTO)),
]);

const crystal = new Tile('Full Crystal', 'https://oldschool.runescape.wiki/images/thumb/Crystal_armour_equipped_male.png/101px-Crystal_armour_equipped_male.png?dcf7b', [
    new Variation(new CountableItem(CRYSTAL_ARMOUR_SEED, 6)),
    new Variation(new CountableItem(ENHANCED_WEAPON_SEED, 2))
]);

const barrows = new Tile('Full Barrows', 'https://oldschool.runescape.wiki/images/thumb/Dharok%27s_armour_equipped_male.png/150px-Dharok%27s_armour_equipped_male.png?3d05c', [
    new Variation(new CountableItem(GUTHANS_WARSPEAR), new CountableItem(GUTHANS_HELM), new CountableItem(GUTHANS_PLATEBODY), new CountableItem(GUTHANS_CHAINSKIRT)),
    new Variation(new CountableItem(VERACS_FLAIL), new CountableItem(VERACS_HELM), new CountableItem(VERACS_BRASSARD), new CountableItem(VERACS_PLATESKIRT)),
    new Variation(new CountableItem(TORAGS_HAMMERS), new CountableItem(TORAGS_HELMET), new CountableItem(TORAGS_PLATEBODY), new CountableItem(TORAGS_PLATELEGS)),
    new Variation(new CountableItem(DHAROKS_GREATAXE), new CountableItem(DHAROKS_HELM), new CountableItem(DHAROKS_PLATEBODY), new CountableItem(DHAROKS_PLATELEGS)),
    new Variation(new CountableItem(KARILS_CROSSBOW), new CountableItem(KARILS_COIF), new CountableItem(KARILS_LEATHERTOP), new CountableItem(KARILS_LEATHERSKIRT)),
    new Variation(new CountableItem(AHRIMS_STAFF), new CountableItem(AHRIMS_HOOD), new CountableItem(AHRIMS_ROBETOP), new CountableItem(AHRIMS_ROBE_SKIRT)),
]);

const ballista = new Tile('Ballisa from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Heavy_ballista_detail.png/200px-Heavy_ballista_detail.png?04867', [
    new Variation(new CountableItem(BALLISTA_SPRING), new CountableItem(BALLISTA_LIMBS), new CountableItem(MONKEY_TAIL), new CountableItem(HEAVY_FRAME)),
    new Variation(new CountableItem(BALLISTA_SPRING), new CountableItem(BALLISTA_LIMBS), new CountableItem(MONKEY_TAIL), new CountableItem(LIGHT_FRAME))
]);

const minigamePet = new Tile('Minigame Pet', 'https://oldschool.runescape.wiki/images/thumb/Penance_Pet.png/290px-Penance_Pet.png?56343', [
    new Variation(new CountableItem(PET_PENANCE_QUEEN)),
    new Variation(new CountableItem(SMOLCANO)),
    new Variation(new CountableItem(TINY_TEMPOR)),
    new Variation(new CountableItem(PHOENIX)),
    new Variation(new CountableItem(LIL_CREATOR)),
    new Variation(new CountableItem(ABYSSAL_PROTECTOR)),
]);

const spiritShield = new Tile('Spirit Shield from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Elysian_spirit_shield_detail.png/120px-Elysian_spirit_shield_detail.png?e83cd', [
    new Variation(new CountableItem(ELYSIAN_SIGIL), new CountableItem(SPIRIT_SHIELD), new CountableItem(HOLY_ELIXER)),
    new Variation(new CountableItem(ARCANE_SIGIL), new CountableItem(SPIRIT_SHIELD), new CountableItem(HOLY_ELIXER)),
    new Variation(new CountableItem(SPECTRAL_SIGIL), new CountableItem(SPIRIT_SHIELD), new CountableItem(HOLY_ELIXER))
]);

const venatorBow = new Tile('Venator Bow', 'https://oldschool.runescape.wiki/images/thumb/Venator_bow_detail.png/130px-Venator_bow_detail.png?6167b', [
    new Variation(new CountableItem(VENATOR_SHARD, 5))
]);

const zulrah = new Tile('Zulrah', 'https://oldschool.runescape.wiki/images/thumb/Zulrah_%28serpentine%29.png/250px-Zulrah_%28serpentine%29.png?29a54', [
    new Variation(new CountableItem(TANZANITE_FANG), new CountableItem(MAGIC_FANG), new CountableItem(SERPENTINE_VISAGE)),
    new Variation(new CountableItem(TANZANITE_MUTAGEN), new CountableItem(MAGMA_MUTAGEN))
]);

const goldenTench = new Tile('Golden Tench', 'https://oldschool.runescape.wiki/images/thumb/Golden_tench_detail.png/130px-Golden_tench_detail.png?27700', [
    new Variation(new CountableItem(GOLDEN_TENCH)),
    new Variation(new CountableItem(PEARL_FISHING_ROD), new CountableItem(PEARL_FLY_FISHING_ROD), new CountableItem(PEARL_BARBARIAN_ROD))
]);

const dragonTools = new Tile('Dragon Tools', 'https://oldschool.runescape.wiki/images/thumb/Dragon_pickaxe_detail.png/130px-Dragon_pickaxe_detail.png?4f4ee', [
    new Variation(new CountableItem(DRAGON_PICKAXE), new CountableItem(DRAGON_HARPOON), new CountableItem(DRAGON_AXE)),
    new Variation(new CountableItem(DRAGON_PICKAXE_BROKEN), new CountableItem(DRAGON_HARPOON), new CountableItem(DRAGON_AXE)),
]);

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
]);

const kits = new Tile('Sweat Kits', 'https://oldschool.runescape.wiki/images/thumb/Sanguine_ornament_kit_detail.png/120px-Sanguine_ornament_kit_detail.png?939b9', [
    new Variation(new CountableItem(TWISTED_ORNAMENT_KIT), new CountableItem(MASORI_CRAFTING_KIT), new CountableItem(SANGUINE_ORNAMENT_KIT)),
    new Variation(new CountableItem(TWISTED_ORNAMENT_KIT), new CountableItem(MASORI_CRAFTING_KIT), new CountableItem(HOLY_ORNAMENT_KIT))
]);

const visage = new Tile('Any Visage', 'https://oldschool.runescape.wiki/images/thumb/Draconic_visage_detail.png/130px-Draconic_visage_detail.png?6edab', [
    new Variation(new CountableItem(DRACONIC_VISAGE)),
    new Variation(new CountableItem(SKELETAL_VISAGE)),
    new Variation(new CountableItem(WYVERN_VISAGE)),
]);

const bludgeon = new Tile('Complete Bludgeon', 'https://oldschool.runescape.wiki/images/thumb/Abyssal_bludgeon_detail.png/130px-Abyssal_bludgeon_detail.png?dd634', [
    new Variation(new CountableItem(BLUDGEON_SPINE), new CountableItem(BLUDGEON_CLAW), new CountableItem(BLUDGEON_AXON))
]);

export const rows = [
    [crystal, wildernessRings, goldenTench, wildernessShield, kits],
    [barrows, justiciar, godsword, spiritShield, jar],
    [wildernessWeapon, dt2ring, masori, venatorBow, dragonTools],
    [megarare, visage, voidwaker, ancestral, ballista],
    [minigamePet, zulrah, cerberus, bludgeon, torva]
];
