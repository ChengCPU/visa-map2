import { useState, useEffect } from 'react';
import { mainCalculation, subCalculation, selectArrayCalculation, reset } from './_logic'; //import map render function from _logic
import { ColorContext } from '../components/context/ColorContext';
import { Drawer } from '@mui/material';
import Map from '../components/Map/Map';
import Selector from '../components/Selector';
import Head from 'next/head';

export default function Home() {
  //base rgb variable used to reset rgb values
  const color:object = {
    abkhaziaColor: "rgb(150,150,150)",
    afghanistanColor: "rgb(150,150,150)",
    albaniaColor: "rgb(150,150,150)",
    algeriaColor: "rgb(150,150,150)",
    americanSamoaColor: "rgb(150,150,150)",
    andorraColor: "rgb(150,150,150)",
    angolaColor: "rgb(150,150,150)",
    anguillaColor: "rgb(150,150,150)",
    antiguaAndBarbudaColor: "rgb(150,150,150)",
    argentinaColor: "rgb(150,150,150)",
    armeniaColor: "rgb(150,150,150)",
    arubaColor: "rgb(150,150,150)",
    australiaColor: "rgb(150,150,150)",
    austriaColor: "rgb(150,150,150)",
    azerbaijanColor: "rgb(150,150,150)",
    bahamasColor: "rgb(150,150,150)",
    bahrainColor: "rgb(150,150,150)",
    bangladeshColor: "rgb(150,150,150)",
    barbadosColor: "rgb(150,150,150)",
    belarusColor: "rgb(150,150,150)",
    belgiumColor: "rgb(150,150,150)",
    belizeColor: "rgb(150,150,150)",
    beninColor: "rgb(150,150,150)",
    bermudaColor: "rgb(150,150,150)",
    bhutanColor: "rgb(150,150,150)",
    boliviaColor: "rgb(150,150,150)",
    bonaireColor: "rgb(150,150,150)",
    bosniaAndHerzegovinaColor: "rgb(150,150,150)",
    botswanaColor: "rgb(150,150,150)",
    bouvetIslandColor: "rgb(150,150,150)",
    brazilColor: "rgb(150,150,150)",
    britishIndianOceanTerritory: "rgb(150,150,150)",
    britishVirginIslandsColor: "rgb(150,150,150)",
    bruneiColor: "rgb(150,150,150)",
    bulgariaColor: "rgb(150,150,150)",
    burkinaFasoColor: "rgb(150,150,150)",
    burundiColor: "rgb(150,150,150)",
    cambodiaColor: "rgb(150,150,150)",
    cameroonColor: "rgb(150,150,150)",
    canadaColor: "rgb(150,150,150)",
    capeVerdeColor: "rgb(150,150,150)",
    caymanIslandsColor: "rgb(150,150,150)",
    centralAfricanRepublicColor: "rgb(150,150,150)",
    chadColor: "rgb(150,150,150)",
    chileColor: "rgb(150,150,150)",
    chinaColor: "rgb(150,150,150)",
    colombiaColor: "rgb(150,150,150)",
    comorosColor: "rgb(150,150,150)",
    cookIslandsColor: "rgb(150,150,150)",
    costaRicaColor: "rgb(150,150,150)",
    croatiaColor: "rgb(150,150,150)",
    cubaColor: "rgb(150,150,150)",
    curacaoColor: "rgb(150,150,150)",
    cyprusColor: "rgb(150,150,150)",
    czechRepublicColor: "rgb(150,150,150)",
    democraticRepublicOfTheCongoColor: "rgb(150,150,150)",
    denmarkColor: "rgb(150,150,150)",
    djiboutiColor: "rgb(150,150,150)",
    dominicaColor: "rgb(150,150,150)",
    dominicanRepublicColor: "rgb(150,150,150)",
    eastTimorColor: "rgb(150,150,150)",
    ecuadorColor: "rgb(150,150,150)",
    egyptColor: "rgb(150,150,150)",
    elSalvadorColor: "rgb(150,150,150)",
    equatorialGuineaColor: "rgb(150,150,150)",
    eritreaColor: "rgb(150,150,150)",
    estoniaColor: "rgb(150,150,150)",
    eswatiniColor: "rgb(150,150,150)",
    ethiopiaColor: "rgb(150,150,150)",
    falklandIslandsColor: "rgb(150,150,150)",
    faroeIslandsColor: "rgb(150,150,150)",
    fijiColor: "rgb(150,150,150)",
    finlandColor: "rgb(150,150,150)",
    franceColor: "rgb(150,150,150)",
    frenchGuianaColor: "rgb(150,150,150)",
    frenchPolynesiaColor: "rgb(150,150,150)",
    gabonColor: "rgb(150,150,150)",
    gambiaColor: "rgb(150,150,150)",
    georgiaColor: "rgb(150,150,150)",
    germanyColor: "rgb(150,150,150)",
    ghanaColor: "rgb(150,150,150)",
    gibraltarColor: "rgb(150,150,150)",
    greeceColor: "rgb(150,150,150)",
    greenlandColor: "rgb(150,150,150)",
    grenadaColor: "rgb(150,150,150)",
    guadeloupeColor: "rgb(150,150,150)",
    guamColor: "rgb(150,150,150)",
    guatemalaColor: "rgb(150,150,150)",
    guernseyColor: "rgb(150,150,150)",
    guineaColor: "rgb(150,150,150)",
    guineaBissauColor: "rgb(150,150,150)",
    guyanaColor: "rgb(150,150,150)",
    haitiColor: "rgb(150,150,150)",
    heardIslandAndMcDonaldIslandsColor: "rgb(150,150,150)",
    hondurasColor: "rgb(150,150,150)",
    hongKongColor: "rgb(150,150,150)",
    hungaryColor: "rgb(150,150,150)",
    icelandColor: "rgb(150,150,150)",
    indiaColor: "rgb(150,150,150)",
    indonesiaColor: "rgb(150,150,150)",
    iranColor: "rgb(150,150,150)",
    iraqColor: "rgb(150,150,150)",
    irelandColor: "rgb(150,150,150)",
    isleOfManColor: "rgb(150,150,150)",
    israelColor: "rgb(150,150,150)",
    italyColor: "rgb(150,150,150)",
    ivoryCoastColor: "rgb(150,150,150)",
    jamaicaColor: "rgb(150,150,150)",
    janMayenColor: "rgb(150,150,150)",
    japanColor: "rgb(150,150,150)",
    jerseyColor: "rgb(150,150,150)",
    jordanColor: "rgb(150,150,150)",
    kazakhstanColor: "rgb(150,150,150)",
    kenyaColor: "rgb(150,150,150)",
    kiribatiColor: "rgb(150,150,150)",
    kosovoColor: "rgb(150,150,150)",
    kuwaitColor: "rgb(150,150,150)",
    kyrgyzstanColor: "rgb(150,150,150)",
    laosColor: "rgb(150,150,150)",
    latviaColor: "rgb(150,150,150)",
    lebanonColor: "rgb(150,150,150)",
    lesothoColor: "rgb(150,150,150)",
    liberiaColor: "rgb(150,150,150)",
    libyaColor: "rgb(150,150,150)",
    liechtensteinColor: "rgb(150,150,150)",
    lithuaniaColor: "rgb(150,150,150)",
    luxembourgColor: "rgb(150,150,150)",
    macaoColor: "rgb(150,150,150)",
    madagascarColor: "rgb(150,150,150)",
    malawiColor: "rgb(150,150,150)",
    malaysiaColor: "rgb(150,150,150)",
    maldivesColor: "rgb(150,150,150)",
    maliColor: "rgb(150,150,150)",
    maltaColor: "rgb(150,150,150)",
    marshallIslandsColor: "rgb(150,150,150)",
    martiniqueColor: "rgb(150,150,150)",
    mauritaniaColor: "rgb(150,150,150)",
    mauritiusColor: "rgb(150,150,150)",
    mayotteColor: "rgb(150,150,150)",
    mexicoColor: "rgb(150,150,150)",
    micronesiaColor: "rgb(150,150,150)",
    moldovaColor: "rgb(150,150,150)",
    monacoColor: "rgb(150,150,150)",
    mongoliaColor: "rgb(150,150,150)",
    montenegroColor: "rgb(150,150,150)",
    montserratColor: "rgb(150,150,150)",
    moroccoColor: "rgb(150,150,150)",
    mozambiqueColor: "rgb(150,150,150)",
    myanmarColor: "rgb(150,150,150)",
    namibiaColor: "rgb(150,150,150)",
    nauruColor: "rgb(150,150,150)",
    nepalColor: "rgb(150,150,150)",
    netherlandsColor: "rgb(150,150,150)",
    newCaledoniaColor: "rgb(150,150,150)",
    newZealandColor: "rgb(150,150,150)",
    nicaraguaColor: "rgb(150,150,150)",
    nigerColor: "rgb(150,150,150)",
    nigeriaColor: "rgb(150,150,150)",
    niueColor: "rgb(150,150,150)",
    norfolkIslandColor: "rgb(150,150,150)",
    northernCyprusColor: "rgb(150,150,150)",
    northernMarianaIslandsColor: "rgb(150,150,150)",
    northKoreaColor: "rgb(150,150,150)",
    northMacedoniaColor: "rgb(150,150,150)",
    norwayColor: "rgb(150,150,150)",
    omanColor: "rgb(150,150,150)",
    pakistanColor: "rgb(150,150,150)",
    palauColor: "rgb(150,150,150)",
    palestineColor: "rgb(150,150,150)",
    panamaColor: "rgb(150,150,150)",
    papuaNewGuineaColor: "rgb(150,150,150)",
    paraguayColor: "rgb(150,150,150)",
    peruColor: "rgb(150,150,150)",
    philippinesColor: "rgb(150,150,150)",
    pitcairnIslandsColor: "rgb(150,150,150)",
    polandColor: "rgb(150,150,150)",
    portugalColor: "rgb(150,150,150)",
    qatarColor: "rgb(150,150,150)",
    republicOfTheCongoColor: "rgb(150,150,150)",
    reunionColor: "rgb(150,150,150)",
    romaniaColor: "rgb(150,150,150)",
    russiaColor: "rgb(150,150,150)",
    rwandaColor: "rgb(150,150,150)",
    sabaColor: "rgb(150,150,150)",
    saintBarthelemyColor: "rgb(150,150,150)",
    saintHelenaColor: "rgb(150,150,150)",
    saintKittsAndNevisColor: "rgb(150,150,150)",
    saintLuciaColor: "rgb(150,150,150)",
    saintMartinColor: "rgb(150,150,150)",
    saintPierreAndMiquelonColor: "rgb(150,150,150)",
    saintVincentAndTheGrenadinesColor: "rgb(150,150,150)",
    samoaColor: "rgb(150,150,150)",
    sanMarinoColor: "rgb(150,150,150)",
    saoTomeAndPrincipeColor: "rgb(150,150,150)",
    saudiArabiaColor: "rgb(150,150,150)",
    senegalColor: "rgb(150,150,150)",
    serbiaColor: "rgb(150,150,150)",
    seychellesColor: "rgb(150,150,150)",
    sierraLeoneColor: "rgb(150,150,150)",
    singaporeColor: "rgb(150,150,150)",
    sintEustatiusColor: "rgb(150,150,150)",
    sintMaartenColor: "rgb(150,150,150)",
    slovakiaColor: "rgb(150,150,150)",
    sloveniaColor: "rgb(150,150,150)",
    solomonIslandsColor: "rgb(150,150,150)",
    somaliaColor: "rgb(150,150,150)",
    southAfricaColor: "rgb(150,150,150)",
    southGeorgiaAndTheSouthSandwichIslandsColor: "rgb(150,150,150)",
    southKoreaColor: "rgb(150,150,150)",
    southOssetiaColor: "rgb(150,150,150)",
    southSudanColor: "rgb(150,150,150)",
    spainColor: "rgb(150,150,150)",
    sriLankaColor: "rgb(150,150,150)",
    sudanColor: "rgb(150,150,150)",
    surinameColor: "rgb(150,150,150)",
    svalbardColor: "rgb(150,150,150)",
    swedenColor: "rgb(150,150,150)",
    switzerlandColor: "rgb(150,150,150)",
    syriaColor: "rgb(150,150,150)",
    taiwanColor: "rgb(150,150,150)",
    tajikistanColor: "rgb(150,150,150)",
    tanzaniaColor: "rgb(150,150,150)",
    thailandColor: "rgb(150,150,150)",
    togoColor: "rgb(150,150,150)",
    tokelauColor: "rgb(150,150,150)",
    tongaColor: "rgb(150,150,150)",
    transnistriaColor: "rgb(150,150,150)",
    trinidadAndTobagoColor: "rgb(150,150,150)",
    tunisiaColor: "rgb(150,150,150)",
    turkeyColor: "rgb(150,150,150)",
    turkmenistanColor: "rgb(150,150,150)",
    turksAndCaicosColor: "rgb(150,150,150)",
    tuvaluColor: "rgb(150,150,150)",
    ugandaColor: "rgb(150,150,150)",
    ukraineColor: "rgb(150,150,150)",
    unitedArabEmiratesColor: "rgb(150,150,150)",
    unitedKingdomColor: "rgb(150,150,150)",
    unitedStatesColor: "rgb(150,150,150)",
    unitedStatesVirginIslandsColor: "rgb(150,150,150)",
    uruguayColor: "rgb(150,150,150)",
    uzbekistanColor: "rgb(150,150,150)",
    vanuatuColor: "rgb(150,150,150)",
    vaticanCityColor: "rgb(150,150,150)",
    venezuelaColor: "rgb(150,150,150)",
    vietnamColor: "rgb(150,150,150)",
    wallisAndFutunaColor: "rgb(150,150,150)",
    westernSaharaColor: "rgb(150,150,150)",
    yemenColor: "rgb(150,150,150)",
    zambiaColor: "rgb(150,150,150)",
    zimbabweColor: "rgb(150,150,150)"
  }
  const [toggle, setToggle] = useState<boolean>(false) //used by SelectorPassport to trigger useEffect
  const [secondToggle, setSecondToggle] = useState<boolean>(false) //used by reset function to trigger secondToggle useEffect
  const [rerender, setRerender] = useState<boolean>(false) //used to rerender map
  const [openDrawer, setOpenDrawer] = useState<boolean>(false) //MUI drawer toggle
  const [select, setSelect] = useState<{selection: number,passport: null | string}>({ selection: 0, passport: null }) //used to keep track of which button is currently selected
  const [selectArray, setSelectArray] = useState<null | string[]>([null,null,null,null,null,null,null,null,null,null,null]) // keeps track of which passport is currently selected
  const [legendArray, setLegendArray] = useState<null | string[]>([null,null,null,null,null,null,null,null,null,null,null]) 
  const [assignedColors, setAssignedColors] = useState<object[]>([color,color,color,color,color,color,color,color,color,color,color]) // keeps track of each color for each passport
  const [priority, setPriority] = useState<object>(color) //priority is the color that is passed onto each country component as context
  //value is passed in as context to the country components
  const value = {
    abkhaziaColor: priority.abkhaziaColor,
    afghanistanColor: priority.afghanistanColor,
    albaniaColor: priority.albaniaColor,
    algeriaColor: priority.algeriaColor,
    americanSamoaColor: priority.americanSamoaColor,
    andorraColor: priority.andorraColor,
    angolaColor: priority.angolaColor,
    anguillaColor: priority.anguillaColor,
    antiguaAndBarbudaColor: priority.antiguaAndBarbudaColor,
    argentinaColor: priority.argentinaColor,
    armeniaColor: priority.armeniaColor,
    arubaColor: priority.arubaColor,
    australiaColor: priority.australiaColor,
    austriaColor: priority.austriaColor,
    azerbaijanColor: priority.azerbaijanColor,
    bahamasColor: priority.bahamasColor,
    bahrainColor: priority.bahrainColor,
    bangladeshColor: priority.bangladeshColor,
    barbadosColor: priority.barbadosColor,
    belarusColor: priority.belarusColor,
    belgiumColor: priority.belgiumColor,
    belizeColor: priority.belizeColor,
    beninColor: priority.beninColor,
    bermudaColor: priority.bermudaColor,
    bhutanColor: priority.bhutanColor,
    boliviaColor: priority.boliviaColor,
    bonaireColor: priority.bonaireColor,
    bosniaAndHerzegovinaColor: priority.bosniaAndHerzegovinaColor,
    botswanaColor: priority.botswanaColor,
    bouvetIslandColor: priority.bouvetIslandColor,
    brazilColor: priority.brazilColor,
    britishIndianOceanTerritoryColor: priority.britishIndianOceanTerritory,
    britishVirginIslandsColor: priority.britishVirginIslandsColor,
    bruneiColor: priority.bruneiColor,
    bulgariaColor: priority.bulgariaColor,
    burkinaFasoColor: priority.burkinaFasoColor,
    burundiColor: priority.burundiColor,
    cambodiaColor: priority.cambodiaColor,
    cameroonColor: priority.cameroonColor,
    canadaColor: priority.canadaColor,
    capeVerdeColor: priority.capeVerdeColor,
    caymanIslandsColor: priority.caymanIslandsColor,
    centralAfricanRepublicColor: priority.centralAfricanRepublicColor,
    chadColor: priority.chadColor,
    chileColor: priority.chileColor,
    chinaColor: priority.chinaColor,
    colombiaColor: priority.colombiaColor,
    comorosColor: priority.comorosColor,
    cookIslandsColor: priority.cookIslandsColor,
    costaRicaColor: priority.costaRicaColor,
    croatiaColor: priority.croatiaColor,
    cubaColor: priority.cubaColor,
    curacaoColor: priority.curacaoColor,
    cyprusColor: priority.cyprusColor,
    czechRepublicColor: priority.czechRepublicColor,
    democraticRepublicOfTheCongoColor: priority.democraticRepublicOfTheCongoColor,
    denmarkColor: priority.denmarkColor,
    djiboutiColor: priority.djiboutiColor,
    dominicaColor: priority.dominicaColor,
    dominicanRepublicColor: priority.dominicanRepublicColor,
    eastTimorColor: priority.eastTimorColor,
    ecuadorColor: priority.ecuadorColor,
    egyptColor: priority.egyptColor,
    elSalvadorColor: priority.elSalvadorColor,
    equatorialGuineaColor: priority.equatorialGuineaColor,
    eritreaColor: priority.eritreaColor,
    estoniaColor: priority.estoniaColor,
    eswatiniColor: priority.eswatiniColor,
    ethiopiaColor: priority.ethiopiaColor,
    falklandIslandsColor: priority.falklandIslandsColor,
    faroeIslandsColor: priority.faroeIslandsColor,
    fijiColor: priority.fijiColor,
    finlandColor: priority.finlandColor,
    franceColor: priority.franceColor,
    frenchGuianaColor: priority.frenchGuianaColor,
    frenchPolynesiaColor: priority.frenchPolynesiaColor,
    gabonColor: priority.gabonColor,
    gambiaColor: priority.gambiaColor,
    georgiaColor: priority.georgiaColor,
    germanyColor: priority.germanyColor,
    ghanaColor: priority.ghanaColor,
    gibraltarColor: priority.gibraltarColor,
    greeceColor: priority.greeceColor,
    greenlandColor: priority.greenlandColor,
    grenadaColor: priority.grenadaColor,
    guadeloupeColor: priority.guadeloupeColor,
    guamColor: priority.guamColor,
    guatemalaColor: priority.guatemalaColor,
    guernseyColor: priority.guernseyColor,
    guineaColor: priority.guineaColor,
    guineaBissauColor: priority.guineaBissauColor,
    guyanaColor: priority.guyanaColor,
    haitiColor: priority.haitiColor,
    heardIslandAndMcDonaldIslandsColor: priority.heardIslandAndMcDonaldIslandsColor,
    hondurasColor: priority.hondurasColor,
    hongKongColor: priority.hongKongColor,
    hungaryColor: priority.hungaryColor,
    icelandColor: priority.icelandColor,
    indiaColor: priority.indiaColor,
    indonesiaColor: priority.indonesiaColor,
    iranColor: priority.iranColor,
    iraqColor: priority.iraqColor,
    irelandColor: priority.irelandColor,
    isleOfManColor: priority.isleOfManColor,
    israelColor: priority.israelColor,
    italyColor: priority.italyColor,
    ivoryCoastColor: priority.ivoryCoastColor,
    jamaicaColor: priority.jamaicaColor,
    janMayenColor: priority.janMayenColor,
    japanColor: priority.japanColor,
    jerseyColor: priority.jerseyColor,
    jordanColor: priority.jordanColor,
    kazakhstanColor: priority.kazakhstanColor,
    kenyaColor: priority.kenyaColor,
    kiribatiColor: priority.kiribatiColor,
    kosovoColor: priority.kosovoColor,
    kuwaitColor: priority.kuwaitColor,
    kyrgyzstanColor: priority.kyrgyzstanColor,
    laosColor: priority.laosColor,
    latviaColor: priority.latviaColor,
    lebanonColor: priority.lebanonColor,
    lesothoColor: priority.lesothoColor,
    liberiaColor: priority.liberiaColor,
    libyaColor: priority.libyaColor,
    liechtensteinColor: priority.liechtensteinColor,
    lithuaniaColor: priority.lithuaniaColor,
    luxembourgColor: priority.luxembourgColor,
    macaoColor: priority.macaoColor,
    madagascarColor: priority.madagascarColor,
    malawiColor: priority.malawiColor,
    malaysiaColor: priority.malaysiaColor,
    maldivesColor: priority.maldivesColor,
    maliColor: priority.maliColor,
    maltaColor: priority.maltaColor,
    marshallIslandsColor: priority.marshallIslandsColor,
    martiniqueColor: priority.martiniqueColor,
    mauritaniaColor: priority.mauritaniaColor,
    mauritiusColor: priority.mauritiusColor,
    mayotteColor: priority.mayotteColor,
    mexicoColor: priority.mexicoColor,
    micronesiaColor: priority.micronesiaColor,
    moldovaColor: priority.moldovaColor,
    monacoColor: priority.monacoColor,
    mongoliaColor: priority.mongoliaColor,
    montenegroColor: priority.montenegroColor,
    montserratColor: priority.montserratColor,
    moroccoColor: priority.moroccoColor,
    mozambiqueColor: priority.mozambiqueColor,
    myanmarColor: priority.myanmarColor,
    namibiaColor: priority.namibiaColor,
    nauruColor: priority.nauruColor,
    nepalColor: priority.nepalColor,
    netherlandsColor: priority.netherlandsColor,
    newCaledoniaColor: priority.newCaledoniaColor,
    newZealandColor: priority.newZealandColor,
    nicaraguaColor: priority.nicaraguaColor,
    nigerColor: priority.nigerColor,
    nigeriaColor: priority.nigeriaColor,
    niueColor: priority.niueColor,
    norfolkIslandColor: priority.norfolkIslandColor,
    northernCyprusColor: priority.northernCyprusColor,
    northernMarianaIslandsColor: priority.northernMarianaIslandsColor,
    northKoreaColor: priority.northKoreaColor,
    northMacedoniaColor: priority.northMacedoniaColor,
    norwayColor: priority.norwayColor,
    omanColor: priority.omanColor,
    pakistanColor: priority.pakistanColor,
    palauColor: priority.palauColor,
    palestineColor: priority.palestineColor,
    panamaColor: priority.panamaColor,
    papuaNewGuineaColor: priority.papuaNewGuineaColor,
    paraguayColor: priority.paraguayColor,
    peruColor: priority.peruColor,
    philippinesColor: priority.philippinesColor,
    pitcairnIslandsColor: priority.pitcairnIslandsColor,
    polandColor: priority.polandColor,
    portugalColor: priority.portugalColor,
    qatarColor: priority.qatarColor,
    republicOfTheCongoColor: priority.republicOfTheCongoColor,
    reunionColor: priority.reunionColor,
    romaniaColor: priority.romaniaColor,
    russiaColor: priority.russiaColor,
    rwandaColor: priority.rwandaColor,
    sabaColor: priority.sabaColor,
    saintBarthelemyColor: priority.saintBarthelemyColor,
    saintHelenaColor: priority.saintHelenaColor,
    saintKittsAndNevisColor: priority.saintKittsAndNevisColor,
    saintLuciaColor: priority.saintLuciaColor,
    saintMartinColor: priority.saintMartinColor,
    saintPierreAndMiquelonColor: priority.saintPierreAndMiquelonColor,
    saintVincentAndTheGrenadinesColor: priority.saintVincentAndTheGrenadinesColor,
    samoaColor: priority.samoaColor,
    sanMarinoColor: priority.sanMarinoColor,
    saoTomeAndPrincipeColor: priority.saoTomeAndPrincipeColor,
    saudiArabiaColor: priority.saudiArabiaColor,
    senegalColor: priority.senegalColor,
    serbiaColor: priority.serbiaColor,
    seychellesColor: priority.seychellesColor,
    sierraLeoneColor: priority.sierraLeoneColor,
    singaporeColor: priority.singaporeColor,
    sintEustatiusColor: priority.sintEustatiusColor,
    sintMaartenColor: priority.sintMaartenColor,
    slovakiaColor: priority.slovakiaColor,
    sloveniaColor: priority.sloveniaColor,
    solomonIslandsColor: priority.solomonIslandsColor,
    somaliaColor: priority.somaliaColor,
    southAfricaColor: priority.southAfricaColor,
    southGeorgiaAndTheSouthSandwichIslandsColor: priority.southGeorgiaAndTheSouthSandwichIslandsColor,
    southKoreaColor: priority.southKoreaColor,
    southOssetiaColor: priority.southOssetiaColor,
    southSudanColor: priority.southSudanColor,
    spainColor: priority.spainColor,
    sriLankaColor: priority.sriLankaColor,
    sudanColor: priority.sudanColor,
    surinameColor: priority.surinameColor,
    svalbardColor: priority.svalbardColor,
    swedenColor: priority.swedenColor,
    switzerlandColor: priority.switzerlandColor,
    syriaColor: priority.syriaColor,
    taiwanColor: priority.taiwanColor,
    tajikistanColor: priority.tajikistanColor,
    tanzaniaColor: priority.tanzaniaColor,
    thailandColor: priority.thailandColor,
    togoColor: priority.togoColor,
    tokelauColor: priority.tokelauColor,
    tongaColor: priority.tongaColor,
    transnistriaColor: priority.transnistriaColor,
    trinidadAndTobagoColor: priority.trinidadAndTobagoColor,
    tunisiaColor: priority.tunisiaColor,
    turkeyColor: priority.turkeyColor,
    turkmenistanColor: priority.turkmenistanColor,
    turksAndCaicosColor: priority.turksAndCaicosColor,
    tuvaluColor: priority.tuvaluColor,
    ugandaColor: priority.ugandaColor,
    ukraineColor: priority.ukraineColor,
    unitedArabEmiratesColor: priority.unitedArabEmiratesColor,
    unitedKingdomColor: priority.unitedKingdomColor,
    unitedStatesColor: priority.unitedStatesColor,
    unitedStatesVirginIslandsColor: priority.unitedStatesVirginIslandsColor,
    uruguayColor: priority.uruguayColor,
    uzbekistanColor: priority.uzbekistanColor,
    vanuatuColor: priority.vanuatuColor,
    vaticanCityColor: priority.vaticanCityColor,
    venezuelaColor: priority.venezuelaColor,
    vietnamColor: priority.vietnamColor,
    wallisAndFutunaColor: priority.wallisAndFutunaColor,
    westernSaharaColor: priority.westernSaharaColor,
    yemenColor: priority.yemenColor,
    zambiaColor: priority.zambiaColor,
    zimbabweColor: priority.zimbabweColor
  }
  //function that takes in logic function
  const mainCalculationContainer:Function = () => {
    mainCalculation(selectArray[select.selection], assignedColors, setAssignedColors, select, priority, setPriority, rerender, setRerender, selectArray)
  }

  useEffect(() => {
    if(selectArray[select.selection] != null && selectArray[select.selection] != select.passport) {reset(setAssignedColors, setPriority, secondToggle, setSecondToggle); return}
    selectArrayCalculation(selectArray, setSelectArray, select);
    if(selectArray[select.selection] != null) {mainCalculationContainer()}
  }, [toggle])

  useEffect(() => {
    subCalculation(selectArray, assignedColors, setAssignedColors, priority, setPriority, rerender, setRerender)
    selectArrayCalculation(selectArray, setSelectArray, select)
  }, [secondToggle])

  return (
    <ColorContext.Provider value={value}>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Map 
      legendArray={legendArray}
    />
    <Selector
      Drawer={Drawer}
      openDrawer={openDrawer}
      setOpenDrawer={setOpenDrawer}
      select={select}
      setSelect={setSelect}
      selectArray={selectArray}
      setSelectArray={setSelectArray}
      toggle={toggle}
      setToggle={setToggle}
      setPriority={setPriority}
      setAssignedColors={setAssignedColors}
    />
    </ColorContext.Provider>
  )
}
