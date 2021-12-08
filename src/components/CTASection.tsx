import {
  Box,
  FormControl,
  Input,
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
const CTASection = () => {
  const [state, update] = useState<{ nama?: string }>({ nama: undefined });

  function onUserType(data: ChangeEvent<HTMLInputElement>) {
    if (data.target.id === "nama") {
      update({
        nama: data.target.value,
      });
    }
  }
  return (
    <Box textAlign="center" marginTop={8}>
      <Box>
        Nama Waifu Kamu
        <FormControl id="nama">
          <Input type="text" boxShadow="md" onChange={onUserType} />
          <FormHelperText>Aku ga akan sebar waifu kamu kok :3</FormHelperText>
        </FormControl>
      </Box>
      <br />
      {state.nama && (
        <Box>
          <Text>
            {state.nama} {state.nama} {state.nama} ❤ ❤ ❤ WANGI WANGI WANGI WANGI
            HU HA HU HA HU HA, aaaah baunya rambut {state.nama} wangi aku mau
            nyiumin aroma wanginya {state.nama}
            AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus
            ~~ AAAAAH {state.nama} keluar pertama kali di anime juga manis ❤ ❤ ❤
            banget AAAAAAAAH {state.nama} AAAAA LUCCUUUUUUUUUUUUUUU............
            {state.nama} AAAAAAAAAAAAAAAAAAAAGH ❤ ❤ ❤ apa ? {state.nama} itu gak
            nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK
            GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI
            BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤
            ❤ ❤ {state.nama} gw ...{state.nama} di laptop ngeliatin gw,{" "}
            {state.nama} .. kamu percaya sama aku ? aaaaaaaaaaah syukur{" "}
            {state.nama} aku gak mau merelakan {state.nama} aaaaaah ❤ ❤ ❤
            YEAAAAAAAAAAAH GUA MASIH PUNYA {state.nama} SENDIRI PUN NGGAK SAMA
            AAAAAAAAAAAAAAH
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default CTASection;
