import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgStarSmileLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 .5l4.226 6.183 7.186 2.109-4.575 5.93.216 7.486L12 19.69l-7.054 2.518.216-7.486-4.575-5.93 7.187-2.109L12 .5zm0 3.544L9.022 8.402 3.957 9.887l3.225 4.178-.153 5.275 4.97-1.774 4.97 1.774-.151-5.274 3.224-4.179-5.065-1.485L12 4.044zM10 12a2 2 0 104 0h2a4 4 0 01-8 0h2z" />
    </Svg>
  );
}

export default SvgStarSmileLine;
