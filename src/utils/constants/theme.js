const breakpoints = {
  mobile: '767px',
  tablet: {
    min: '768px',
    max: '1023px',
  },
  desktop: '1024px',
};

export const theme = {
  deviceSize: {
    mobile: `screen and (max-width: ${breakpoints.mobile})`,
    tablet: `screen and (min-width: ${breakpoints.tablet.min}) and (max-width: ${breakpoints.tablet.max})`,
    desktop: `screen and (min-width: ${breakpoints.desktop})`,
  },
};
