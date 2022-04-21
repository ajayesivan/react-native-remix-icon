import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgSurgicalMaskFill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12.485 3.121l7.758 1.94c.445.11.757.51.757.97V7h1c1.1 0 2 .9 2 2v3a3 3 0 01-3 3h-.421a6.001 6.001 0 01-2.896 3.158l-4.789 2.395a2.002 2.002 0 01-1.788 0l-4.79-2.395A6.005 6.005 0 013.422 15H3a3 3 0 01-3-3V9a2 2 0 012-2h1v-.97c0-.458.312-.858.757-.97l7.758-1.939c.318-.08.652-.08.97 0zM3 9H2v3a1 1 0 001 1V9zm19 0h-1v4a1 1 0 001-1V9z" />
    </Svg>
  );
}

export default SvgSurgicalMaskFill;
