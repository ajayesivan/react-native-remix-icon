import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGhost2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2c3.5 0 6 3 7 6 3 1 4 3.73 4 6l-2.775.793a1 1 0 00-.725.961v1.496A1.75 1.75 0 0117.75 19h-.596a2 2 0 00-1.668.896C14.558 21.3 13.396 22 12 22c-1.396 0-2.558-.701-3.486-2.104A2 2 0 006.846 19H6.25a1.75 1.75 0 01-1.75-1.75v-1.496a1 1 0 00-.725-.961L1 14c0-2.266 1-5 4-6 1-3 3.5-6 7-6zm0 10c-.828 0-1.5 1.12-1.5 2.5S11.172 17 12 17s1.5-1.12 1.5-2.5S12.828 12 12 12zM9.5 8a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm5 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" />
    </Svg>
  );
}

export default SvgGhost2Fill;