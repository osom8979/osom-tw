export default () => {
  return {
    '.menu': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&-horizontal': {
        flexDirection: 'row',
      },

      '&-vertical': {
        flexDirection: 'column',
      },
    },
  };
};
