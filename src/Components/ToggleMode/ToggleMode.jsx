import './ToggleMode.scss'

export const ToggleMode = ({onChange, checked}, props) => {
    const classes = "switch " + props.className;
    return (
        <div className='switch-button'>
            <label className={classes}
                   onChange={onChange}
                   checked={checked}
            >
                <input className='input' type='checkbox'/>
                <span className='slider'></span>
            </label>
        </div>

    )
}