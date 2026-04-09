import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.text,
    textAlign: 'center',
    marginBottom: spacing.x9,
  },
  error: {
    color: colors.error,
    marginBottom: spacing.x4,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: spacing.x6,
  },
  rowText: {
    fontSize: 14,
    color: colors.text,
  },
});
