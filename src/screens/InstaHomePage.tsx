import React from 'react';
import HomePageHeader from '../components/HomePageHeader';
import StoryList from '../components/StoryList';
import {View} from 'react-native';

const InstaHomePage = () => {
  return (
    <View>
      <HomePageHeader />
      <StoryList />
    </View>
  );
};

export default InstaHomePage;
