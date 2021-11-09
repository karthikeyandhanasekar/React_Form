import { RadioGroup } from "@material-ui/core"
import { Controller } from "react-hook-form"


const Radio = ({ control, list }) => {
    return (
        <Controller control={control} name="gender"
            render={({ field: { onChange, value } }) =>
            (
                <RadioGroup value={value} onChange={onChange}  >
                    {list()}
                </RadioGroup>
            )}
        />
    )
}
export default Radio