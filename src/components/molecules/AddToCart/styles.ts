import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 4,
    marginBottom: 6,
  },

  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '#1653cd',
    borderRadius: 18,

    height: 32,
    paddingHorizontal: 12,
    minWidth: 80,
  },

  addText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  stepBtn: {
    paddingHorizontal: 6,
  },

  stepText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  qty: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
    marginHorizontal: 8,
  },
});
