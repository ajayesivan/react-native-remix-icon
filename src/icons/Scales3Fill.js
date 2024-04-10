import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgScales3Fill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12.998 2v1.278l5 1.668 3.633-1.21.632 1.896-3.031 1.011 3.095 8.512A5.983 5.983 0 0117.998 17a5.983 5.983 0 01-4.328-1.845l3.094-8.512-3.766-1.256V19h4v2h-10v-2h4V5.387L7.232 6.643l3.095 8.512A5.983 5.983 0 016 17a5.983 5.983 0 01-4.33-1.845l3.095-8.512-3.03-1.01.632-1.898L6 4.945l4.999-1.667V2h2zm5 7.103L16.581 13h2.835l-1.418-3.897zm-12 0L4.582 13h2.835L5.999 9.103z" />
    </Svg>
  );
}

export default SvgScales3Fill;
