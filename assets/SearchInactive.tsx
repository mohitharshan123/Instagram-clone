import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

const SearchInactive: React.FC<any> = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Circle cx={10} cy={10} r={8.1} stroke="#fff" strokeWidth={1.8} />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={1.8}
      d="m22 22-6-6"
    />
  </Svg>
);
export default SearchInactive;
