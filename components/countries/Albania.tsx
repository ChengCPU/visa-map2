interface Props {
  al:string;
  AL:boolean;
  setCountrySelect:Function;
}

const Albania:React.FC<Props> = ({ al, AL, setCountrySelect }) => {
  return (
    <g className={'albania'} onMouseOver={() => setCountrySelect('albania')}>
      <style jsx>{`
      .albania {
        fill: ${al};
        stroke-width: 1;
      }
      `}</style>
    <defs>
      <pattern id="al" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
        <rect className="checker" x="0" width="2" height="2" y="0"/>
        <rect className="checker" x="2" width="2" height="2" y="2"/>
      </pattern>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#al)" />
    </defs>
    <path fill={AL ? "url(#al)" : null} d="M1088 228l0.4 1.2 1.4-0.6 1.2 1.7 1.3 0.7 0.6 2.3-0.5 2.2 1 2.7 2.3 1.5 0.1 1.7-1.7 0.9-0.1 2.1-2.2 3.1-0.9-0.4-0.2-1.4-3.1-2.2-0.7-3 0.1-4.4 0.5-1.9-0.9-1-0.5-2.1 1.9-3.1z" stroke="black"/>
    </g>
  )
}

export default Albania