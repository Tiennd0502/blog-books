export default {
  sizes: {
    xSmall: {
      fontSize: 'xSmall',
    },
    tiny: {
      fontSize: 'tiny',
    },
    small: {
      fontSize: 'small',
    },
    default: {
      fontSize: 'default',
    },
    medium: {
      fontSize: 'medium',
    },
    large: {
      fontSize: 'large',
    },
    xLarge: {
      fontSize: 'xLarge',
    },
  },
  variants: {
    default: {
      color: 'black.500',
      marginTop: '4px',
      marginBottom: '4px',
    },
    author: {
      fontStyle: 'italic',
    },
    title: {
      fontWeight: 'bold',
    },
  },
  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
