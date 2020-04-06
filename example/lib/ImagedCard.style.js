export const _cardStyle = (backgroundColor) => ({
  width: 250,
  height: 350,
  backgroundColor,
  borderRadius: 300,
  marginRight: "auto",
  alignItems: "center",
});

export default {
  container: {
    backgroundColor: "transparent",
  },
  imageStyle: {
    left: 40,
    top: -72,
    width: 200,
    height: 200,
    zIndex: 9999,
    position: "absolute",
  },
  cardContainerGlue: {
    left: 36,
    top: "30%",
    marginRight: "auto",
  },
  starContainer: {
    flexDirection: "row",
  },
  topTitleContainer: {
    marginTop: 12,
    flexDirection: "row",
  },
  regionTextStyle: {
    fontSize: 13,
    color: "#bfb799",
    fontWeight: "600",
  },
  dividerStyle: {
    fontSize: 13,
    paddingLeft: 16,
    paddingRight: 16,
    color: "#bfb799",
    fontWeight: "600",
  },
  subregionTextStyle: {
    fontSize: 13,
    color: "#bfb799",
    fontWeight: "600",
  },
  titleTextStyle: {
    fontSize: 28,
    marginTop: 12,
    fontWeight: "bold",
  },
  descContainer: {
    width: "95%",
    marginTop: 52,
  },
  descTextStyle: {
    fontSize: 14,
    color: "#bababa",
    fontWeight: "600",
  },
};
