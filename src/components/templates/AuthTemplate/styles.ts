import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';

export const styles = StyleSheet.create({
  image: { flex: 1 },
  container: {
    position: 'absolute',
    bottom: '0%',
    height: '60%',
    width: '100%',
    paddingHorizontal: spacing.x10,
    paddingVertical: spacing.x9,
    borderRadius: 20,
    backgroundColor: '#FFF9F7',
    borderColor: 'red',
  },
});
