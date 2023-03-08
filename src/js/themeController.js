import { $ } from "./utils.js"

const btnTheme = $('#btn_theme');
const logoDark = $('#theme__logo_dark');
const logoLight = $('#theme__logo_light');

//switch theme
  btnTheme.addEventListener('click',({target})=>{
    if(btnTheme.dataset.theme === 'dark'){
      setLightPropertys();
      logoDark.classList.remove('none-display')
      logoLight.classList.add('none-display')
    }else{
      setDarkPropertys();
      logoDark.classList.add('none-display')
      logoLight.classList.remove('none-display')
    }
  }, true)

  function setLightPropertys(){
    document.documentElement.style.setProperty("--linearColorTheme", "radial-gradient(#f1f2f1, #c6c7c6)");
    document.documentElement.style.setProperty("--backGmodal", "#ffffff");
    document.documentElement.style.setProperty("--fontColor", "#000000");
    document.documentElement.style.setProperty("--font2Color", "#575757");
    document.documentElement.style.setProperty("--font3Color", "#d4f4d5");
    document.documentElement.style.setProperty("--footerColor", "#727d8b");
    document.documentElement.style.setProperty("--backGCard", "#ffffff");

    btnTheme.dataset.theme = 'ligth';
  }
  function setDarkPropertys(){
    document.documentElement.style.setProperty("--linearColorTheme", "radial-gradient(#2a4347, #132e3b)");
      
    document.documentElement.style.setProperty("--backGmodal", "#447881");
    document.documentElement.style.setProperty("--fontColor", "#d4f4d5");
    document.documentElement.style.setProperty("--font2Color", "#799e98");
    document.documentElement.style.setProperty("--footerColor", "#597575");
    document.documentElement.style.setProperty("--backGCard", "#d9f3ed");
    
    btnTheme.dataset.theme = 'dark';
  }