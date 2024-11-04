import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHeartAdd2Line(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M4 9c0-2.508 1.714-4 3.5-4 1.906 0 3.254 1.582 4.5 2.828C13.246 6.582 14.594 5 16.5 5 18.316 5 20 6.484 20 9c0 1.122-.236 2.15-.65 3.102l1.836.796A9.703 9.703 0 0022 9c0-3.504-2.466-6-5.5-6-1.91 0-3.354.985-4.5 2.028C10.854 3.985 9.41 3 7.5 3 4.504 3 2 5.496 2 9c0 3.02 1.362 5.47 3.203 7.445 1.83 1.962 4.182 3.51 6.289 4.753l1.016-1.722c-2.067-1.22-4.215-2.65-5.842-4.395C5.051 13.35 4 11.363 4 9zm15 8v-3h-2v3h-3v2h2.999L17 22h2l-.001-3H22v-2h-3z" />
    </Svg>
  );
}

export default SvgHeartAdd2Line;
