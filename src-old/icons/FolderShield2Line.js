import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFolderShield2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M22 9h-2V7h-8.414l-2-2H4v14h7.447a4.97 4.97 0 001.664 2H3a1 1 0 01-1-1V4a1 1 0 011-1h7.414l2 2H21a1 1 0 011 1v3zm-9 2h9v5.949c0 .99-.501 1.916-1.336 2.465L17.5 21.498l-3.164-2.084A2.953 2.953 0 0113 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 00.436-.795V13h-5v3.949z" />
    </Svg>
  );
}

export default SvgFolderShield2Line;
