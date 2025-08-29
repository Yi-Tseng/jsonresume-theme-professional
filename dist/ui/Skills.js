import OneLineList from './OneLineList';
import Section from './Section';
const Skills = ({
  skills
}) => {
  if (!skills) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "Skills"
  }, skills.map((w, key) => {
    return /*#__PURE__*/React.createElement(OneLineList, {
      key: key,
      name: w.name,
      items: w.keywords
    });
  })));
};
export default Skills;