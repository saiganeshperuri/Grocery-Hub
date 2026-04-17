import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';

export const styles = StyleSheet.create({
  wrapper: { position: 'relative', justifyContent: 'center' },

  // Places the icon aligned with the input’s baseline (like before)
  toggle: {
    position: 'absolute',
    right: 0,
    bottom: spacing.x9 + 2, // matches the vertical rhythm of your Input
    padding: spacing.x1,
  },

  icon: {
    width: 22,
    height: 22,
    opacity: 0.9,
    marginBottom: spacing.x3,
  },
});
