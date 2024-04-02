import { useEffect, MutableRefObject } from 'react'
import Map from '../components/Map/Map'
import Head from 'next/head'
import InfoBox from '../components/InfoBox'
interface Props {
  selectArrayRef:MutableRefObject<(null|string)[]>;
  mousePos:number | boolean[];
  hover:boolean;
  setHover:Function;
  countrySelect:string;
  priorityRef:MutableRefObject<{[key:string]:string}>;
  setSelectorLoad:Function;
  tempPriorityRef:MutableRefObject<{[key:string]:string}>;
  tempDiffRef:MutableRefObject<{[key:string]:number}>;
  diffRef:MutableRefObject<{[key:string]:number}>;
  panzoomReset:boolean;
}

export default function Home({ selectArrayRef, mousePos, hover, setHover, countrySelect, priorityRef, setSelectorLoad, tempPriorityRef, tempDiffRef, diffRef, panzoomReset }:Props) {

  useEffect(() => {
    priorityRef.current = tempPriorityRef.current
    diffRef.current = tempDiffRef.current
    setSelectorLoad(true)
  }, [])

  return (
    <>
    <Head>
      <title>Visa-map</title>
      <meta name="viewport" content="width=device-width, user-scalable=no"></meta>
      <link rel="shortcut icon" href="/favicon.png" />
    </Head>
    <Map
      setHover={setHover}
      panzoomReset={panzoomReset}
    />
    <InfoBox
      selectArrayRef={selectArrayRef}
      mousePos={mousePos}
      hover={hover}
      countrySelect={countrySelect}
      priorityRef={priorityRef}
      selected={null}
    />
    </>
  )
}
