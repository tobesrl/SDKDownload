import React from "react";
import { Text } from "@rneui/themed";
import { View } from "react-native";
import { Structure } from "./Theme";

const AboutScreen: React.FC = () => {
  return (
    <View style={Structure.wrapper}>
      <Text h2>Abuot ToBe Dev Team</Text>
      <View style={[Structure.container, Structure.spaceEvenly]}>
        <Text>
          Salve! Siamo il team di sviluppo di Tobe e vorremmo condividere con
          voi la nostra passione per l'aggiornamento delle nostre SDK. Stiamo
          lavorando duramente per rendere disponibili tutte le SDK al pubblico,
          e siamo felici di annunciare che ogni nuovo aggiornamento verrà
          pubblicato sulla stessa pagina. Nel frattempo, sei invitato a
          scaricare quelle di cui hai bisogno da questa pagina.
        </Text>
        <Text>
          Ricorda che per qualsiasi problema puoi contattarci a
          <Text>developer@tobesrl.it</Text>
        </Text>
      </View>
    </View>
  );
};

export default AboutScreen;
