import {Tile} from "../helpers/Tile.js";
import {CappedVariation, Variation} from "../helpers/Variation.js";
import {CountableItem} from "../helpers/CountableItem.js";
import {
    AHRIMS_HOOD,
    AHRIMS_ROBE_SKIRT,
    AHRIMS_ROBETOP,
    AHRIMS_STAFF,
    DHAROKS_GREATAXE,
    DHAROKS_HELM,
    DHAROKS_PLATEBODY,
    DHAROKS_PLATELEGS,
    GUTHANS_CHAINSKIRT,
    GUTHANS_HELM,
    GUTHANS_PLATEBODY,
    GUTHANS_WARSPEAR,
    KARILS_COIF,
    KARILS_CROSSBOW,
    KARILS_LEATHERSKIRT,
    KARILS_LEATHERTOP,
    TORAGS_HAMMERS,
    TORAGS_HELMET,
    TORAGS_PLATEBODY,
    TORAGS_PLATELEGS,
    VERACS_BRASSARD,
    VERACS_FLAIL,
    VERACS_HELM,
    VERACS_PLATESKIRT,
    TOME_OF_EARTH,
    TOME_OF_FIRE,
    TOME_OF_WATER,
    SARACHNIS_CUDGEL,
    BLOOD_MOON_HELM,
    BLOOD_MOON_CHESTPLATE,
    BLOOD_MOON_TASSETS,
    DUAL_MACUAHUITL,
   BLUE_MOON_HELM,
    BLUE_MOON_CHESTPLATE,
     BLUE_MOON_TASSETS,
   BLUE_MOON_SPEAR,
   ECLIPSE_MOON_HELM,
    ECLIPSE_MOON_CHESTPLATE,
    ECLIPSE_MOON_TASSETS,
  ECLIPSE_ATLATL,
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
  ICE_ELEMENT_STAFF_CROWN,
  FIRE_ELEMENT_STAFF_CROWN,
  DRAGON_WARHAMMER,
  RANGER_BOOTS,
  IMP_CHAMPION_SCROLL,
  GOBLIN_CHAMPION_SCROLL,
  SKELETON_CHAMPION_SCROLL,
  ZOMBIE_CHAMPION_SCROLL,
  GIANT_CHAMPION_SCROLL,
  HOBGOBLIN_CHAMPION_SCROLL,
  GHOUL_CHAMPION_SCROLL,
  EARTH_WARRIOR_CHAMPION_SCROLL,
  JOGRE_CHAMPION_SCROLL,
  LESSER_DEMON_CHAMPION_SCROLL,
  ARCANE_SIGIL,
  ELYSIAN_SIGIL,
  SPECTRAL_SIGIL,
  ZENYTE_SHARD,
  VENATOR_SHARD,
  MAGMA_MUTAGEN,
  TANZANITE_MUTAGEN,
  MAGIC_FANG,
  SERPENTINE_VISAGE,
  TANZANITE_FANG,
  PET_SNAKELING,
  TORMENTED_SYNAPSE,
  BURNING_CLAW,
  GODSWORD_SHARD_1,
  GODSWORD_SHARD_2,
  GODSWORD_SHARD_3,
  ARMADYL_HILT,
  ANCIENT_HILT,
  BANDOS_HILT,
  ZAMORAK_HILT,
  SARADOMIN_HILT,
  AVERNIC_TREADS,
  EYE_OF_AYAK,
  MOKHAIOTL_CLOTH,
  DOM,
  OATHPLATE_HELM,
  OATHPLATE_CHEST,
  OATHPLATE_LEGS,
  SUNFIRE_FANATIC_HELM,
  SUNFIRE_FANATIC_CUIRASS,
  SUNFIRE_FANATIC_CHAUSSES,
  ENHANCED_WEAPON_SEED,
  CRYSTAL_ARMOUR_SEED,
  VOIDWAKER_BLADE,
  VOIDWAKER_HILT,
  VOIDWAKER_GEM,
  NEXLING,
  TORVA_FULL_HELM,
  TORVA_PLATEBODY,
  TORVA_PLATELEGS,
  ZARYTE_VAMBRACES,
  NIHIL_HORN,
  LITTLE_NIGHTMARE,
  INQUISITORS_GREAT_HELM,
  INQUISITORS_HAUBERK,
  INQUISITORS_PLATESKIRT,
  INQUISITORS_MACE,
  NIGHTMARE_STAFF,
  ELDRITCH_ORB,
  HARMONISED_ORB,
  VOLATILE_ORB,
  PARASITIC_EGG,
      VIRTUS_MASK,
      VIRTUS_ROBE_BOTTOM,
      VIRTUS_ROBE_TOP,
      BELLATOR_VESTIGE,
      MAGUS_VESTIGE,
      ULTOR_VESTIGE,
      VENATOR_VESTIGE,
      LEVIATHANS_LURE,
      SIRENS_STAFF,
      EYE_OF_THE_DUKE,
      EXECUTIONERS_AXE_HEAD,
      BARON,
      LIL_VIATHAN,
      WISP,
      BUTCH,
      MASORI_BODY,
      MASORI_CHAPS,
      MASORI_MASK,
      ELIDINIS_WARD,
      TUMEKENS_SHADOW,
      TUMEKENS_GUARDIAN,
      TWISTED_BOW,
      TWISTED_BUCKLER,
      DRAGON_HUNTER_CROSSBOW,
      DINHS_BULWARK,
      ANCESTRAL_HAT,
      ANCESTRAL_ROBE_BOTTOM,
      ANCESTRAL_ROBE_TOP,
      DRAGON_CLAWS,
      KODAI_INSIGNIA,
      ELDER_MAUL,
      OLMLET
} from "../helpers/Items.js";
import {Item} from "../helpers/Item.js";

