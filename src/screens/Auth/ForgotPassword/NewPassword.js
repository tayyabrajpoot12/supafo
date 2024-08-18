import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import fonts from '../../../assets/fonts';
import CustomButton from '../../../components/CustomButton';
import CustomInput from '../../../components/CustomInput';
import CustomText from '../../../components/CustomText';
import Layout from '../../../components/Layout';
import { className } from '../../../global-styles';
import { passwordRegex } from '../../../utils/constants';

const NewPassword = () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const init = {
    password: '',
    confirmPassword: '',
  };
  const inits = {
    passwordError: '',
    confirmPasswordError: '',
  };
  const [state, setState] = useState(init);
  const [errors, setErrors] = useState(inits);

  const array = [
    {
      id: 1,
      placeholder: 'Password',
      label: 'Create a password  (Required)',
      value: state.password,
      onChange: text => setState({ ...state, password: text }),
      error: errors?.passwordError,
    },
    // {
    //   id: 1.1,
    // },
    {
      id: 2,
      placeholder: 'Confirm Password',
      label: 'Re-enter your password  (Required)',
      value: state.confirmPassword,
      onChange: text => setState({ ...state, confirmPassword: text }),
      error: errors?.confirmPasswordError,
    },
  ];

  const errorCheck = useMemo(() => {
    return () => {
      let newErrors = {};
      if (!state.password) newErrors.passwordError = 'Enter New Password';
      else if (!passwordRegex.test(state.password))
        newErrors.passwordError =
          'Password must contain 1 number, 1 special character, Uppercase and 8 digits';
      else if (!state.confirmPassword)
        newErrors.confirmPasswordError = 'Please enter Password';
      else if (!passwordRegex.test(state.confirmPassword))
        newErrors.confirmPasswordError =
          'Password must contain 1 number, 1 special character, Uppercase and 8 digits';
      else if (state.password !== state.confirmPassword)
        newErrors.confirmPasswordError = 'Passwords do not match';
      setErrors(newErrors);
    };
  }, [state]);

  useEffect(() => {
    errorCheck();
  }, [errorCheck]);

  return (
    <Layout StatusBarBg="#fff">
      <CustomText
        label={'Reset Password'}
        fontFamily={fonts.bold}
        fontSize={20}
        marginTop={50}
      />
      <CustomText label={'Create your eight characters password to login'} />
      <CustomText
        label={params?.email}
        fontFamily={fonts.semiBold}
        marginBottom={25}
        fontSize={16}
        marginTop={-20}
      />
      {array.map(item => (
        <CustomInput
          key={item?.id}
          placeholder={item.placeholder}
          value={item.value}
          onChangeText={item.onChange}
          error={item.error}
          secureTextEntry
          withLabel={item.label}
        />
      ))}
      <CustomButton
        title={'Change Password'}
        onPress={() => navigation.navigate('Login')}
        customStyle={className('mt-5')}
        disabled={!Object.values(errors).every(error => error === '')}
      />
    </Layout>
  );
};

export default NewPassword;
