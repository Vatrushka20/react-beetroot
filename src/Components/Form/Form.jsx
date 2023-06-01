import './Form.scss';
import {useForm} from "react-hook-form";
import {Input} from "./Input/Input";

export const Form = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            birthday: '',
            gender: '',
            email: '',
            phoneNumber: '',
            subject: ''
        },
        mode: "onTouched"
    })
    const onSubmit = (data) => {
        console.log("Form submitted", data)

        reset();
    };

    return (
        <main className='form-wrapper wrapper'>
            <h1 className='form__title'>Registration Form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='form' method='get'>
                <div className='row'>
                    <Input
                        id='firstName'
                        label='First Name'
                        errors={errors.firstName?.message}
                        name='firstName'
                        type='text'
                        register={register}
                        options={{
                            required: {
                                value: true,
                                message: '*'
                            }
                        }}
                    />

                    <Input
                        id='lastName'
                        label='Last Name'
                        errors={errors.lastName?.message}
                        name='lastName'
                        type='text'
                        register={register}
                        options={{
                            required: {
                                value: true,
                                message: '*'
                            }
                        }}
                    />
                </div>

                <div className='row-space'>
                    <Input
                        id='birthday'
                        label='Birthday'
                        errors={errors.birthday?.message}
                        name='birthday'
                        type='date'
                        register={register}
                        options={{
                            required: {
                                value: true,
                                message: "*"
                            }
                        }}
                    />

                    <div className='gender'>
                        <label className='label'>Gender</label>
                        <div className='gender__content'>
                            <label className='label gender-label'>
                                <input className='real-radio' type='radio' value='male' checked
                                       {...register('gender')}
                                />
                                <span className='custom-radio'></span>
                                Male
                            </label>
                            <label className='label gender-label'>
                                <input className='real-radio' type='radio' value='female'
                                       {...register('gender')}
                                />
                                <span className='custom-radio'></span>
                                Female
                            </label>
                        </div>
                    </div>
                </div>

                <div className='row'>
                    <Input
                        id='email'
                        label='Email'
                        errors={errors.email?.message}
                        name='email'
                        type='email'
                        register={register}
                        options={{
                            required: {
                                value: true,
                                message: "*"
                            },
                            pattern: {
                                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                message: 'Invalid email format'
                            },
                            validate: {
                                russianDomain: (fieldValue) => {
                                    return !fieldValue.endsWith('.ru') ||
                                        "Are you supporting these motherfuckers? FUCK YOU, BITCH"
                                }
                            }
                        }}
                    />

                    <Input
                        id='phoneNumber'
                        label='Phone Number'
                        errors={errors.phoneNumber?.message}
                        name='phoneNumber'
                        type='tel'
                        register={register}
                        options={{
                            pattern: {
                                value: /^[0-9]+$/,
                                message: 'Invalid email format'
                            },
                            required: {
                                value: true,
                                message: '*'
                            },
                            minLength: {
                                value: 10,
                                message: "min length 10"
                            },
                            maxLength: {
                                value: 13,
                                message: 'max length 13'
                            },
                        }}
                    />
                </div>

                <div className='container'>
                    <div className='select-container'>
                        <label className='label custom-select'>Subject
                            <select defaultValue={'Choose option'} className='select input'{...register('subject')}>
                                <option value='Choose option' disabled>Choose option</option>
                                <option value='Subject 1'>Subject 1</option>
                                <option value='Subject 2'>Subject 2</option>
                                <option value='Subject 3'>Subject 3</option>
                            </select>
                        </label>
                    </div>
                </div>
                <button className='button' type='submit'>Submit</button>
            </form>
        </main>

    )
}