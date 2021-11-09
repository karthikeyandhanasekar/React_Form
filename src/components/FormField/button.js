import { Button as MUIButton } from "@material-ui/core"



const button = ({type,name,variant="outlined",color="primary"}) =>
{
    return (
        <MUIButton type={type} variant={variant} color={color} >{name}</MUIButton> 
    )
}

export default button