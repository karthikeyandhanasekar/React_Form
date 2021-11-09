import { TextField } from "@material-ui/core"
import { Controller } from "react-hook-form"
import '../../App.css'


const TextInput = ({ control, name, defaultvalue, errormsg, error, type }) => {
    return (
        <Controller control={control} name={name}
            defaultValue={defaultvalue}
            render={({ field }) =>
                <TextField
                    type={type}
                    {...field}
                    variant="outlined"
                    label={name.slice(0, 1).toUpperCase() + name.slice(1,)}
                    error={error}
                    helperText={error ? errormsg : ""}

                />

            }
        />
    )


}

export default TextInput