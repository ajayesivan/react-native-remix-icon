import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgGitlabLine(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M5.68 7.314l-1.82 5.914L12 19.442l8.14-6.214-1.82-5.914L16.643 11H7.356L5.681 7.314zM15.357 9l2.888-6.354a.4.4 0 01.747.048l3.367 10.945a.5.5 0 01-.174.544L12 21.958 1.816 14.183a.5.5 0 01-.174-.544L5.009 2.694a.4.4 0 01.747-.048L8.644 9h6.712z" />
    </Svg>
  );
}

export default SvgGitlabLine;
