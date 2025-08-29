import OneLineList from './OneLineList';
import Section from './Section';
const Languages = ({
  languages
}) => {
  if (!languages) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "Languages"
  }, languages.map((l, key) => {
    return /*#__PURE__*/React.createElement(OneLineList, {
      key: key,
      name: l.language,
      items: [l.fluency]
    });
  })));
};
export default Languages;