import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDownload2Fill(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
      <Path fill="none" d="M0 0h24v24H0z" />
      <Path d="M4 19h16v-7h2v8a1 1 0 01-1 1H3a1 1 0 01-1-1v-8h2v7zM14 9h5l-7 7-7-7h5V3h4v6z" />
    </Svg>
  );
}

export default SvgDownload2Fill;
