export default () => {
  return {
    // '@keyframes btn-pop': {
    //   '0%': {
    //     transform: 'scale(var(--btn-focus-scale, 0.98));',
    //   },
    //   '40%': {
    //     transform: 'scale(1.02);',
    //   },
    //   '100%': {
    //     transform: 'scale(1);',
    //   },
    // },
    '.btn': {
      height: '3rem',
      minHeight: '3rem',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      fontSize: '0.875rem',
      flexShrink: '0',
      cursor: 'pointer',
      userSelect: 'none',
      flexWrap: 'wrap',
      borderColor: 'transparent',
      textAlign: 'center',

      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      '@apply rounded-btn': '',

      '&-primary': {
        display: 'static',
      },
      '&-disabled': {
        display: 'static',
      },
      '&-outline': {
        display: 'static',
      },

      '&-xs': {
        height: '1.5rem',
        minHeight: '1.5rem',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        fontSize: '0.75rem',
      },
      '&-sm': {
        height: '2rem',
        minHeight: '2rem',
        paddingLeft: '0.75rem',
        paddingRight: '0.75rem',
        fontSize: '0.875rem',
      },
      '&-md': {
        height: '3rem',
        minHeight: '3rem',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        fontSize: '0.875rem',
      },
      '&-lg': {
        height: '4rem',
        minHeight: '4rem',
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
        fontSize: '1.125rem',
      },
      '&-wide': {
        width: '16rem',
      },
      '&-block': {
        width: '100%',
      },
    },
  };
};
