import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDislikeLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M2.808 1.393l18.384 18.385-1.414 1.414-3.747-3.747L12 21.485l-8.48-8.492a6 6 0 01.034-8.023L1.393 2.808l1.415-1.415zm2.172 10.23L12 18.654l2.617-2.623-9.645-9.645a4.001 4.001 0 00.008 5.237zm15.263-6.866a6 6 0 01.236 8.236l-1.635 1.636-1.414-1.414 1.59-1.592a3.999 3.999 0 00-.193-5.453 3.998 3.998 0 00-5.49-.153l-1.335 1.198-1.336-1.197a3.953 3.953 0 00-1.155-.723l-2.25-2.25a5.99 5.99 0 014.74 1.484 5.998 5.998 0 018.242.228z" />
    </Svg>
  );
}

export default SvgDislikeLine;
