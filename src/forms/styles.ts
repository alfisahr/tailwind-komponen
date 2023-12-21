import styled from "styled-components";

export const StyledLabel = styled.label`
  display: block;
`;

export const StyledControl = styled.input`
  display: block;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: 400;
  border-radius: 0.375rem;
  border: 1px solid #dee2e6;
  background-color: #fff;
  transition:
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:focus {
    background-color: #fff;
    border-color: #86b7fe;
    box-shadow: 0 0 0 0.25rem #0d6efd40;
    color: #212529;
    outline: 0;
  }
`;
