import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { PermissionsAndroid, Platform } from 'react-native';
import { ToastMessage } from './ToastMessage';
import ApiRequest from '../services/ApiRequest';

export const regEmail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegex =
  /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{8,}$/;

export const imgUrl = 'https://7tracking.com/eclassify/images/';
export const GOOGLE_API_KEY = '';

export const uploadAndGetUrl = async (file, isNotImage) => {
  const body = new FormData();
  body.append('type', 'upload_data');

  if (!isNotImage) {
    const imageName = file.path.split('/');
    const imageData = {
      fileCopyUri: null,
      name:
        Platform.OS === 'ios'
          ? file?.filename
          : imageName[imageName?.length - 1],
      size: file?.size,
      type: file?.mime,
      uri: file?.path,
    };
    body.append('file', imageData);
  } else {
    body.append('file', file);
  }

  try {
    const res = await ApiRequest(body);
    if (res.data.result) {
      return res.data?.file_name;
    } else {
      ToastMessage('Upload Again');
      return '';
    }
  } catch (err) {
    console.log(err);
    ToastMessage('Upload Again');
  }
};

export const getToken = async () => {
  const status = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
  );
  const fcmToken = await AsyncStorage.getItem('fcmToken');
  if (!fcmToken) {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    const token = await messaging().getToken();
    await AsyncStorage.setItem('fcmToken', token);
  } else {
    return;
  }
};
