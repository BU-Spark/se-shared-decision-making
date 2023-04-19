import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getLanguageKey, language_config} from "../../utils/axios_config";
import { store } from "../../redux/store";

export default function BasicSelect() {
  console.log(localStorage.getItem("language"))
  const [lang, setlang] = React.useState(localStorage.getItem("language"));

  const handleChange = (event: SelectChangeEvent) => {
    setlang(event.target.value as string);
  };
  //Used for the dropdown button in the navigation menu, to be a trigger for Strapi content, i.e. when Spanish selected, switches to Spanish version, etc.

  //Localstorage
  React.useEffect(() => {
    localStorage.setItem("language", getLanguageKey(lang));
    window.dispatchEvent(new Event('storage'))
    console.log(localStorage.getItem("language"))
  }, [lang]);


  React.useEffect(() => {
    if(localStorage.getItem("language")){
      setlang(localStorage.getItem("language"))
    }else{
      setlang("English")
    }
  },[])

  return (
    <Box sx={{ minWidth: 120 }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={lang?lang:"English"}
        onChange={handleChange}
      >
        <MenuItem value={"English"}>English</MenuItem>
        <MenuItem value={"Español"}>Español</MenuItem>
        <MenuItem value={"Kreyòl Ayisyen"}>Kreyòl Ayisyen</MenuItem>
      </Select>
    </Box>
  );
}
