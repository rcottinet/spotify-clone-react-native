import React , {useRef} from 'react';
import {StyleSheet, View, Dimensions, Image, Animated,SafeAreaView} from 'react-native';
import {Text, Layout, Button, Icon} from '@ui-kitten/components';
import album from '../../SpotifyAssets/data/albumDetails';
import {ThemeContext} from '../../theme-context';
import BackButton from '../components/BackButton.component';

const MenuIcon = props => <Icon {...props} name="more-vertical-outline" />;
const PlayCircleOutlineIcone = props => <Icon {...props} name="play-circle-outline" />;

const AlbumScreen = ({navigator, route}) => {
  const scrollPosition = useRef(new Animated.Value(0)).current;
  const themeContext = React.useContext(ThemeContext);

  const minHeaderHeight = 150
  const maxHeaderHeight = 370
    
  const headerHeight = scrollPosition.interpolate({
    inputRange: [0, 500],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: 'clamp',
  });
  
  const opacity = scrollPosition.interpolate({
    inputRange: [0, 100, 200],
    outputRange: [1, 0.5, 0],
    extrapolate: 'clamp',
  });
  const invertOpacity = scrollPosition.interpolate({
    inputRange: [0, 100, 200],
    outputRange: [0, 0.5, 1],
    extrapolate: 'clamp',
  });
  const size = scrollPosition.interpolate({
    inputRange: [0, 100, 200, 300, 400],
    outputRange: [20, 17, 15, 13, 11],
    extrapolate: 'clamp',
  });
  const imageHeight = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [180, 60],
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const imagePosition = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [0, 150],
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const playButtonPosition = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [0, -43],
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const playButtonOpacity = scrollPosition.interpolate({
    inputRange: [0, 200],
    outputRange: [0, 0.25],
    extrapolate: 'clamp',
  });
  const titleTextPosition = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [0, 35],
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const headerBgColor = scrollPosition.interpolate({
    inputRange: [0, 400],
    outputRange: [ themeContext.theme === 'light' ? 'rgb(247,249,252)' : 'rgb(26,33,56)' , themeContext.theme === 'light' ? 'rgb(228,233,242)' : 'rgb(34,43,69)'],
  })
  const textColor = themeContext.theme === 'light' ? '#222B45' :'#FFFFFF' 

  return (
      <Layout style={styles.layout} level="2">
        
        <Animated.View style={{
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          paddingTop: 40,
          height: headerHeight,
          opacity: 1,
          backgroundColor: headerBgColor,
          display: 'flex',
          alignItems: 'center',
        }}>
          <Animated.Text style={{
              opacity: invertOpacity,
              fontWeight: "bold",
              fontSize: 25,
              color: textColor,
              zIndex: 5,
              transform: [{translateY: titleTextPosition}]
            }}>
            {album.name}
            </Animated.Text>
              
            <Animated.Image source={{uri: album.imageUri}} style={{
              margin: 10,
              height: imageHeight,
              width: imageHeight,
              transform: [{translateX: imagePosition}],
              borderRadius: 5,
            }} />
            <Animated.Text style={{
                opacity: opacity,
                fontSize: size,
                fontWeight: "bold",
                color: textColor,
                marginBottom: 5
              }}>
              {album.name}
            </Animated.Text>
            <Animated.View>
              <Button style={{
                  transform: [{translateY: playButtonPosition}],
                  height: 50,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: playButtonOpacity,
                  shadowRadius: 3.84,

                  elevation: 5,
              }}
              accessoryRight={PlayCircleOutlineIcone}
              >PLAY</Button>
             
            </Animated.View>
            <Animated.Text
              style={{
                opacity: opacity,
                fontSize: size,
                fontWeight: "bold",
                color: textColor,
                marginTop: 7
              }}
              appearance="hint">
              BY {album.by.toUpperCase()} - {album.numberOfLikes} LIKES
            </Animated.Text>
            
          </Animated.View>
        <Animated.ScrollView
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollPosition}}}],
            {useNativeDriver: false},
          )}
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
        
          <View style={styles.songList}>
            {album.songs.map((song, index) => (
              <View style={styles.songView} key={index}>
                <Image source={{uri: song.imageUri}} style={styles.imageSong} />
                <View style={styles.songDesc}>
                  <Text category="s1">{song.title}</Text>
                  <Text category="s2" appearance="hint" style={styles.artistSong}>
                    {song.artist}
                  </Text>
                </View>
                <View style={styles.songButton}>
                  <Button appearance="ghost" accessoryLeft={MenuIcon} />
                </View>
              </View>
            ))}
          </View>
        </Animated.ScrollView>
      </Layout>

  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  songList: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  songView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  songDesc: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  imageSong: {
    height: 80,
    width: 80,
  },
  titleSong: {},
  artistSong: {
    marginTop: 5,
  },
  songButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  layout: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
