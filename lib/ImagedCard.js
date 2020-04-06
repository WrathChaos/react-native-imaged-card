import React from "react";
import PropTypes from "prop-types";
import { Text, View, Image } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, { _cardStyle } from "./ImagedCard.style";

const ImagedCard = (props) => {
  const {
    stars,
    descText,
    starColor,
    titleText,
    regionText,
    imageSource,
    dividerStyle,
    subregionText,
    descTextStyle,
    titleTextStyle,
    backgroundColor,
    regionTextStyle,
    subregionTextStyle,
  } = props;

  renderContentContainer = () => (
    <View>
      <Text style={titleTextStyle || styles.titleTextStyle}>{titleText}</Text>
      <View style={styles.descContainer}>
        <Text style={descTextStyle || styles.descTextStyle}>{descText}</Text>
      </View>
    </View>
  );

  renderTopTitleContainer = () => (
    <View style={styles.topTitleContainer}>
      <Text style={regionTextStyle || styles.regionTextStyle}>
        {regionText}
      </Text>
      <Text style={dividerStyle || styles.dividerStyle}>|</Text>
      <Text style={subregionTextStyle || styles.subregionTextStyle}>
        {subregionText}
      </Text>
    </View>
  );

  renderStars = () => (
    <View style={styles.starContainer}>
      {Array.from({ length: stars }, (value, key) => (
        <Icon
          key={key}
          size={13}
          name="star"
          color={starColor}
          type="FontAwesome"
          style={{ marginLeft: key !== 0 && 3 }}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Image
        source={imageSource}
        resizeMode="contain"
        style={styles.imageStyle}
      />
      <View style={_cardStyle(backgroundColor)}>
        <View style={styles.cardContainerGlue}>
          {this.renderStars()}
          {this.renderTopTitleContainer()}
          {this.renderContentContainer()}
        </View>
      </View>
    </View>
  );
};

ImagedCard.propTypes = {
  stars: PropTypes.number,
  descText: PropTypes.string,
  titleText: PropTypes.string,
  starColor: PropTypes.string,
  regionText: PropTypes.string,
  subregionText: PropTypes.string,
  backgroundColor: PropTypes.string,
};

ImagedCard.defaultProps = {
  stars: 5,
  starColor: "#e58450",
  regionText: "Alaskan",
  subregionText: "350g",
  titleText: "Pine Nut",
  backgroundColor: "#fffae8",
  descText: "Pine nut, also known as Castanea mollissima ...",
};

export default ImagedCard;
