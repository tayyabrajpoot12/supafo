/* eslint-disable react-native/no-inline-styles */
import { useIsFocused } from '@react-navigation/native';
import React from 'react';
import {
  RefreshControl,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { colors } from '../utils/colors';
import Header from './Header';

const FocusAwareStatusBar = props => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar {...props} /> : null;
};

export const Layout = ({
  children,
  title,
  translucent = false,
  StatusBarBg = colors.mainBg,
  showNavBar = true,
  isSafeAreaView = true,
  containerStyle = {},
  barStyle = 'dark-content',
  animated = false,
  hideBar = false,
  layoutContainer,
  isScroll = true,
  footerComponent,
  refreshing,
  onRefresh,
  isRefresh,
  isBack,
  rightIcon,
}) => {
  //

  const Warp = isSafeAreaView ? SafeAreaView : View;
  const LayoutWrapper = isScroll ? KeyboardAwareScrollView : View;

  return (
    <Warp style={[styles.container, containerStyle]}>
      <FocusAwareStatusBar
        translucent={translucent}
        backgroundColor={StatusBarBg}
        barStyle={barStyle}
        animated={animated}
        hidden={hideBar}
      />
      {showNavBar && (
        <Header title={title} isBack={isBack} rightIcon={rightIcon} />
      )}

      <LayoutWrapper
        style={[{ flex: 1, paddingHorizontal: 22 }, layoutContainer]}
        refreshControl={
          isRefresh && (
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[colors.primaryColor]}
            />
          )
        }
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>{children}</View>
        {footerComponent}
      </LayoutWrapper>
    </Warp>
  );
};
export default Layout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
