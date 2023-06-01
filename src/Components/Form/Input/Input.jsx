export const Input = ({
                          id,
                          label,
                          errors,
                          name,
                          type,
                          register,
                          options
                      }) => {

    return (
        <>

            <label htmlFor={id} className='label'>
                {label}
                <input className='input'
                       id={id}
                       name={name}
                       type={type}
                       {...register(name, options)}
                />
                <p className='error'>{errors}</p>
            </label>
        </>
    )
}