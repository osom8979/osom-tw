export default () => {
  return {
    '.tooltip': {
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
