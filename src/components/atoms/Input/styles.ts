import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1.3,
    borderBottomColor: colors.border,
    paddingVertical: spacing.x4,
    fontSize: 16,
    color: colors.text,
    marginBottom: spacing.x9 + spacing.x4, // ≈22
  },
});
