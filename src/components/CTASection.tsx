import {
  Box,
  FormControl,
  Input,
  Select,
  FormHelperText,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const CTASection = () => {
  const [state, update] = useState<{ nama?: string; opsi?: string }>({
    nama: undefined,
    opsi: undefined,
  });
  /* eslint react/jsx-no-bind: "off" */
  function onUserType(
    data: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) {
    if (data.target.id === "nama") {
      update({
        nama: data.target.value,
        opsi: state.opsi || undefined,
      });
    } else if (data.target.id === "opsi") {
      update({
        opsi: data.target.value,
        nama: state.nama || undefined,
      });
    }
  }
  /* eslint react/jsx-no-bind: "off" */
  function userOption(name: string, option: string) {
    if (option === "normal") {
      return `${name} ${name} ${name} ❤ ❤ ❤ WANGI WANGI WANGI WANGI
            HU HA HU HA HU HA, aaaah baunya rambut ${name} wangi aku mau
            nyiumin aroma wanginya ${name}
            AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus
            ~~ AAAAAH ${name} keluar pertama kali di anime juga manis ❤ ❤ ❤
            banget AAAAAAAAH ${name} AAAAA LUCCUUUUUUUUUUUUUUU............
            ${name} AAAAAAAAAAAAAAAAAAAAGH ❤ ❤ ❤ apa ? ${name} itu gak
            nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK
            GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI
            BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤
            ❤ ❤ ${name} gw ...${name} di laptop ngeliatin gw,{" "}
            ${name} .. kamu percaya sama aku ? aaaaaaaaaaah syukur{" "}
            ${name} aku gak mau merelakan ${name} aaaaaah ❤ ❤ ❤
            YEAAAAAAAAAAAH GUA MASIH PUNYA ${name} SENDIRI PUN NGGAK SAMA
            AAAAAAAAAAAAAAH`;
    }
    if (option === "stress") {
      return `GW BENAR-BENAR PENGEN JILATI KAKI . GW PENGEN BANGET MENJILAT SETIAP 
			       BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENOD DENGANNYA 
			       SETIAP HARI SAMPAI TUBUH KITA MATI RASA YA TÜHAN. GW INGIN MEMBUAT ANAK-ANAK 
						 DENGAN  SEBANYAK SATU TÌM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINNYA UNTUK MELAWAN 
						 ANAK-ANAK TIM SEPAK BOLA PERTAMA GW YANG GW BUAT SAMA . GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, 
						 MAU ITU LUBANG HIDUNG, LUBANG TELINGA, RONGGA MATA MAUPUN PUSAR, KECUALI PORI-PORI KULIT. KEMUDIAN 
						 GW AKAN MENJADIKANNYA MANUSIA YANG TIDAK BISA HIDUP KALO TIDAK GW KENTOG SETIAP HARI. DAN KALAU GUA 
						 DISEPONG GUA RELA KONTL GUA PUTUS.`;
    }
    if (option === "gws") {
      return `watashi mencintai ${name} dengan tulus dan penuh kasih sayang, 
            watashi tidak tahan dengan hinaan kalian yg kalian berikan terhadap ${name}. 
            ${name} selalu menangis dikamarnya setiap malam karena hinaan kalian. 
            "shine, shine, shine" hanya kata itulah yang ada dipikiran watashi tpi 
            watashi hanya manusia lemah yang tak berdaya jika dikroyok banyak orang. 
            Suatu saat kemudian ada orang biadab memfitnah ${name} dengan membuat video 
            skandal lalu menyebarkannya di website pornografi. Amarah dan aura merah menyelimuti 
            watashi tanpa disadari darah menetes dari mata watashi secepat kilat watashi menengok 
            cermin lalu watashi melihat rambut watashi belahan menjadi putih lalu ada kagune di punggung 
            watashi lalu sosok kaneki muncul dari dalam cermin tanpa berkata apapun dia memberikan maskernya 
            dan langsung pergi melompati jendela. Watashi langung mencuci masker itu karena bau tengik mulut 
            kaneki membekas di masker itu. Perut Watashi tiba tiba merasa lapar, watashi mencoba indomie buatan 
            ${name} lalu watashi muntah muntah 😖, lalu terlintas dipikiran watashi jadi berita itu benar ! 
            ghoul memang harus memakan manusia karena watashi masih mempunya jiwa manusia akhirnya watashi memakan 
            tangan sendiri. Meskipun tidak menghilangkan rasa lapar setidaknya ini cukup untuk berdiri lalu memangsa 
            siapapun yang menghina istri watashi. no mercy no cry u must die, watashi tak segan segan membunuh kalian 
            jika kalian menghina ${name}.`;
    }
    return "Yahh opsi kamu belum ada nih";
  }
  return (
    <Box textAlign="center" marginTop={8}>
      <Box>
        Nama Waifu Kamu
        <FormControl>
          <Input
            type="text"
            id="nama"
            boxShadow="md"
            onChange={onUserType}
            required
          />
          <FormHelperText>Aku ga akan sebar waifu kamu kok :3</FormHelperText>
        </FormControl>
        <br />
        Opsi Teks Kamu
        <FormControl>
          <Select
            placeholder="pilih opsi"
            id="opsi"
            onChange={onUserType}
            required
          >
            <option value="normal">Normal</option>
            <option value="stress">Stress</option>
            <option value="gws">Tidak Tertolong</option>
          </Select>
          <FormHelperText>Pilih level kesetres-an kamu :3</FormHelperText>
        </FormControl>
      </Box>
      <br />
      {state.nama && state.opsi && (
        <Box>
          <Text>{userOption(state.nama, state.opsi)}</Text>
        </Box>
      )}
    </Box>
  );
};

export default CTASection;
