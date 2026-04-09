import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    margin: 4,
    overflow: 'hidden',
  },

  imageWrap: {
    width: '100%',
    height: 210,
    backgroundColor: '#F2F2F2',
  },

  img: { width: '100%', height: '100%' },

  nameContainer: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    minHeight: 90,
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    height: 30,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginTop: 2,
  },
});
