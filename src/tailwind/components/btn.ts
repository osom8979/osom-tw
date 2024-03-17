export default () => {
  return {
    '.btn': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&-primary': {
        display: 'static',
      },
      '&-disabled': {
        display: 'static',
      },
      '&-outline': {
        display: 'static',
      },
    },
  };
};
