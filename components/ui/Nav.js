import styled from 'styled-components'

const Wrapper = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 62px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px #EAEAEA;
  background: #FFF;
`

const InnerWrapper = styled('nav')`
  max-width: 1140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const MenuWrapper = styled('ul')`
  display: flex;
  padding: 0px;
  margin: 0px;
  list-style: none;
`

const MenuItem = styled('li')`
  padding: 12px 24px;
  font-size: 12px;
  cursor: pointer;
  opacity: 0.5;
  transition: 0.5s;
  font-weight: bold;
  
  &: hover {
    opacity: 1;
  }
`

const Nav = () => {
  return (<Wrapper>
    <InnerWrapper>
      <img src='/aperture.svg' alt='brand' style={{ width: 32 }} />

      <MenuWrapper>
        <MenuItem>Works</MenuItem>
        <MenuItem>Blog</MenuItem>
        <MenuItem>Contact</MenuItem>
      </MenuWrapper>
    </InnerWrapper>
  </Wrapper>)
}

export default Nav