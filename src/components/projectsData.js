import recipes from "../assets/thumbs/recipes.png";
import gadgets from "../assets/thumbs/gadgets.jpg";
import weather from "../assets/thumbs/weather.png";
import atlas from "../assets/thumbs/atlas.jpg";
import morning from "../assets/thumbs/morning.png";

export const projectsData = [
  {
    name: "Morning Pages",
    description:
      "Full-stack app using React, Styled Components and Firebase back-end",
    image: morning,
    stack: ["React", "Styled Components", "Firebase"],
    source: "https://react-morning-pages.netlify.app/",
    code: "https://github.com/thanosoncode/morning-pages",
  },
  {
    name: "Gadgets",
    description:
      "E-commerce with mock up data as a practice to learn Context API and useReducer for state management",
    image: gadgets,
    stack: ["ReactJS", "CSS"],
    source: "https://react-gadgets.netlify.app",
    code: "https://github.com/thanosoncode/next-recipes",
  },
  {
    name: "Gym Website",
    description:
      "Responsive landing page; includes gallery, carousel,  mapbox map and contact form",
    image: atlas,
    stack: ["NextJS", "CSS"],
    source: "https://atlas-chania.netlify.app/",
    code: "https://github.com/thanosoncode/atlas-chania",
  },
  {
    name: "All recipes",
    description:
      "Responsive website that queries and tabulates data from an API based on search parameters",
    image: recipes,
    stack: ["NextJS", "Styled Components"],
    source: "https://nextjs-recipes.netlify.app/",
    code: "https://github.com/thanosoncode/themealdb",
  },

  {
    name: "Weather App",
    description:
      "At least once in your life you have to build a weather app. A responsive single page application",
    image: weather,
    stack: ["ReactJS", "CSS"],
    source: "https://weather-thanos.netlify.app",
    code: "https://github.com/thanosoncode/weather-react",
  },
];
