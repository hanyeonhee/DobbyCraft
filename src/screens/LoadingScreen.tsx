import { inject, observer } from 'mobx-react';
import * as React from 'react';
import { NavigationScreenProp, SafeAreaView } from 'react-navigation';
import Loading from '../components/Loading';
import { UserStoreType } from '../store/UserStore';

interface LoadingScreenProps {
  navigation: NavigationScreenProp<{}>;
  UserStore: UserStoreType;
}

@inject('UserStore')
@observer
class LoadingScreen extends React.Component<LoadingScreenProps> {
  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </SafeAreaView>
    );
  }
}

export default LoadingScreen;