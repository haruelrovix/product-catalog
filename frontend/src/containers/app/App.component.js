import React, { Component } from 'react';
import { Text } from 'react-native';

export class AppView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { loading, catalogue } = this.props.data;
    return (
      loading ?
      <Text>Loading...</Text> :
      <Text>{catalogue.title}</Text>
    );
  }
}

export default AppView;
