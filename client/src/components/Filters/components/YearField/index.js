import {FormControl, TextField} from "@mui/material";
import {FormattedMessage} from "react-intl";


const YearField = ({handleChange}) => {
    return (
        <>
            <FormControl sx={{
                m: 1,
                width: 100,
                order: {
                    lg: 0,
                    xs: 0
                }
            }}>
                <TextField
                    name="year"
                    id="outlined-basic"
                    label={<FormattedMessage id="filters.release_year"/>}
                    variant="outlined"
                    onChange={handleChange}
                />
            </FormControl>
        </>
    )
}

export default YearField;