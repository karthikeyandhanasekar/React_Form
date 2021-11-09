import { FormControl, InputLabel, Select } from "@material-ui/core"
import { Controller } from "react-hook-form"


const Dropdown = ({ control, list, label, name }) => {
    return (
        <Controller control={control} name={name}
            render={({ field: { onChange, value } }) =>
                <FormControl>
                    <InputLabel labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard">{label}</InputLabel>

                    <Select onChange={onChange} value={value} label="Select.." >
                        {list()}
                    </Select>
                </FormControl>

            }
        />
    )
}

export default Dropdown