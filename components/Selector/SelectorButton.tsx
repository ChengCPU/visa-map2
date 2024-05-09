import { useContext, MutableRefObject } from 'react'
import { PassportContext } from '../../logic/context/PassportContext'
import { Button } from '@mui/material'
import { StaticImageData } from 'next/image'
import SelectorSVG from './SelectorSVG'
import Passport from './Passport'
interface Props {
  setOpenDrawer:Function;
  selectRef:MutableRefObject<{selection:number;passport:null|string}>;
  selectArrayRef:MutableRefObject<(null|string)[]>;
  num:number;
}

const passportsArray:string[] = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antiguaAndBarbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosniaAndHerzegovina','botswana','brazil','britishNationalOverseas','britishVirginIslands','brunei','bulgaria','burkinaFaso','burundi','cambodia','cameroon','canada','capeVerde','caymanIslands','centralAfricanRepublic','chad','chile','china','colombia','comoros','costaRica','croatia','cuba','cyprus','czechRepublic','democraticRepublicOfTheCongo','denmark','djibouti','dominica','dominicanRepublic','eastTimor','ecuador','egypt','elSalvador','equatorialGuinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guineaBissau','guyana','haiti','honduras','hongKong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivoryCoast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kosovo','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshallIslands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','newZealand','nicaragua','niger','nigeria','northernCyprus','northKorea','northMacedonia','norway','oman','pakistan','palau','palestine','panama','papuaNewGuinea','paraguay','peru','philippines','poland','portugal','qatar','republicOfTheCongo','romania','russia','rwanda','saintHelena','saintKittsAndNevis','saintLucia','saintVincentAndTheGrenadines','samoa','sanMarino','saoTomeAndPrincipe','saudiArabia','senegal','serbia','seychelles','sierraLeone','singapore','slovakia','slovenia','solomonIslands','somalia','somaliland','southAfrica','southKorea','southOssetia','southSudan','spain','sriLanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidadAndTobago','tunisia','turkey','turkmenistan','turksAndCaicos','tuvalu','uganda','ukraine','unitedArabEmirates','unitedKingdom','unitedStates','uruguay','uzbekistan','vanuatu','vaticanCity','venezuela','vietnam','yemen','zambia','zimbabwe']
const passportsArrayWithSpaces:string[] = ['abkhazia','afghanistan','albania','algeria','andorra','angola','anguilla','antigua and Barbuda','argentina','armenia','australia','austria','azerbaijan','bahamas','bahrain','bangladesh','barbados','belarus','belgium','belize','benin','bermuda','bhutan','bolivia','bosnia and Herzegovina','botswana','brazil','british National (Overseas)','british Virgin Islands','brunei','bulgaria','burkina Faso','burundi','cambodia','cameroon','canada','cape Verde','cayman Islands','central African Republic','chad','chile','china','colombia','comoros','costa Rica','croatia','cuba','cyprus','czech Republic','democratic Republic of the Congo','denmark','djibouti','dominica','dominican Republic','east Timor','ecuador','egypt','el Salvador','equatorial Guinea','eritrea','estonia','eswatini','ethiopia','fiji','finland','france','gabon','gambia','georgia','germany','ghana','greece','grenada','guatemala','guinea','guinea Bissau','guyana','haiti','honduras','hong Kong','hungary','iceland','india','indonesia','iran','iraq','ireland','israel','italy','ivory Coast','jamaica','japan','jordan','kazakhstan','kenya','kiribati','kosovo','kuwait','kyrgyzstan','laos','latvia','lebanon','lesotho','liberia','libya','liechtenstein','lithuania','luxembourg','macao','madagascar','malawi','malaysia','maldives','mali','malta','marshall Islands','mauritania','mauritius','mexico','micronesia','moldova','monaco','mongolia','montenegro','montserrat','morocco','mozambique','myanmar','namibia','nauru','nepal','netherlands','new Zealand','nicaragua','niger','nigeria','northern Cyprus','north Korea','north Macedonia','norway','oman','pakistan','palau','palestine','panama','papua New Guinea','paraguay','peru','philippines','poland','portugal','qatar','republic of the Congo','romania','russia','rwanda','saint Helena','saint Kitts and Nevis','saint Lucia','saint Vincent and the Grenadines','samoa','san Marino','sao Tome and Principe','saudi Arabia','senegal','serbia','seychelles','sierra Leone','singapore','slovakia','slovenia','solomon Islands','somalia','somaliland','south Africa','south Korea','south Ossetia','south Sudan','spain','sri Lanka','sudan','suriname','sweden','switzerland','syria','taiwan','tajikistan','tanzania','thailand','togo','tonga','trinidad and Tobago','tunisia','turkey','turkmenistan','turks and Caicos','tuvalu','uganda','ukraine','united Arab Emirates','united Kingdom','united States','uruguay','uzbekistan','vanuatu','vatican City','venezuela','vietnam','yemen','zambia','zimbabwe']

const SelectorButton:React.FC<Props> = ({ setOpenDrawer, selectRef, selectArrayRef, num }) => {

  const passports:{[key:string]:StaticImageData} = useContext(PassportContext)
  
  return (
    <Button title={selectArrayRef.current[num] == null ? null : passportsArrayWithSpaces[passportsArray.indexOf(selectArrayRef.current[num])].charAt(0).toUpperCase() + passportsArrayWithSpaces[passportsArray.indexOf(selectArrayRef.current[num])].slice(1)} onClick={() => {
      setOpenDrawer(true)
      selectRef.current = { selection: num, passport: selectRef.current.passport }
    }}>
    {(selectArrayRef.current[num] == null) ? <SelectorSVG /> : <Passport image={passports[selectArrayRef.current[num]]}/>} 
    </Button>
  )
}

export default SelectorButton