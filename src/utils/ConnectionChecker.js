import NetInfo from '@react-native-community/netinfo';

export const ConnectionChecker = async () => {
  try {
    const state = await NetInfo.fetch();
    return state.isConnected;
  } catch (error) {
    return false;
  }
};
