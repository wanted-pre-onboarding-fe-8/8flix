const breakpoints = {
  mobile: {
    min: '320px',
    max: '599px',
  },
  tablet: {
    min: '600px',
    max: '1023px',
  },
  pc: '1024px',
};

export const theme = {
  deviceSize: {
    mobile: `screen and (min-width: ${breakpoints.mobile.min}) and (max-width: ${breakpoints.mobile.max})`,
    tablet: `screen and (min-width: ${breakpoints.tablet.min}) and (max-width: ${breakpoints.tablet.max})`,
    pc: `screen and (min-width: ${breakpoints.pc})`,
  },
};
