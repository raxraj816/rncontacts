import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Container from '../common/Container';
import CustomButton from '../common/CustomButton';
import Input from '../common/Input';
import {LOGIN} from '../../constants/routeNames';
import Message from '../common/Message';
import Icon from '../../components/common/Icon';
import styles from './styles';

const RegisterComponent = ({onSubmit, onChange, loading, error, errors}) => {
  const {navigate} = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = useState(true);

  return (
    <Container>
      <Image
        height={70}
        width={70}
        source={require('../../assets/images/logo.png')}
        style={styles.logoImage}
      />

      <View>
        <Text style={styles.title}>Welcome to RXContacts</Text>
        <Text style={styles.subTitle}>Create a free account</Text>

        <View style={styles.form}>
          {error?.error && (
            <Message retry danger retryFn={onSubmit} message={error?.error} />
          )}
          <Input
            label="Username"
            iconPosition="right"
            placeholder="Enter Username"
            error={errors?.userName || error?.username?.[0]}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label="First name"
            iconPosition="right"
            placeholder="Enter First name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors?.firstName || error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            iconPosition="right"
            placeholder="Enter Last name"
            error={errors?.lastName || error?.last_name?.[0]}
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
          />
          <Input
            label="Email"
            iconPosition="right"
            placeholder="Enter Email"
            error={errors?.email || error?.email?.[0]}
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
          />

          <Input
            label="Password"
            placeholder="Enter Password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry(prev => !prev);
                }}>
                {isSecureEntry ? (
                  <Icon
                    type="materialCommunity"
                    size={17}
                    name="eye-off-outline"
                  />
                ) : (
                  <Icon type="materialCommunity" size={17} name="eye-outline" />
                )}
              </TouchableOpacity>
            }
            iconPosition="right"
            error={errors?.password || error?.password?.[0]}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
          />

          <CustomButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            primary
            title="Submit"
          />

          <View style={styles.createSection}>
            <Text style={styles.infoText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={styles.linkBtn}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
