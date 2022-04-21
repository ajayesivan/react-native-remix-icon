import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgEBike2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M16 1a1 1 0 011 1v1h5v6h-2.019l2.746 7.545A4 4 0 1115.126 19h-4.252a4.002 4.002 0 01-7.8-.226A2 2 0 012 17V7a1 1 0 011-1h7a1 1 0 011 1v5a1 1 0 001 1h2a1 1 0 001-1V3h-3V1h4zm3 15a2 2 0 101.88 1.316l-.016-.044A2 2 0 0019 16zM7 16a2 2 0 100 4 2 2 0 000-4zm2-8H4v2h5V8zm11-3h-3v2h3V5z" />
    </Svg>
  );
}

export default SvgEBike2Fill;
