import recipes from "./thumbs/recipes.png";
import gadgets from "./thumbs/gadgets.jpg";
import weather from "./thumbs/weather.png";
import atlas from "./thumbs/atlas.jpg";
import morning from "./thumbs/morning.png";
import common from "./thumbs/common.jpg";

export const projectsData = [
  {
    name: "Common.com Multi-Step Search",
    description:
      "Recreated this multi-step search from Common.com using Next.js while practicing Redux and Redux-toolkit for state management",
    image: common,
    stack: ["Next.js", "Styled-Components", "Redux"],
    source: "https://common-search-react.netlify.app/",
    code: "https://github.com/thanosoncode/common-clone-react",
  },
  {
    name: "Morning Pages Clone",
    description:
      "Recreated this full-stack app using React.js, Styled Components and Firebase as back-end. Includes Firebase Authentication and Firestore",
    image: morning,
    stack: ["React.js", "Styled-Components", "Firebase"],
    source: "https://react-morning-pages.netlify.app/",
    code: "https://github.com/thanosoncode/morning-pages",
  },
  {
    name: "E-commerce App",
    description:
      "E-commerce with fake data as I was learning Context API and useReducer for state management. Includes details page for each item and Stripe-Checkout",
    image: gadgets,
    stack: ["React.js", "CSS", "Stripe-Checkout"],
    source: "https://react-gadgets.netlify.app",
    code: "https://github.com/thanosoncode/next-recipes",
  },
  {
    name: "Landing Page",
    description:
      "Responsive landing page using Nex.js; includes gallery, carousel,  mapbox map and contact form",
    image: atlas,
    stack: ["Next.js", "CSS"],
    source: "https://atlas-chania.netlify.app/",
    code: "https://github.com/thanosoncode/atlas-chania",
  },
  {
    name: "TheMealDb API",
    description:
      "Responsive website that queries and tabulates data from an API based on search parameters using Next.js",
    image: recipes,
    stack: ["Next.js", "Styled-Components"],
    source: "https://nextjs-recipes.netlify.app/",
    code: "https://github.com/thanosoncode/themealdb",
  },

  {
    name: "Weather App",
    description: "At least once in your life you have to build a weather app.",
    image: weather,
    stack: ["React.js", "CSS"],
    source: "https://weather-thanos.netlify.app",
    code: "https://github.com/thanosoncode/weather-react",
  },
];
