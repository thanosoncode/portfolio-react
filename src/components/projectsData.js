import recipes from "../assets/thumbs/recipes.png";
import gadgets from "../assets/thumbs/gadgets.jpg";
import weather from "../assets/thumbs/weather.png";
import atlas from "../assets/thumbs/atlas.jpg";

export const projectsData = [
  {
    name: "Atlas Chania",
    description: "Landing page of my favorite gym",
    image: atlas,
    stack: ["NextJS", "CSS"],
    source: "https://atlas-chania.netlify.app/",
    code: "https://github.com/thanosoncode/atlas-chania",
  },
  {
    name: "All recipes",
    description: "Extended use of TheMealDb API",
    image: recipes,
    stack: ["NextJS", "Styled Components"],
    source: "https://nextjs-recipes.netlify.app/",
    code: "https://github.com/thanosoncode/themealdb",
  },
  {
    name: "Gadgets",
    description:
      "E-commerce section that allowed me to experiment with Context API and useReducer hook",
    image: gadgets,
    stack: ["ReactJS", "CSS"],
    source: "https://react-gadgets.netlify.app",
    code: "https://github.com/thanosoncode/next-recipes",
  },
  {
    name: "Weather App",
    description:
      "Any developer who respects himself has to have a weather app in their portfolio",
    image: weather,
    stack: ["ReactJS", "CSS"],
    source: "https://weather-thanos.netlify.app",
    code: "https://github.com/thanosoncode/weather-react",
  },
];