const barrows = new Tile('Barrows Set', 'https://oldschool.runescape.wiki/images/thumb/Dharok%27s_armour_equipped_male.png/150px-Dharok%27s_armour_equipped_male.png?3d05c', [
    new Variation(new CountableItem(GUTHANS_WARSPEAR), new CountableItem(GUTHANS_HELM), new CountableItem(GUTHANS_PLATEBODY), new CountableItem(GUTHANS_CHAINSKIRT)),
    new Variation(new CountableItem(VERACS_FLAIL), new CountableItem(VERACS_HELM), new CountableItem(VERACS_BRASSARD), new CountableItem(VERACS_PLATESKIRT)),
    new Variation(new CountableItem(TORAGS_HAMMERS), new CountableItem(TORAGS_HELMET), new CountableItem(TORAGS_PLATEBODY), new CountableItem(TORAGS_PLATELEGS)),
    new Variation(new CountableItem(DHAROKS_GREATAXE), new CountableItem(DHAROKS_HELM), new CountableItem(DHAROKS_PLATEBODY), new CountableItem(DHAROKS_PLATELEGS)),
    new Variation(new CountableItem(KARILS_CROSSBOW), new CountableItem(KARILS_COIF), new CountableItem(KARILS_LEATHERTOP), new CountableItem(KARILS_LEATHERSKIRT)),
    new Variation(new CountableItem(AHRIMS_STAFF), new CountableItem(AHRIMS_HOOD), new CountableItem(AHRIMS_ROBETOP), new CountableItem(AHRIMS_ROBE_SKIRT)),
]);

const twinflame = new Tile('Twinflame Staff', 'https://oldschool.runescape.wiki/images/thumb/Twinflame_staff_detail.png/130px-Twinflame_staff_detail.png?e1e78', [
    new Variation(new CountableItem(ICE_ELEMENT_STAFF_CROWN), new CountableItem(FIRE_ELEMENT_STAFF_CROWN))
]);

const tome = new Tile('Any Tome', 'https://oldschool.runescape.wiki/images/thumb/Tome_of_earth_detail.png/160px-Tome_of_earth_detail.png?175ef', [
    new Variation(new CountableItem(TOME_OF_EARTH)),
    new Variation(new CountableItem(TOME_OF_FIRE)),
    new Variation(new CountableItem(TOME_OF_WATER))
]);

const cudgel = new Tile('Sarachnis Cudgel', 'https://oldschool.runescape.wiki/images/thumb/Sarachnis_cudgel_detail.png/150px-Sarachnis_cudgel_detail.png?f9ce8', [
    new Variation(new CountableItem(SARACHNIS_CUDGEL))
]);

