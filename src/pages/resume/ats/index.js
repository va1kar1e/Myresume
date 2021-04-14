import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    font: "12pt Times",
    margin: 0,
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const ResumeATS = () => (
  <PDFViewer width="100%" height="100%" className="">
    <Document title="" author="">
      <Page size="A4" orientation="portrait" pageIndex={1}>
        <View styles={styles.section}>
          <Text>
            En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
            mucho tiempo que vivía un hidalgo de los de lanza en astillero,
            adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
            vaca que carnero, salpicón las más noches, duelos y quebrantos los
            sábados, lentejas los viernes, algún palomino de añadidura los
            domingos, consumían las tres partes de su hacienda. El resto della
            concluían sayo de velarte, calzas de velludo para las fiestas con
            sus pantuflos de lo mismo, los días de entre semana
          </Text>
          <Text>
            En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
            mucho tiempo que vivía un hidalgo de los de lanza en astillero,
            adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
            vaca que carnero, salpicón las más noches, duelos y quebrantos los
            sábados, lentejas los viernes, algún palomino de añadidura los
            domingos, consumían las tres partes de su hacienda. El resto della
            concluían sayo de velarte, calzas de velludo para las fiestas con
            sus pantuflos de lo mismo, los días de entre semana
          </Text>
          <Text>
            En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
            mucho tiempo que vivía un hidalgo de los de lanza en astillero,
            adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
            vaca que carnero, salpicón las más noches, duelos y quebrantos los
            sábados, lentejas los viernes, algún palomino de añadidura los
            domingos, consumían las tres partes de su hacienda. El resto della
            concluían sayo de velarte, calzas de velludo para las fiestas con
            sus pantuflos de lo mismo, los días de entre semana
          </Text>
          <Text>
            En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
            mucho tiempo que vivía un hidalgo de los de lanza en astillero,
            adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
            vaca que carnero, salpicón las más noches, duelos y quebrantos los
            sábados, lentejas los viernes, algún palomino de añadidura los
            domingos, consumían las tres partes de su hacienda. El resto della
            concluían sayo de velarte, calzas de velludo para las fiestas con
            sus pantuflos de lo mismo, los días de entre semana
          </Text>
          <Text>
            En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
            mucho tiempo que vivía un hidalgo de los de lanza en astillero,
            adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
            vaca que carnero, salpicón las más noches, duelos y quebrantos los
            sábados, lentejas los viernes, algún palomino de añadidura los
            domingos, consumían las tres partes de su hacienda. El resto della
            concluían sayo de velarte, calzas de velludo para las fiestas con
            sus pantuflos de lo mismo, los días de entre semana
          </Text>
          <Text>
            En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
            mucho tiempo que vivía un hidalgo de los de lanza en astillero,
            adarga antigua, rocín flaco y galgo corredor. Una olla de algo más
            vaca que carnero, salpicón las más noches, duelos y quebrantos los
            sábados, lentejas los viernes, algún palomino de añadidura los
            domingos, consumían las tres partes de su hacienda. El resto della
            concluían sayo de velarte, calzas de velludo para las fiestas con
            sus pantuflos de lo mismo, los días de entre semana
          </Text>
        </View>
      </Page>
    </Document>
  </PDFViewer>
);

export default ResumeATS;
