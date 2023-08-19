import { useState } from 'react'
import SignUpTextBox from './SignUpTextBox'
import { Form, Formik } from 'formik'
import SignUpProgress from './SignUpProgress'
import { AlertTriangle, EyeIcon, EyeOffIcon } from 'lucide-react'
import { Label } from '~/components/ui/label'
import { signUpValidation } from '~/utils/api'

const FormMain = () => {
  const [isPasswordOpen, setIsPasswordOpen] = useState(false)

  const handlePasswordShow = () => {
    setIsPasswordOpen(!isPasswordOpen)
  }
  return (
    <div>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phoneNumber: ''
        }}
        validationSchema={signUpValidation}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {formik => (
          <Form className='w-full'>
            <div className='py-4'>
              <div className='items-start gap-3 md:flex'>
                <SignUpTextBox
                  title='First Name'
                  idName='firstName'
                  inpType='text'
                  placeholder='Damilola'
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  handleTouch={formik.touched.firstName}
                  handleErrors={formik.errors.firstName}
                  value={formik.values.firstName}
                />

                <SignUpTextBox
                  title='Last Name'
                  idName='lastName'
                  inpType='text'
                  placeholder='Onyekachi'
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  handleTouch={formik.touched.lastName}
                  handleErrors={formik.errors.lastName}
                  value={formik.values.lastName}
                />
              </div>

              <div className='items-start gap-3 md:flex'>
                <SignUpTextBox
                  title='Email'
                  idName='email'
                  inpType='email'
                  placeholder='domain@gmail.com'
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  handleTouch={formik.touched.email}
                  handleErrors={formik.errors.email}
                  value={formik.values.email}
                />

                <SignUpTextBox
                  title='Phone Number'
                  idName='phoneNumber'
                  inpType='text'
                  placeholder='080123456'
                  handleChange={formik.handleChange}
                  handleBlur={formik.handleBlur}
                  handleTouch={formik.touched.phoneNumber}
                  handleErrors={formik.errors.phoneNumber}
                  value={formik.values.phoneNumber}
                />
              </div>

              <div className='grid w-full items-center gap-1.5'>
                <Label htmlFor='password'>
                  Password <span className='text-red-500'>*</span>
                </Label>
                <div className='relative'>
                  <input
                    className={`focus:border-primary w-full border p-2 outline-none focus:outline-none ${
                      formik.touched.password && formik.errors.password
                        ? 'border-red-700'
                        : ''
                    }`}
                    type={!isPasswordOpen ? 'password' : 'text'}
                    id='password'
                    name='password'
                    placeholder='************'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />

                  <div
                    className='absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer'
                    onClick={handlePasswordShow}
                  >
                    {!isPasswordOpen ? <EyeIcon /> : <EyeOffIcon />}
                  </div>
                </div>
                {formik.touched.password && formik.errors.password ? (
                  <div className='flex items-center gap-2 text-xs text-red-700'>
                    <AlertTriangle size={10} />
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>

            <SignUpProgress
              firstBtn='Login Instead'
              secondBtn='signup'
              progressValue={33}
            />
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormMain
