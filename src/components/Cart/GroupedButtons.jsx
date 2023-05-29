import { Button, ButtonGroup, styled } from '@mui/material'


const Component = styled(ButtonGroup)`
  margin-top:30px;
`
const StyledButton = styled(Button)`
  border-radius:50%;
`
const GroupedButtons = () => {
  return (
    <Component>
        <StyledButton>+</StyledButton>
        <Button disabled>1</Button>
        <StyledButton>-</StyledButton>
    </Component>
  )
}

export default GroupedButtons