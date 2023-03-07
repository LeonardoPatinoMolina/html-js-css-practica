import { $ } from "./utils.js"

const btnTheme = $('#btn_theme');



  btnTheme.addEventListener('click',({target})=>{
    if(target.dataset.theme === 'dark'){
      document.documentElement.style.setProperty("--linearColorTheme", "radial-gradient(#f1f2f1, #c6c7c6)");
      
      document.documentElement.style.setProperty("--fontColor", "#000000");
      
      target.dataset.theme = 'ligth';
    }else{
      document.documentElement.style.setProperty("--linearColorTheme", "radial-gradient(#2a4347, #132e3b)");
      // document.documentElement.style.setProperty("--linearColorTheme", "radial-gradient(#555557, #2f3031)");
      
      document.documentElement.style.setProperty("--fontColor", "#d4f4d5");
      
      target.dataset.theme = 'dark';
    }

  }, true)