import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFlagOffFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M16.586 18l4.607 4.607 1.414-1.415-19.8-19.799-1.413 1.415L3 4.414V22h2v-6h7l.724 1.447a1 1 0 00.894.553h2.968zM21 6v10.758L7.242 3h5.14a1 1 0 01.895.553L14 5h6a1 1 0 011 1z" />
    </Svg>
  );
}

export default SvgFlagOffFill;
