import Section from './Section';
import Experience from './Experience';
const Work = ({
  projects
}) => {
  if (!projects) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Section, {
    title: "Projects"
  }, projects.map((w, key) => {
    return /*#__PURE__*/React.createElement(Experience, {
      title: w.name,
      startDate: w.startDate,
      endDate: w.endDate,
      summary: w.description,
      highlights: w.highlights,
      key: key
    });
  })));
};
export default Work;