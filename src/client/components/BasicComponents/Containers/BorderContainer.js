import styled from 'styled-components'

const getBorder = (theme, isActive) => {
  return isActive ? `4px solid ${theme.gray}` : `1px solid ${theme.gray}`
}

const BorderContainer = styled('div')`
  border-top: ${(props) => props.top || props.all ? getBorder(props.theme, props.active) : 'initial'};
  border-right: ${(props) => props.right || props.all ? getBorder(props.theme, props.active) : 'initial'};
  border-bottom: ${(props) => props.bottom || props.all ? getBorder(props.theme, props.active) : 'initial'};
  border-left: ${(props) => props.left || props.all ? getBorder(props.theme, props.active) : 'initial'};
  width: 100%;
`

export default BorderContainer
