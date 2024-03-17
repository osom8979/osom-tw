export default () => {
  return {
    '.input': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',

      '&-primary': {
        display: 'static',
      },
      '&-error': {
        display: 'static',
      },
      '&-bordered': {
        display: 'static',
      },
      '&-disabled': {
        display: 'static',
      },
    },
  };
};
