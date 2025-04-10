import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import RenderAge from './RenderAge'
import { FormControl } from '@mui/material';
export default function InputForm() {
  const birthSchema = Yup.object().shape({
    dayBirth: Yup.number().required("روز تولد را وارد کنید").min(1, 'روز وارد شده صحیح نیست').max(31, 'روز وارد شده صحیح نیست'),
    monthBirth: Yup.number().required("ماه تولد را وارد کنید").min(1, 'ماه وارد شده صحیح نیست').max(12, 'ماه وارد شده صحیح نیست'),
    yearBirth: Yup.number().required("سال تولد را وارد کنید").min(1900, 'سال وارد شده صحیح نیست').max(2025, 'سال وارد شده صحیح نیست'),
  });
    const formik = useFormik({
      initialValues: {
        dayBirth: '',
        monthBirth: '',
        yearBirth: '',
        calendar: '20',
      },
      validationSchema: birthSchema,
      onSubmit: values => {
        setBirthday(values)
      },
    });  
  const [birthday, setBirthday] = useState(null)
  return (
    <div className='py-20 flex justify-center flex-wrap'>
    <form className='h-1/2 w-full flex justify-center items-center *:m-4' onSubmit={formik.handleSubmit}>
          <TextField type='number' value={formik.values.dayBirth} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.dayBirth && Boolean(formik.errors.dayBirth)} helperText={formik.errors.dayBirth && formik.errors.dayBirth} name='dayBirth' id="standard-basic" label="روز تولد" variant="standard" />
          <TextField type='number' value={formik.values.monthBirth} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.monthBirth && Boolean(formik.errors.monthBirth)} helperText={formik.errors.monthBirth && formik.errors.monthBirth} name='monthBirth' id="standard-basic" label="ماه تولد" variant="standard" />
          <TextField type='number' value={formik.values.yearBirth} onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.yearBirth && Boolean(formik.errors.yearBirth)} helperText={formik.errors.yearBirth && formik.errors.yearBirth} name='yearBirth' id="standard-basic" label="سال تولد" variant="standard" />
          <InputLabel id="demo-simple-select-filled-label">نوع تقویم</InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled-label"
            label="Age"
            value={formik.values.calendar}
            onChange={formik.handleChange}
            name='calendar'
          >
            <MenuItem disabled value={10}>خورشیدی</MenuItem>
            <MenuItem value={20}>میلادی</MenuItem>
          </Select>
          <Button className='!bg-purple-600' variant="contained" type='submit'>محاسبه سن</Button>
    </form>
      {birthday && <RenderAge birthday={birthday}/>}
    </div>
  );
}
