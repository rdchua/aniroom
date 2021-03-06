import React, {PureComponent, Component} from 'react';
import { StyleSheet, Dimensions, Text, View, Image} from 'react-native';
import StarRating from 'react-native-star-rating';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default class AnimeCard extends PureComponent {

    constructor(props){
        super(props)
        this.state = {
            isLoading: true,
            trendingAnime : []
        }
    }

    Capitalize(str){
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    render() {
        const anime = this.props.data;
        return (
            <View style={[styles.item, this.props.customStyle]}>
                <Image resizeMode='cover' resizeMethod='resize' borderTopRightRadius={4} borderTopLeftRadius={4} source={{uri: anime.attributes.posterImage ? anime.attributes.posterImage.large: 'http://fakeimg.pl/150x170/#212121?font=lobster' }} style={styles.image}/>
                <View style={styles.infoContainer}>
                    <Text numberOfLines={2} style={styles.title}>{anime.attributes.canonicalTitle}</Text>
                    {
                        anime.attributes.averageRating ?
                        <Text style={styles.rating}>{anime.attributes.averageRating}%</Text> : null
                    }
                    <View style={styles.row}>
                        <Text style={styles.likes}>{this.Capitalize(anime.attributes.subtype)}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    item: {
        marginRight: 10,
        borderRadius: 4,
        height: 235,
        width: 120,
        elevation: 6,
        backgroundColor: '#212121',
    },
    image: {
        height: 150,
    },
    spotlightTitle: {
        fontSize: 24,
        color: 'white',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    infoContainer: {
        padding: 10
    },
    title: {
        fontFamily: 'GoogleSans-Medium',
        maxWidth: '85%',
        fontSize: 13,
        paddingRight: 20,
        color: 'white',
        marginTop: 2
    },
    rating: {
        fontSize: 12,
        color: '#888',
    },
    star: {
        marginTop: 2,
    },
    likes: {
        marginTop: 2,
        fontFamily: 'GoogleSans-Medium',
        fontSize: 11, 
        color: '#888',
    }
});
