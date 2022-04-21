import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMoonCloudyLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M8.67 5.007a7 7 0 017.55-3.901 4.5 4.5 0 005.674 5.674c.07.396.106.804.106 1.22a6.969 6.969 0 01-.865 3.373A5.5 5.5 0 0117.5 21H9a8 8 0 01-.33-15.993zm2.177.207a8.016 8.016 0 015.61 4.885 5.529 5.529 0 012.96.245c.226-.425.393-.885.488-1.37a6.502 6.502 0 01-5.878-5.88 5.003 5.003 0 00-3.18 2.12zM17.5 19a3.5 3.5 0 10-2.5-5.95V13a6 6 0 10-6 6h8.5z" />
    </Svg>
  );
}

export default SvgMoonCloudyLine;
