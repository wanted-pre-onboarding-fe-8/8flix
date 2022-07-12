const breakpoints = {
  mobile: '767px',
  tablet: {
    min: '768px',
    max: '1023px',
  },
  desktop: '1024px',
};

const mediaQuery = {
  deviceSize: {
    mobile: `screen and (max-width: ${breakpoints.mobile})`,
    tablet: `screen and (min-width: ${breakpoints.tablet.min}) and (max-width: ${breakpoints.tablet.max})`,
    desktop: `screen and (min-width: ${breakpoints.desktop})`,
  },
};

const grayScale = {
  white: '#F0F0F0',
  gray50: '#FAFAFA',
  gray100: '#F5F5F5',
  gray200: '#EEEEEE',
  gray300: '#E0E0E0',
  gray400: '#BDBDBD',
  gray500: '#9E9E9E',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',
  lightBlack: '#121212',
  trueBlack: '#000',
};

const brandColor = '#DC1A28';

const statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
};

const theme = {
  ...mediaQuery,
  palette: { ...grayScale, brandColor, ...statusColors },
};

export const lightMode = {
  ...theme,
  bg: { primary: grayScale.gray100, secondary: grayScale.gray200 },
  text: {
    xweak: grayScale.gray300,
    weak: grayScale.gray500,
    medium: grayScale.gray700,
    strong: grayScale.gray900,
  },
  searchbar: {
    background: grayScale.gray100,
    hoverBg: grayScale.gray300,
    borderColor: grayScale.gray300,
    color: grayScale.gray900,
  },
};

export const darkMode = {
  ...theme,
  bg: {
    primary: grayScale.gray900,
    secondary: grayScale.lightBlack,
  },
  text: {
    xweak: grayScale.gray900,
    weak: grayScale.gray700,
    medium: grayScale.gray500,
    strong: grayScale.gray300,
  },
  searchbar: {
    background: grayScale.gray900,
    hoverBg: grayScale.gray600,
    borderColor: grayScale.gray700,
    color: grayScale.white,
  },
};
