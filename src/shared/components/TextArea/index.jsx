import styled from "styled-components";

const StyledTextArea = styled.textarea`
  background: transparent;
  border: 1px solid #303030;
  font-size: 16px;
  padding: 12px 16px;
  font-family: Mukta, sans-serif;
  &:focus {
    outline: none;
    border-color: red;
  }
`;

function TextArea({
  readOnly,
  value,
  name,
  id,
  rows,
  placeholder,
  onChange,
  className,
}) {
  return (
    <StyledTextArea
      className={className}
      id={id}
      name={name}
      rows={rows || 2}
      placeholder={placeholder || "Text"}
      value={value}
      readOnly={readOnly}
      onChange={onChange}
    />
  );
}

export default TextArea;
