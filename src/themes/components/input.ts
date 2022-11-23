export default {
  variants: {
    withAddon: {
      field: {
        fontFamily: `'poppins', sans-serif`,
        fontSize: 'small',
        height: '34px',
        padding: '0 8px',
        borderRadius: '4px',
        borderColor: 'grey.500',
        borderWidth: '1px',
        borderStyle: 'solid',
        _focusVisible: {
          borderWidth: '2px',
          borderColor: 'black.500',
        },
      },
    },
  },
  defaultProps: {
    variant: 'withAddon',
  },
};