const moonsofperil = new Tile('Moons of Peril', 'https://oldschool.runescape.wiki/images/thumb/Blood_Moon.png/140px-Blood_Moon.png?c3e72', [
    new Variation(new CountableItem(BLOOD_MOON_HELM), new CountableItem(BLOOD_MOON_CHESTPLATE), new CountableItem(BLOOD_MOON_TASSETS), new CountableItem(DUAL_MACUAHUITL)),
    new Variation(new CountableItem(BLUE_MOON_HELM), new CountableItem(BLUE_MOON_CHESTPLATE), new CountableItem(BLUE_MOON_TASSETS), new CountableItem(BLUE_MOON_SPEAR)),
    new Variation(new CountableItem(ECLIPSE_MOON_HELM), new CountableItem(ECLIPSE_MOON_CHESTPLATE), new CountableItem(ECLIPSE_MOON_TASSETS), new CountableItem(ECLIPSE_ATLATL))
]);

const jar = new Tile('Any Jar', 'https://oldschool.runescape.wiki/images/thumb/Jar_of_chemicals_detail.png/90px-Jar_of_chemicals_detail.png?7bdc6', [
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
    new Variation(new CountableItem(JAR_OF_VENOM)),
    new Variation(new CountableItem(JAR_OF_SWAMP))
]);

const dwh = new Tile('Dragon Warhammer', 'https://oldschool.runescape.wiki/images/thumb/Dragon_warhammer_detail.png/120px-Dragon_warhammer_detail.png?7f65a', [
    new Variation(new CountableItem(DRAGON_WARHAMMER))
]);

const rangers = new Tile('Ranger Boots', 'https://oldschool.runescape.wiki/images/thumb/Ranger_boots_detail.png/140px-Ranger_boots_detail.png?e421a', [
    new Variation(new CountableItem(RANGER_BOOTS))
]);

const champion = new Tile('Any Champion\'s Scroll', 'https://oldschool.runescape.wiki/images/thumb/Leon%27s_champion_scroll_detail.png/130px-Leon%27s_champion_scroll_detail.png?9b7ca', [
    new Variation(new CountableItem(IMP_CHAMPION_SCROLL)),
    new Variation(new CountableItem(GOBLIN_CHAMPION_SCROLL)),
    new Variation(new CountableItem(SKELETON_CHAMPION_SCROLL)),
    new Variation(new CountableItem(ZOMBIE_CHAMPION_SCROLL)),
    new Variation(new CountableItem(GIANT_CHAMPION_SCROLL)),
    new Variation(new CountableItem(HOBGOBLIN_CHAMPION_SCROLL)),
    new Variation(new CountableItem(GHOUL_CHAMPION_SCROLL)),
    new Variation(new CountableItem(EARTH_WARRIOR_CHAMPION_SCROLL)),
    new Variation(new CountableItem(JOGRE_CHAMPION_SCROLL)),
    new Variation(new CountableItem(LESSER_DEMON_CHAMPION_SCROLL))
]);

const sigil = new Tile('Any Sigil', 'https://oldschool.runescape.wiki/images/thumb/Corporeal_Beast.png/270px-Corporeal_Beast.png?52ebb', [
    new Variation(new CountableItem(ARCANE_SIGIL)),
    new Variation(new CountableItem(ELYSIAN_SIGIL)),
    new Variation(new CountableItem(SPECTRAL_SIGIL))
]);

const zenyte = new Tile('4 Zenyte Shards', 'https://oldschool.runescape.wiki/images/thumb/Zenyte_shard_detail.png/80px-Zenyte_shard_detail.png?c5a63', [
    new Variation(new CountableItem(ZENYTE_SHARD, 4))
]);

const venatorBow = new Tile('Venator Bow from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Venator_bow_detail.png/130px-Venator_bow_detail.png?624b1', [
    new Variation(new CountableItem(VENATOR_SHARD, 5))
]);

