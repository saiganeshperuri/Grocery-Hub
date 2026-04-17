import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    marginTop: spacing.x1,
    marginBottom: spacing.x2,
  },

  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.primaryDark,
    borderRadius: spacing.x8,

    height: 32,
    paddingHorizontal: spacing.x5,
    minWidth: 80,
  },

  addText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
  },

  stepBtn: {
    paddingHorizontal: spacing.x2,
  },

  stepText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '700',
  },

  qty: {
    color: colors.white,
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal: spacing.x3,
  },
});
