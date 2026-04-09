import { StyleSheet } from 'react-native';
import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.x6,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: spacing.x9,
  },
  text: { color: colors.white, fontSize: 16, fontWeight: '600' },
  disabled: { opacity: 0.7 },
});
