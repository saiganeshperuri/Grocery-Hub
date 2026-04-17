import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  image: { flex: 1 },
  container: {
    position: 'absolute',
    bottom: '0%',
    height: '60%',
    width: '100%',
    paddingHorizontal: spacing.x10,
    paddingVertical: spacing.x9,
    borderRadius: spacing.x10,
    backgroundColor: colors.white,
    borderColor: colors.error,
  },
});
