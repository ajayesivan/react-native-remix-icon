import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDatabaseFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M11 7V4a1 1 0 011-1h9a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V8a1 1 0 011-1h8zm-6 9v2h5v-2H5zm9 0v2h5v-2h-5zm0-3v2h5v-2h-5zm0-3v2h5v-2h-5zm-9 3v2h5v-2H5z" />
    </Svg>
  );
}

export default SvgDatabaseFill;
