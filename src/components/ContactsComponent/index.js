import React from 'react';
import {View, Text} from 'react-native';
import AppModal from '../common/AppModal';
import CustomButton from '../common/CustomButton';

const ContactsComponent = ({modalVisible, setModalVisible}) => {
  return (
    <View>
      <AppModal
        modalFooter={<></>}
        modalBody={
          <View>
            <Text>Hello from modal</Text>
          </View>
        }
        title="My Profile"
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <CustomButton
        title="open modal"
        secondary
        onPress={() => {
          setModalVisible(true);
        }}
      />
    </View>
  );
};

export default ContactsComponent;
