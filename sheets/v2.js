import {Tile} from '../helpers/Tile.js';
import {Variation} from '../helpers/Variation.js';
import {CountableItem} from '../helpers/CountableItem.js';
import {
    JAR_OF_CHEMICALS,
    JAR_OF_DARKNESS,
    JAR_OF_DECAY,
    JAR_OF_DIRT,
    JAR_OF_DREAMS,
    JAR_OF_EYES,
    JAR_OF_MIASMA,
    JAR_OF_SAND, JAR_OF_SMOKE, JAR_OF_SOULS, JAR_OF_SPIRITS, JAR_OF_STONE, JAR_OF_SWAMP,
    SCYTHE_OF_VITUR,
    TUMEKENS_SHADOW,
    TWISTED_BOW,
    VOIDWAKER_BLADE,
    VOIDWAKER_GEM,
    VOIDWAKER_HILT
} from '../helpers/Items.js';

const toa = new Tile('Tombs of Amascut', 'https://oldschool.runescape.wiki/images/thumb/Tombs_of_Amascut.png/1920px-Tombs_of_Amascut.png', []);
const tob = new Tile('Theatre of Blood', 'https://oldschool.runescape.wiki/images/Theatre_of_Blood_logo.png', []);
const cox = new Tile('Chambers of Xeric', 'https://oldschool.runescape.wiki/images/Chambers_of_Xeric_logo.png', []);
const nex = new Tile('Nex', 'https://oldschool.runescape.wiki/images/thumb/Nex.png/1280px-Nex.png', []);
const nightmare = new Tile('The Nightmare of Ashihama', 'https://oldschool.runescape.wiki/images/The_Nightmare.png', []);
const muspah = new Tile('Phantom Muspah', 'https://oldschool.runescape.wiki/images/thumb/Phantom_Muspah_%28ranged%29.png/1280px-Phantom_Muspah_%28ranged%29.png', []);
const graardor = new Tile('General Graardor', 'https://oldschool.runescape.wiki/images/General_Graardor.png', []);
const tsutsaroth = new Tile('K\'ril Tsutsaroth', 'https://oldschool.runescape.wiki/images/thumb/K%27ril_Tsutsaroth.png/1280px-K%27ril_Tsutsaroth.png', []);
const zilyana = new Tile('Commander Zilyana', 'https://oldschool.runescape.wiki/images/Commander_Zilyana.png', []);
const kree = new Tile('Kree\'arra', 'https://oldschool.runescape.wiki/images/thumb/Kree%27arra.png/280px-Kree%27arra.png', []);
const megarare = new Tile('Raid Megarare', 'https://oldschool.runescape.wiki/images/Coins_detail.png', [
    new Variation(new CountableItem(TUMEKENS_SHADOW)),
    new Variation(new CountableItem(TWISTED_BOW)),
    new Variation(new CountableItem(SCYTHE_OF_VITUR))
]);
const gauntlet = new Tile('The Gauntlet', 'https://oldschool.runescape.wiki/images/Crystalline_Hunllef.png', []);
const biscape = new Tile('BiS Cape', 'https://oldschool.runescape.wiki/images/thumb/Dizana%27s_quiver_%28uncharged%29_detail.png/1280px-Dizana%27s_quiver_%28uncharged%29_detail.png', []);
const voidwaker = new Tile('Complete Voidwaker', 'https://oldschool.runescape.wiki/images/thumb/Voidwaker_detail.png/1280px-Voidwaker_detail.png', [
    new Variation(new CountableItem(VOIDWAKER_HILT), new CountableItem(VOIDWAKER_GEM), new CountableItem(VOIDWAKER_BLADE))
]);
const moonsofperil = new Tile('Moons of Peril', 'https://oldschool.runescape.wiki/images/Eyatlalli.png', []);
const pet = new Tile('Any Pet', 'https://oldschool.runescape.wiki/images/Bob_the_Jagex_cat.png', []);
const dhideboots = new Tile('Blessed Boots', 'https://oldschool.runescape.wiki/images/Zamorak_d%27hide_boots_detail.png', []);
const dks = new Tile('Dagannoth Kings', 'https://oldschool.runescape.wiki/images/thumb/Dagannoth_Prime.png/1024px-Dagannoth_Prime.png', []);
const zalcano = new Tile('Zalcano', 'https://oldschool.runescape.wiki/images/thumb/Zalcano.png/800px-Zalcano.png', []);
const dt2 = new Tile('Desert Treasure II', 'https://oldschool.runescape.wiki/images/thumb/Desert_Treasure_II_logo.png/1920px-Desert_Treasure_II_logo.png', []);
const q4 = new Tile('', '', []);
const barrows = new Tile('Barrows', 'https://oldschool.runescape.wiki/images/Strange_Old_Man.png', []);
const q5 = new Tile('', '', []);
const corp = new Tile('Corporeal Beast', 'https://oldschool.runescape.wiki/images/thumb/Corporeal_Beast.png/1280px-Corporeal_Beast.png', []);
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
    [cox, tob, toa, muspah, megarare],
    [nex, graardor, tsutsaroth, zilyana, kree],
    [nightmare, gauntlet, biscape, voidwaker, moonsofperil],
    [pet, dhideboots, dks, zalcano, dt2],
    [q4, barrows, q5, corp, jar]
];
