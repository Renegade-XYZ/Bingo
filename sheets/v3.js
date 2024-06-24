import {Tile} from '../helpers/Tile.js';
import {Variation} from '../helpers/Variation.js';
import {CountableItem} from '../helpers/CountableItem.js';
import {
    AHRIMS_HOOD,
    AHRIMS_ROBE_SKIRT,
    AHRIMS_ROBETOP,
    AHRIMS_STAFF, BOLT_RACK,
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
    VERACS_PLATESKIRT
} from '../helpers/Items.js';


const guthansWarspear = new Tile(GUTHANS_WARSPEAR, 'https://oldschool.runescape.wiki/images/thumb/Guthan%27s_warspear_detail.png/1280px-Guthan%27s_warspear_detail.png', [
    new Variation(new CountableItem(GUTHANS_WARSPEAR))
]);

const guthansHelm = new Tile(GUTHANS_HELM, 'https://oldschool.runescape.wiki/images/Guthan%27s_helm_detail.png', [
    new Variation(new CountableItem(GUTHANS_HELM))
]);

const guthansPlatebody = new Tile(GUTHANS_PLATEBODY, 'https://oldschool.runescape.wiki/images/Guthan%27s_platebody_detail.png', [
    new Variation(new CountableItem(GUTHANS_PLATEBODY))
]);

const guthansChainskirt = new Tile(GUTHANS_CHAINSKIRT, 'https://oldschool.runescape.wiki/images/Guthan%27s_chainskirt_detail.png', [
    new Variation(new CountableItem(GUTHANS_CHAINSKIRT))
]);

const veracsFlail = new Tile(VERACS_FLAIL, 'https://oldschool.runescape.wiki/images/thumb/Verac%27s_flail_detail.png/1024px-Verac%27s_flail_detail.png', [
    new Variation(new CountableItem(VERACS_FLAIL))
]);

const veracsHelm = new Tile(VERACS_HELM, 'https://oldschool.runescape.wiki/images/thumb/Verac%27s_helm_detail.png/1024px-Verac%27s_helm_detail.png', [
    new Variation(new CountableItem(VERACS_HELM))
]);

const veracsBrassard = new Tile(VERACS_BRASSARD, 'https://oldschool.runescape.wiki/images/thumb/Verac%27s_brassard_detail.png/1024px-Verac%27s_brassard_detail.png', [
    new Variation(new CountableItem(VERACS_BRASSARD))
]);

const veracsPlateskirt = new Tile(VERACS_PLATESKIRT, 'https://oldschool.runescape.wiki/images/thumb/Verac%27s_plateskirt_detail.png/1280px-Verac%27s_plateskirt_detail.png', [
    new Variation(new CountableItem(VERACS_PLATESKIRT))
]);

const toragsHammers = new Tile(TORAGS_HAMMERS, 'https://oldschool.runescape.wiki/images/Torag%27s_hammers_detail.png', [
    new Variation(new CountableItem(TORAGS_HAMMERS))
]);

const toragsHelmet = new Tile(TORAGS_HELMET, 'https://oldschool.runescape.wiki/images/Torag%27s_helm_detail.png', [
    new Variation(new CountableItem(TORAGS_HELMET))
]);

const toragsPlatebody = new Tile(TORAGS_PLATEBODY, 'https://oldschool.runescape.wiki/images/Torag%27s_platebody_detail.png', [
    new Variation(new CountableItem(TORAGS_PLATEBODY))
]);

const toragsPlatelegs = new Tile(TORAGS_PLATELEGS, 'https://oldschool.runescape.wiki/images/Torag%27s_platelegs_detail.png', [
    new Variation(new CountableItem(TORAGS_PLATELEGS))
]);

const dharoksGreataxe = new Tile(DHAROKS_GREATAXE, 'https://oldschool.runescape.wiki/images/thumb/Dharok%27s_greataxe_detail.png/130px-Dharok%27s_greataxe_detail.png', [
    new Variation(new CountableItem(DHAROKS_GREATAXE))
]);

const dharoksHelm = new Tile(DHAROKS_HELM, 'https://oldschool.runescape.wiki/images/thumb/Dharok%27s_helm_detail.png/1024px-Dharok%27s_helm_detail.png', [
    new Variation(new CountableItem(DHAROKS_HELM))
]);

const dharoksPlatebody = new Tile(DHAROKS_PLATEBODY, 'https://oldschool.runescape.wiki/images/Dharok%27s_platebody_detail.png', [
    new Variation(new CountableItem(DHAROKS_PLATEBODY))
]);

const dharoksPlatelegs = new Tile(DHAROKS_PLATELEGS, 'https://oldschool.runescape.wiki/images/Dharok%27s_platelegs_detail.png', [
    new Variation(new CountableItem(DHAROKS_PLATELEGS))
]);

const karilsCrossbow = new Tile(KARILS_CROSSBOW, 'https://oldschool.runescape.wiki/images/Karil%27s_crossbow_detail.png', [
    new Variation(new CountableItem(KARILS_CROSSBOW))
]);

const karilsCoif = new Tile(KARILS_COIF, 'https://oldschool.runescape.wiki/images/Karil%27s_coif_detail.png', [
    new Variation(new CountableItem(KARILS_COIF))
]);

const karilsLeathertop = new Tile(KARILS_LEATHERTOP, 'https://oldschool.runescape.wiki/images/Karil%27s_leathertop_detail.png', [
    new Variation(new CountableItem(KARILS_LEATHERTOP))
]);

const karilsLeatherskirt = new Tile(KARILS_LEATHERSKIRT, 'https://oldschool.runescape.wiki/images/thumb/Karil%27s_leatherskirt_detail.png/1280px-Karil%27s_leatherskirt_detail.png', [
    new Variation(new CountableItem(KARILS_LEATHERSKIRT))
]);

const ahrimsStaff = new Tile(AHRIMS_STAFF, 'https://oldschool.runescape.wiki/images/thumb/Ahrim%27s_staff_detail.png/1280px-Ahrim%27s_staff_detail.png', [
    new Variation(new CountableItem(AHRIMS_STAFF))
]);

const ahrimsHood = new Tile(AHRIMS_HOOD, 'https://oldschool.runescape.wiki/images/Ahrim%27s_hood_detail.png', [
    new Variation(new CountableItem(AHRIMS_HOOD))
]);

const ahrimsRobetop = new Tile(AHRIMS_ROBETOP, 'https://oldschool.runescape.wiki/images/Ahrim%27s_robetop_detail.png', [
    new Variation(new CountableItem(AHRIMS_ROBETOP))
]);

const ahrimsRobeSkirt = new Tile(AHRIMS_ROBE_SKIRT, 'https://oldschool.runescape.wiki/images/Ahrim%27s_robeskirt_detail.png', [
    new Variation(new CountableItem(AHRIMS_ROBE_SKIRT))
]);

const boltRack = new Tile(BOLT_RACK, 'https://oldschool.runescape.wiki/images/Bolt_rack_detail.png', [
    new Variation(new CountableItem(BOLT_RACK, 69))
]);

export const rows = [
    [guthansHelm, toragsHelmet, karilsCoif, dharoksHelm, veracsHelm],
    [guthansPlatebody, toragsPlatebody, karilsLeathertop, dharoksPlatebody, veracsBrassard],
    [guthansChainskirt, toragsPlatelegs, boltRack, dharoksPlatelegs, veracsPlateskirt],
    [guthansWarspear, toragsHammers, karilsLeatherskirt, dharoksGreataxe, veracsFlail],
    [ahrimsHood, ahrimsRobetop, karilsCrossbow, ahrimsRobeSkirt, ahrimsStaff]
];