const zulrah = new Tile('Zulrah', 'https://oldschool.runescape.wiki/images/thumb/Zulrah_%28serpentine%29.png/250px-Zulrah_%28serpentine%29.png?29a54', [
    new CappedVariation(3, new CountableItem(PET_SNAKELING), new CountableItem(TANZANITE_MUTAGEN), new CountableItem(MAGMA_MUTAGEN), new CountableItem(MAGIC_FANG), new CountableItem(TANZANITE_FANG), new CountableItem(SERPENTINE_VISAGE))
]);

const tds = new Tile('Tormented Demons', 'https://oldschool.runescape.wiki/images/thumb/Tormented_Demon_%281%29.png/200px-Tormented_Demon_%281%29.png?6c099', [
    new CappedVariation(2, new CountableItem(BURNING_CLAW), new CountableItem(TORMENTED_SYNAPSE))
]);

const godsword = new Tile('Godsword from Scratch', 'https://oldschool.runescape.wiki/images/thumb/Ancient_godsword_detail.png/130px-Ancient_godsword_detail.png?87a43', [
    new Variation(new CountableItem(ARMADYL_HILT), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(BANDOS_HILT), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(SARADOMIN_HILT), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(ZAMORAK_HILT), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3)),
    new Variation(new CountableItem(ANCIENT_HILT), new CountableItem(GODSWORD_SHARD_1), new CountableItem(GODSWORD_SHARD_2), new CountableItem(GODSWORD_SHARD_3))
]);

const doom = new Tile('Doom of Mokhaiotl', 'https://oldschool.runescape.wiki/images/thumb/Doom_of_Mokhaiotl.png/277px-Doom_of_Mokhaiotl.png?e5edb', [
    new Variation(new CountableItem(DOM)),
    new Variation(new CountableItem(MOKHAIOTL_CLOTH)),
    new Variation(new CountableItem(EYE_OF_AYAK)),
    new Variation(new CountableItem(AVERNIC_TREADS)),
]);

const oathplate = new Tile('Any Oathplate Piece', 'https://oldschool.runescape.wiki/images/thumb/Oathplate_chest_detail.png/150px-Oathplate_chest_detail.png?0b1a0', [
    new Variation(new CountableItem(OATHPLATE_HELM)),
    new Variation(new CountableItem(OATHPLATE_CHEST)),
    new Variation(new CountableItem(OATHPLATE_LEGS)),
]);

const sunfire = new Tile('Any Sunfire Fanatic Piece', 'https://oldschool.runescape.wiki/images/thumb/Sunfire_fanatic_cuirass_detail.png/150px-Sunfire_fanatic_cuirass_detail.png?b8ba8', [
    new Variation(new CountableItem(SUNFIRE_FANATIC_HELM)),
    new Variation(new CountableItem(SUNFIRE_FANATIC_CUIRASS)),
    new Variation(new CountableItem(SUNFIRE_FANATIC_CHAUSSES)),
]);

const gauntlet = new Tile('The Gauntlet', 'https://oldschool.runescape.wiki/images/thumb/Crystalline_Hunllef.png/280px-Crystalline_Hunllef.png?7737a', [
    new Variation(new CountableItem(ENHANCED_WEAPON_SEED)),
    new Variation(new CountableItem(CRYSTAL_ARMOUR_SEED, 5)),
]);

const voidwaker = new Tile('Any Voidwaker Piece', 'https://oldschool.runescape.wiki/images/thumb/Voidwaker_detail.png/150px-Voidwaker_detail.png?01835', [
    new Variation(new CountableItem(VOIDWAKER_BLADE)),
    new Variation(new CountableItem(VOIDWAKER_GEM)),
    new Variation(new CountableItem(VOIDWAKER_HILT)),
]);

const cox = new Tile('Chambers of Xeric', 'https://oldschool.runescape.wiki/images/thumb/Great_Olm.png/300px-Great_Olm.png?f1081', [
    new Variation(new CountableItem(OLMLET)),
    new Variation(new CountableItem(TWISTED_BOW)),
    new Variation(new CountableItem(ELDER_MAUL)),
    new Variation(new CountableItem(KODAI_INSIGNIA)),
    new Variation(new CountableItem(ANCESTRAL_HAT)),
    new Variation(new CountableItem(ANCESTRAL_ROBE_TOP)),
    new Variation(new CountableItem(ANCESTRAL_ROBE_BOTTOM)),
    new Variation(new CountableItem(TWISTED_BUCKLER)),
    new Variation(new CountableItem(DRAGON_HUNTER_CROSSBOW)),
    new Variation(new CountableItem(DINHS_BULWARK)),
    new Variation(new CountableItem(DRAGON_CLAWS)),
]);

