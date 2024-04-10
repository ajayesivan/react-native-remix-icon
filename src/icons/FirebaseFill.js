import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFirebaseFill(props) {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M6.757 1.501L4 18.5 9.473 4.816 7.695 1.353a.5.5 0 00-.938.148zm4.807 2.817L4 18.5l9.84-11.55-1.399-2.623a.5.5 0 00-.877-.01zm-.624 18.52L4 18.5 17.31 5.665a.5.5 0 01.832.296L20 18.5l-6.94 4.337a2 2 0 01-2.12 0z" />
    </Svg>
  );
}

export default SvgFirebaseFill;
