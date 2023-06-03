import './BlogItem.scss';
import {Card} from "react-bootstrap";

function BlogItem(props) {
    return (
        <Card className='mb-4' role="button">
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.body}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default BlogItem;