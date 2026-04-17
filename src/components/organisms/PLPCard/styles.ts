import { StyleSheet } from 'react-native';

import { colors } from '../../../theme/colors';
import { spacing } from '../../../theme/spacing';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: colors.white,
    borderRadius: spacing.x5,
    margin: spacing.x1,
    overflow: 'hidden',
  },

  imageWrap: {
    width: '100%',
    height: 210,
    backgroundColor: colors.white,
  },

  img: { width: '100%', height: '100%' },

  nameContainer: {
    paddingHorizontal: spacing.x5,
    paddingVertical: spacing.x4,
    minHeight: 90,
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: spacing.x1,
    height: 30,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
