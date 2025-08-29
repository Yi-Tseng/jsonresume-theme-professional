import styled from 'styled-components';
import Projects from './Projects';
import Hero from './Hero';
import Summary from './Summary';
import Education from './Education';
import Work from './Work';
import Certificates from './Certificates';
import Publications from './Publications';
import Awards from './Awards';
import Skills from './Skills';
import Interests from './Interests';
import Languages from './Languages';
import References from './References';
const Layout = styled.div`
  max-width: 660px;
  margin: 0 auto;
  line-height: calc(1ex / 0.32);
  margin-bottom: 40px;
`;
const Resume = ({
  resume
}) => {
  return /*#__PURE__*/React.createElement(Layout, null, /*#__PURE__*/React.createElement(Hero, {
    basics: resume.basics
  }), /*#__PURE__*/React.createElement(Summary, {
    basics: resume.basics
  }), /*#__PURE__*/React.createElement(Education, {
    education: resume.education
  }), /*#__PURE__*/React.createElement(Work, {
    work: resume.work
  }), /*#__PURE__*/React.createElement(Projects, {
    projects: resume.projects
  }), /*#__PURE__*/React.createElement(Certificates, {
    certificates: resume.certificates
  }), /*#__PURE__*/React.createElement(Publications, {
    publications: resume.publications
  }), /*#__PURE__*/React.createElement(Awards, {
    awards: resume.awards
  }), /*#__PURE__*/React.createElement(Languages, {
    languages: resume.languages
  }), /*#__PURE__*/React.createElement(Skills, {
    skills: resume.skills
  }), /*#__PURE__*/React.createElement(Interests, {
    interests: resume.interests
  }), /*#__PURE__*/React.createElement(References, {
    references: resume.references
  }));
};
export default Resume;