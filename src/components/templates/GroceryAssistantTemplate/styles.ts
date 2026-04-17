import { Platform, StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.x9,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    marginBottom: spacing.x4,
  },
  error: {
    color: colors.error,
    marginTop: spacing.x4,
  },
  suggestions: {
    marginTop: spacing.x4,
    marginBottom: spacing.x3,
    paddingHorizontal: spacing.x3,
    fontSize: 14,
    lineHeight: 20,
    color: colors.placeholder,
  },
  empty: {
    marginTop: spacing.x10,
    textAlign: 'center',
    color: colors.placeholder,
  },
  row: {
    gap: spacing.x3,
    marginTop: spacing.x6,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.borderSubtle,
    borderRadius: spacing.x3,
    padding: spacing.x5,
    minHeight: 150,
    textAlignVertical: 'top',
    marginTop: 4,
  },

  titleRow: {
    width: '100%',
  },
  titleText: {
    flexShrink: 1,
    lineHeight: 22,
    includeFontPadding: false,
  },
  titleIcon: {
    marginLeft: 4,
    top: 2,
  },
});
