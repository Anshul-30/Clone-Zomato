import {Linking, Platform} from 'react-native';

export const openGps = (lat, lng) => {
  const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
  const latLng = `${lat},${lng}`;
  const label = 'Custom Label';
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
};

export function dialCall(phoneNumber) {
  if (Platform.OS === 'android') {
    phoneNumber = `tel:${phoneNumber}`;
  } else {
    phoneNumber = `telprompt:${phoneNumber}`;
  }

  Linking.openURL(phoneNumber);
}

export function openBrowser(url) {
  Linking.openURL(url).catch(error => {
    showError(strings.COULD_NOT_LOAD_PAGE);
  });
}

export function openEmail(email) {
  Linking.openURL(`mailto:${email}`);
}

//Option locations of app in setting

export function openAppSetting(path) {
  if (Platform.OS == 'ios') {
    Linking.openURL(`App-Prefs:${path}`);
  } else {
    Linking.openSettings();
  }
}
