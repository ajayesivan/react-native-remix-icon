import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgLoader2Line(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M12 2a1 1 0 011 1v3a1 1 0 01-2 0V3a1 1 0 011-1zm0 15a1 1 0 011 1v3a1 1 0 01-2 0v-3a1 1 0 011-1zm10-5a1 1 0 01-1 1h-3a1 1 0 010-2h3a1 1 0 011 1zM7 12a1 1 0 01-1 1H3a1 1 0 010-2h3a1 1 0 011 1zm12.071 7.071a1 1 0 01-1.414 0l-2.121-2.121a1 1 0 011.414-1.414l2.121 2.12a1 1 0 010 1.415zM8.464 8.464a1 1 0 01-1.414 0l-2.12-2.12a1 1 0 011.414-1.415l2.12 2.121a1 1 0 010 1.414zM4.93 19.071a1 1 0 010-1.414l2.121-2.121a1 1 0 111.414 1.414l-2.12 2.121a1 1 0 01-1.415 0zM15.536 8.464a1 1 0 010-1.414l2.12-2.121a1 1 0 011.415 1.414L16.95 8.464a1 1 0 01-1.414 0z" />
    </Svg>
  );
}

export default SvgLoader2Line;
