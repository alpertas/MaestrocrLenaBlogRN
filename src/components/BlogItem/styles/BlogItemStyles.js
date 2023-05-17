import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    flexDirection: 'column',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 10,
    backgroundColor: '#ECE9E6',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 10,
    elevation: 5,
    marginVertical: 20,
  },
  cardHeader: {
    aspectRatio: 1,
  },
  cardImage: {
    aspectRatio: 1,
    width: null,
    height: null,
  },
  cardBody: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
    marginBottom: 5,
  },
  cardFooter: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
});

export default styles;
