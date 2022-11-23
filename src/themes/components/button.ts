export default {
  sizes: {
    default: {
      px: '4px',
      py: '8px',
    },
  },

  baseStyle: {
    bg: 'blue.700',
    color: 'white',
    _hover: {
      bg: 'orange.500',
    },
  },

  variants: {
    default: {
      bg: 'blue.700',
      color: 'white',

      _hover: {
        bg: 'orange.500',
      },
    },
    warning: {
      bg: 'oarage.700',
      color: 'white',
      _hover: {
        bg: 'blue.700',
      },
    },
    unstyled: {
      marginLeft: '12px',
      _hover: {
        bg: 'none',
      },
    },
  },

  defaultProps: {
    size: 'default',
    variant: 'default',
  },
};
