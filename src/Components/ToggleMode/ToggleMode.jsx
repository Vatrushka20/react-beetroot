import './ToggleMode.scss'

export const ToggleMode = ({onChange, checked}) => {
    return (
        <div className='switch-button'>
            <label className='switch'
                   onChange={onChange}
                   checked={checked}
            >
                <input className='input' type='checkbox'/>
                <span className='slider'></span>
            </label>
        </div>

    )
}