import styled from 'styled-components'

const Button = styled('button')`
  margin-right: 12px;
  background: #FFF;
  border-radius: 6px;
  padding: 12px 32px;
  border: none;
  box-shadow: 0 10px 12px 3px rgba(26,51,130,.1);
  transition: 0.5s;
  cursor: pointer;
  font-weight: bold;

  &: hover {
    box-shadow: 0 0px 12px 0px rgba(26,51,130,.1);
  }

  &: focus {
    outline: none;
  }

  &: last-child {
    margin-right: 0px;
  }

  ${({ primary }) => primary && `
    background: #63AAFF;
    color: #FFF;
  `}
`

export default Button