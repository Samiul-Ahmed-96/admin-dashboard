import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React from 'react';

const CreateUser = () => {
    return (
        <div className='create-user'>
           <h2>Create User</h2>
           <form>
           <TextField id="standard-basic" label="User Name" variant="standard" />
           <TextField id="standard-basic" label="Full Name" variant="standard" />
           <TextField id="standard-basic" label="Email" variant="standard" />
           <TextField id="standard-basic" label="Password" variant="standard" />
           <TextField id="standard-basic" label="Address" variant="standard" />
           <label for="status">Choose Status</label>
            <select name="status" id="status">
                <option value="active">Active</option>
                <option value="deactive">Deacive</option>
            </select>
           <FormControl component="fieldset">
           <FormLabel component="legend">Gender</FormLabel>
           <RadioGroup
             aria-label="gender"
             defaultValue="female"
             name="radio-buttons-group"
           >
             <FormControlLabel value="female" control={<Radio />} label="Female" />
             <FormControlLabel value="male" control={<Radio />} label="Male" />
             <FormControlLabel value="other" control={<Radio />} label="Other" />
           </RadioGroup>
         </FormControl>
         <input type="submit" value="Create User" />

         
           </form>
        </div>
    );
};

export default CreateUser;