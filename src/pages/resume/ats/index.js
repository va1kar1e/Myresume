import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import {
  Page,
  Text,
  View,
  Image,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import mydata from "@mydata";
// import ProfileImage from "@images/profile.jpg";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    font: "12pt Times",
    margin: 1,
    textAlign: "justify",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  img: {
    alignItems: "center",
    flexGrow: 1,
  },
  profileimg: {
    width: "128px",
    height: "128px",
  },
});

class ResumeATS extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ats_link: "",
    };
  }

  componentDidMount() {
    this.setState({
      ats_link: mydata["profile"]["resume"]["ats"],
    });
  }

  // Create Document Component
  render() {
    const { innerWidth: width, innerHeight: height } = window;
    const { ats_link } = this.state;
    return (
      <Fragment>
        <PDFViewer width={width} height={height} className="">
          <Document title="ats" author="ss" file="/ats.pdf">
            <Page
              size="A4"
              orientation="portrait"
              pageIndex={1}
              styles={styles.page}
            >
              <View styles={styles.section}>
                <View styles={styles.img}>
                  <Image
                    src={"https://bulma.io/images/placeholders/256x256.png"}
                    styles={styles.profileimg}
                  />
                </View>
                <Text>
                  En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
                  no ha mucho tiempo que vivía un hidalgo de los de lanza en
                  astillero, adarga antigua, rocín flaco y galgo corredor. Una
                  olla de algo más vaca que carnero, salpicón las más noches,
                  duelos y quebrantos los sábados, lentejas los viernes, algún
                  palomino de añadidura los domingos, consumían las tres partes
                  de su hacienda. El resto della concluían sayo de velarte,
                  calzas de velludo para las fiestas con sus pantuflos de lo
                  mismo, los días de entre semana
                </Text>
                <Text>
                  En un lugar de la Mancha, de cuyo nombre no quiero acordarme,
                  no ha mucho tiempo que vivía un hidalgo de los de lanza en
                  astillero, adarga antigua, rocín flaco y galgo corredor. Una
                  olla de algo más vaca que carnero, salpicón las más noches,
                  duelos y quebrantos los sábados, lentejas los viernes, algún
                  palomino de añadidura los domingos, consumían las tres partes
                  de su hacienda. El resto della concluían sayo de velarte,
                  calzas de velludo para las fiestas con sus pantuflos de lo
                  mismo, los días de entre semana
                </Text>
              </View>
            </Page>
          </Document>
        </PDFViewer>
        <Switch>
          <Route
            path="/resume/ats/download"
            component={() => {
              window.location.href = "/files/" + ats_link;
              return null;
            }}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default ResumeATS;