const toa = new Tile('Tombs of Amascut', 'https://oldschool.runescape.wiki/images/thumb/Tumeken%27s_Guardian_%28follower%29.png/250px-Tumeken%27s_Guardian_%28follower%29.png?7583d', [
    new Variation(new CountableItem(TUMEKENS_GUARDIAN)),
    new Variation(new CountableItem(TUMEKENS_SHADOW)),
    new Variation(new CountableItem(MASORI_MASK)),
    new Variation(new CountableItem(MASORI_BODY)),
    new Variation(new CountableItem(MASORI_CHAPS)),
    new Variation(new CountableItem(ELIDINIS_WARD)),
]);

const dt2 = new Tile('Desert Treasure II', 'https://oldschool.runescape.wiki/images/thumb/Soulreaper_axe_detail.png/150px-Soulreaper_axe_detail.png?27b3b', [
    new Variation(new CountableItem(VIRTUS_MASK)),
    new Variation(new CountableItem(VIRTUS_ROBE_BOTTOM)),
    new Variation(new CountableItem(VIRTUS_ROBE_TOP)),
    new Variation(new CountableItem(BELLATOR_VESTIGE)),
    new Variation(new CountableItem(MAGUS_VESTIGE)),
    new Variation(new CountableItem(ULTOR_VESTIGE)),
    new Variation(new CountableItem(VENATOR_VESTIGE)),
    new Variation(new CountableItem(LEVIATHANS_LURE)),
    new Variation(new CountableItem(SIRENS_STAFF)),
    new Variation(new CountableItem(EYE_OF_THE_DUKE)),
    new Variation(new CountableItem(BARON)),
    new Variation(new CountableItem(LIL_VIATHAN)),
    new Variation(new CountableItem(WISP)),
    new Variation(new CountableItem(BUTCH)),
]);

const nightmare = new Tile('Nightmare', 'https://oldschool.runescape.wiki/images/thumb/The_Nightmare.png/250px-The_Nightmare.png?0128a', [
    new Variation(new CountableItem(LITTLE_NIGHTMARE)),
    new Variation(new CountableItem(JAR_OF_DREAMS)),
    new Variation(new CountableItem(PARASITIC_EGG)),
    new Variation(new CountableItem(INQUISITORS_GREAT_HELM)),
    new Variation(new CountableItem(INQUISITORS_HAUBERK)),
    new Variation(new CountableItem(INQUISITORS_PLATESKIRT)),
    new Variation(new CountableItem(INQUISITORS_MACE)),
    new Variation(new CountableItem(NIGHTMARE_STAFF)),
    new Variation(new CountableItem(ELDRITCH_ORB)),
    new Variation(new CountableItem(HARMONISED_ORB)),
    new Variation(new CountableItem(VOLATILE_ORB))
]);

const nex = new Tile('Nex', 'https://oldschool.runescape.wiki/images/thumb/Nex.png/270px-Nex.png?2a1b3', [
    new Variation(new CountableItem(NEXLING)),
    new Variation(new CountableItem(NIHIL_HORN)),
    new Variation(new CountableItem(ANCIENT_HILT)),
    new Variation(new CountableItem(ZARYTE_VAMBRACES)),
    new Variation(new CountableItem(TORVA_FULL_HELM)),
    new Variation(new CountableItem(TORVA_PLATEBODY)),
    new Variation(new CountableItem(TORVA_PLATELEGS))
]);

export const rows = [
    [barrows, twinflame, tome, cudgel, moonsofperil],
    [jar, dwh, rangers, champion, sigil],
    [zenyte, venatorBow, zulrah, tds, godsword],
    [doom, oathplate, sunfire, gauntlet, voidwaker],
    [cox, toa, dt2, nightmare, nex]
];
