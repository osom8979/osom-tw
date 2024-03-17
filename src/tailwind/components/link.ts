export default () => {
  return {
    '.link': {
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
