import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 32,
    backgroundColor: '#F2F2F2'
  },

  main: {
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: '#322153',
    fontSize: 32,
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: 260,
    marginTop: 64,
  },

  text: {
    color: '#322153',
    fontSize: 24,
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: 260,
    marginTop: 64,
  },

  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 24
  },

  button: {
    backgroundColor: '#431E93',
    height: 60,
    flexDirection: 'row',
    borderRadius: 50,
    overflow: 'hidden',
    alignItems: 'center',
    marginTop: 8,
  },

  buttonText: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: 16,
  },

  item: {
    padding: 88,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16,
  },

  itemTitle: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
    textAlign: 'left'
  },
});

export default styles;
