import Section from './Section';
import Experience from './Experience';
const Awards = ({
  awards
}) => {
  if (!awards) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "Awards"
  }, awards.map((a, key) => {
    return /*#__PURE__*/React.createElement(Experience, {
      title: a.title,
      subTitle: a.awarder,
      date: a.date,
      summary: a.summary,
      key: key
    });
  })));
};
export default Awards;