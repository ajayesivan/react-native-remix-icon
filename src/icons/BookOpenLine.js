import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBookOpenLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M13 21v2h-2v-2H3a1 1 0 01-1-1V4a1 1 0 011-1h6a3.99 3.99 0 013 1.354A3.99 3.99 0 0115 3h6a1 1 0 011 1v16a1 1 0 01-1 1h-8zm7-2V5h-5a2 2 0 00-2 2v12h7zm-9 0V7a2 2 0 00-2-2H4v14h7z" />
    </Svg>
  );
}

export default SvgBookOpenLine;
