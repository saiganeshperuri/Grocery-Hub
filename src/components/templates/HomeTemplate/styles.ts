import { StyleSheet } from 'react-native';
import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: spacing.x10,
  },

  container: {
    flex: 1,
    padding: spacing.x5,
  },

  header: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: spacing.x6,
    color: colors.text,
  },

  card: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: colors.white,
    marginBottom: spacing.x10,
    borderRadius: spacing.x2,
    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: 250,
  },

  labelBox: {
    borderTopWidth: 1,
    borderColor: colors.border,
    paddingVertical: spacing.x4,
    alignItems: 'center',
    backgroundColor: colors.white,
  },

  labelText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.text,
  },
});
