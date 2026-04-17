// components/templates/CartTemplate/styles.ts
import { StyleSheet } from 'react-native';

import { spacing } from '../../../theme/spacing';
import { colors } from '../../../theme/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.x5,
    paddingVertical: spacing.x3,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textMuted,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: spacing.x6,
    padding: spacing.x4,
    marginBottom: spacing.x5,
    elevation: 1,
  },

  imageContainer: {
    width: 72,
    height: 72,
    backgroundColor: colors.white,
    borderRadius: spacing.x5,
    marginRight: spacing.x5,
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%', resizeMode: 'cover' },

  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },

  titleWrap: { flex: 1, paddingRight: spacing.x3 },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textStrong,
  },

  subtitle: {
    marginTop: spacing.x0,
    fontSize: 13,
    color: colors.textSubtle,
  },

  deleteIcon: {
    fontSize: 18,
    paddingHorizontal: spacing.x2,
    color: colors.iconMuted,
  },

  footerRow: {
    marginTop: spacing.x3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  emptyIcon: {
    marginBottom: 12,
    opacity: 0.4,
  },
});
