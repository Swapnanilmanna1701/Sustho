import { loader } from "@monaco-editor/react";

const monacoThemes: Record<string, string> = {
  active4d: "Active4D",
  "all-hallows-eve": "All Hallows Eve",
  amy: "Amy",
  "birds-of-paradise": "Birds of Paradise",
  blackboard: "Blackboard",
  "brilliance-black": "Brilliance Black",
  "brilliance-dull": "Brilliance Dull",
  "chrome-devtools": "Chrome DevTools",
  "clouds-midnight": "Clouds Midnight",
  clouds: "Clouds",
  cobalt: "Cobalt",
  dawn: "Dawn",
  dreamweaver: "Dreamweaver",
  eiffel: "Eiffel",
  "espresso-libre": "Espresso Libre",
  github: "GitHub",
  idle: "IDLE",
  katzenmilch: "Katzenmilch",
  "kuroir-theme": "Kuroir Theme",
  lazy: "LAZY",
  "magicwb--amiga-": "MagicWB (Amiga)",
  "merbivore-soft": "Merbivore Soft",
  merbivore: "Merbivore",
  "monokai-bright": "Monokai Bright",
  monokai: "Monokai",
  "night-owl": "Night Owl",
  oceanicNext: "Oceanic Next",
    pastelsOnDark : "Pastels on Dark",
    slushAndPoppies : "Slush and Poppies",
    solarizedDark : "Solarized-dark",
    solarizedLight : "Solarized-light",
    spacecadet : "SpaceCadet",
    sunburst : "Sunburst",
    textmateMacClassic : "Textmate (Mac Classic)",
    tomorrowNightBlue : "Tomorrow-Night-Blue",
    tomorrowNightBright : "Tomorrow-Night-Bright",
    tomorrowNightEighties : "Tomorrow-Night-Eighty",
    tomorrowNight : "Tomorrow-Night",
    tomorrow : "Tomorrow",
   twilight :"Twilight", 
   upstreamSunburst :"Upstream Sunburst", 
   vibrantInk :"Vibrant Ink", 
   xcodeDefault :"Xcode_default", 
   zenburnesque :"Zenburnesque", 
   iplastics :"iPlastic", 
   idlefingers :"idleFingers" ,  
   krtheme:"krTheme" ,  
   monoindustrial:"monoindustrial"
};

const defineTheme = (theme: string): Promise<void> => {
  return new Promise((res) => {
    Promise.all([
      loader.init(),
      import(`monaco-themes/themes/${monacoThemes[theme]}.json`),
    ]).then(([monaco, themeData]) => {
      monaco.editor.defineTheme(theme, themeData);
      res();
    });
  });
};

export { defineTheme };