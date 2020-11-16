import {Card} from 'react-bootstrap'
export default function Footer() {
    return (
        <Card className="text-center bg-dark">
            <Card.Body>
                <Card.Title className="text-white footer"><h4>COVID-19 STATUS APPLICATION</h4></Card.Title>
                <Card.Text className="text-white link">
                    <h5>developed by <a href="https://midlajc.live/" rel="noreferrer" target="_blank" className="text-danger">Midlaj C</a></h5>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}