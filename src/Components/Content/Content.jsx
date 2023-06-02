import './Content.scss';
import {Header} from "./Header/Header";
import {TableActive} from "../TableActive/TableActive";
import {TableClosed} from "../TableClosed/TableClosed";

export const Content = (props) => {
    const classes = 'content ' + props.className;
    return (
        <div className={classes}>
            <Header/>
            <TableActive />
            <TableClosed />
        </div>
    )
}