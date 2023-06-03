import './NewsItem.scss';
import {Card} from "react-bootstrap";

function NewsItem({author, title, description, urlToImage, url}) {
    return (
        <Card>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{author}</Card.Title>
                <Card.Subtitle>{title}</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
                <Card.Link href={url}>Card Link</Card.Link>
            </Card.Body>
        </Card>
    )
}
export default NewsItem;