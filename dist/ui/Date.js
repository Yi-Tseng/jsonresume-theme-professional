import styled from 'styled-components';
const Text = styled.div`
  font-style: italic;
  font-size: 1.4rem;
`;
const DateComponent = ({
  date
}) => {
  if (!date) {
    return /*#__PURE__*/React.createElement(Text, null, "Present");
  }
  const fullDate = new Date(date);
  const options = {
    year: 'numeric',
    month: 'long'
  };
  const formattedDate = fullDate.toLocaleDateString('en-US', options);
  return /*#__PURE__*/React.createElement(Text, null, formattedDate ?? 'Present');
};
export default DateComponent;