// components/templates/CartTemplate/styles.ts
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#555',
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 10,
    marginBottom: 12,
    elevation: 1,
  },

  imageContainer: {
    width: 72,
    height: 72,
    backgroundColor: '#F2F6FA',
    borderRadius: 12,
    marginRight: 12,
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

  titleWrap: { flex: 1, paddingRight: 8 },

  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111',
  },

  subtitle: {
    marginTop: 2,
    fontSize: 13,
    color: '#6D6D6D',
  },

  deleteIcon: {
    fontSize: 18,
    paddingHorizontal: 6,
    color: '#8B93A1',
  },

  footerRow: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
