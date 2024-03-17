export default () => {
  return {
    '.badge': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&-primary': {
        display: 'static',
      },
      '&-disabled': {
        display: 'static',
      },
    },
  };
};
