import DateDiff from 'date-diff'
import React from 'react'
import { motion } from "motion/react"
export default function RenderAge(birthday) {
    const yy = birthday.birthday.yearBirth
    const mm = birthday.birthday.monthBirth - 1
    const dd = birthday.birthday.dayBirth
    const nowDate = new Date()
    let now = nowDate.toDateString()
    let birthDate = new Date(yy, mm, dd)
    let birth = birthDate.toDateString()
    let diff = new DateDiff(nowDate, birthDate)
  return (
    <div className='flex justify-center mx-auto p-10 my-5'>
    <motion.div initial={{ opacity: 0, y: 50 }} transition={{ duration: 1.5, delay: 0.5, ease: [0, 0.71, 0.2, 1.01]}} animate={{ opacity: 1, y: 0 }}  className='text-4xl italic flex flex-wrap mx-auto justify-center align-middle h-1/2'>
        <p className='w-full'>شما</p>
        <p className='w-full'><b className='text-purple-600'>{parseInt(diff.years())}</b> سال</p>
        <p className='w-full'><b className='text-purple-600'>{parseInt(diff.months())}</b> ماه</p>
        <p className='w-full'><b className='text-purple-600'>{parseInt(diff.days())}</b> روز</p>
        <p className='w-full'>زندگی کرده اید</p>
    </motion.div>
    </div>
  )
}
