import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';

function StoryList() {
  const stories = [
    {
      id: '1',
      title: 'Your Story',
      imageUrl:
        'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x700/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png',
    },
    {
      id: '2',
      title: 'Hari Lee',
      imageUrl:
        'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg',
    },
    {
      id: '3',
      title: 'Joey',
      imageUrl:
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg',
    },
    {
      id: '6',
      title: 'Changler Bing',
      imageUrl:
        'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x700/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png',
    },
    {
      id: '4',
      title: 'Monica Geller',
      imageUrl:
        'https://png.pngtree.com/png-vector/20221103/ourlarge/pngtree-man-businessman-retro-style-profile-comic-book-white-vector-png-image_20386644.jpg',
    },
    {
      id: '5',
      title: 'Ross',
      imageUrl:
        'https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/S/amzn-author-media-prod/t2d5l07m4io8oc22mfsm86bves._SY450_CR0%2C0%2C450%2C450_.jpg',
    },
    {
      id: '7',
      title: 'Rach',
      imageUrl:
        'https://cdn.vox-cdn.com/thumbor/q00D9hDukaGhKXc9ZhSEqQ5upys=/0x126:563x443/1600x700/cdn.vox-cdn.com/uploads/chorus_image/image/44281920/Screen_Shot_2014-12-01_at_12.35.05_PM.0.0.png',
    },

    // Add more stories here
  ];

  const ItemComponent = (props: {url: string; title: string}) => {
    return (
      <View>
        <Image source={{uri: props.url}} style={styles.storyImage} />
        <Text style={styles.storyText}>{props.title}</Text>
      </View>
    );
  };
  return (
    <View style={styles.storyList}>
      <Text style={styles.storyHeader}>Stories</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={stories}
        renderItem={({item}) => (
          <ItemComponent title={item.title} url={item.imageUrl} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  storyImage: {
    height: 70,
    width: 70,
    borderWidth: 3,
    borderColor: '#de00a9',
    borderRadius: 35,
    marginRight: 8,
    marginVertical: 10,
  },
  storyText: {
    textAlign: 'center',
  },
  storyList: {
    paddingHorizontal: 5,
  },
  storyHeader: {
    marginLeft: 8,
    fontSize: 15,
  },
});
export default StoryList;
