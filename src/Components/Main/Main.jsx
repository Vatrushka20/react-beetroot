import './Main.scss';

export const Main = (props) => {
    const classes = 'main ' + props.className;
    return (
        <main className={classes}>
            {props.children}
        </main>
    )
}