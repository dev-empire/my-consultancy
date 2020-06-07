import styled from 'styled-components'

export const StyledBurger = styled.button`
  position: absolute;
  top: 2%;
  right: 2rem;
  display: flex;
  flex-direction: column;
  width: 2rem;
  height: 2rem;
  justify-content: space-around;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.23rem;
    background: #fff;
    position: relative;
    transform-origin: 1px;

    :first-child {
      background: ${({ open }) => (open ? '#313131' : '#fff')};
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
      transform: ${({ open }) => (open ? 'translateX(20px)' : 'translate(0)')};
    }
    :nth-child(3) {
      background: ${({ open }) => (open ? '#313131' : '#fff')};
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`
