import styled from 'styled-components'

const TextField = styled('input')`
  background: #FFF;
  padding: 12px 24px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  box-shadow: 0 10px 12px 3px rgba(26,51,130,.1);
  width: 100%;

  &: focus {
    outline: none;
  }
`

export default TextField