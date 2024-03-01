/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens:{
      'iphone':{"min":'300px', "max":'471px'},
      "iphonexr":{'min':'411px', "max":"417px"},
      "iphonese":{'min':'374px', "max":'471px'},
      'iphone12':{'max':"391px"}
      // 'tablette':{'min':'641px', 'max':'1024px'},
      // 'latop':{"min":"1025px","max":"1280px"},
      // 'destop':{"min":"1280px","max":"1536px"},
     
    },
    // backgroundImage:{
    //   "publogo":"url('./images/ImgPub/contactAssist.jpg')"
    // }
  },
  plugins: [],
}

