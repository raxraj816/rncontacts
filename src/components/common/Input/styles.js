import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderColor: colors.grey,
    borderWidth: 1,
    borderRadius: 4,
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  inputContainer: {
    paddingVertical: 12,
  },
  textInput: {
    flex: 1,
  },
});
