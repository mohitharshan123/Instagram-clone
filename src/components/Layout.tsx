import React, {PropsWithChildren} from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';

const Layout: React.FC<PropsWithChildren> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
  },
});

export default Layout;
