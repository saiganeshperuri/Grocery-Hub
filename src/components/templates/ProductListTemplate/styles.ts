import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';

export const styles = StyleSheet.create({
  container: { paddingHorizontal: spacing.x3, paddingBottom: spacing.x3 },
  row: { gap: spacing.x3, paddingTop: spacing.x3 },
  cell: { flex: 1 },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
