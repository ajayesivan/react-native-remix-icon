import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBaseStationLine(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M12 13l6 9H6l6-9zm0 3.6L9.74 20h4.52L12 16.6zm-1.06-6.04a1.5 1.5 0 112.12-2.12 1.5 1.5 0 01-2.12 2.12zM5.281 2.783l1.415 1.415a7.5 7.5 0 000 10.606l-1.415 1.415a9.5 9.5 0 010-13.436zm13.436 0a9.5 9.5 0 010 13.436l-1.415-1.415a7.5 7.5 0 000-10.606l1.415-1.415zM8.11 5.611l1.414 1.414a3.5 3.5 0 000 4.95l-1.414 1.414a5.5 5.5 0 010-7.778zm7.778 0a5.5 5.5 0 010 7.778l-1.414-1.414a3.5 3.5 0 000-4.95l1.414-1.414z" />
    </Svg>
  );
}

export default SvgBaseStationLine;
