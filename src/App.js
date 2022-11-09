import './App.css';
import '@aws-amplify/ui-react/styles.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from '@aws-amplify/ui-react';

function App(signOut) {
  return (
    <div className='App'>
      <div>
        <ul className='menu-bar'>
          <li>
            <a className='menu-bar-item' href='.'>
              Rhodes Island
            </a>
          </li>
          <li>
            <a className='menu-bar-item' href='.'>
              Operator Profile
            </a>
          </li>
          <li>
            <a className='menu-bar-item' href='.'>
              Bridge - Exploration of Arts
            </a>
          </li>
          <li>
            <a className='menu-bar-item' href='.'>
              Voice From The Deep
            </a>
          </li>
        </ul>
      </div>

      <div className='main'>
        <div className='title'>
          <h1>Welcome Aboard!</h1>
        </div>
        <div className='title-content'>
          <p>This is just some random place holder of the content</p>
        </div>
      </div>
      <View className='App'>
        <Card>
          <Heading level={1}>We now have Auth!</Heading>
        </Card>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
    </div>
  );
}

export default withAuthenticator(App);
