import _ from "lodash";

const dragons = [
  { name: "fluffy", element: "lighting" },
  { name: "noomi", element: "lighting" },
  { name: "karo", element: "fire" },
  { name: "doomer", element: "timewarp" }
];

// without currying
const hasElementNoCurring = (element, obj) => obj.element === element;
const lightingDragonsNoCurrying = dragons.filter(x =>
  hasElementNoCurring("lighting", x)
)

// with currying          ('lighting')(x) => x.elemnt === 'lighting'
const hasElementLodash = _.curry((element, obj) => obj.element === element);
const hasElement = el => ({element}) => el === element
const lightingDragons = dragons.filter(hasElement("lighting"));

console.log(lightingDragonsNoCurrying);
console.log(JSON.stringify(lightingDragons, null, 2));