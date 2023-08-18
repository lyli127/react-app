import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export function Review({ data, children }) {
  const dateSettings = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <Card
      style={{ width: "18rem", boxShadow: "0 0 15px hsl(0, 0%, 10%)" }}
      className="mb-4 p-2"
    >
      <Card.Img
        variant="top"
        src={
          data.photo_url
            ? data.photo_url
            : `https://placehold.co/180x100/grey/FFF?font=playfair-display&text=${data.restaurant_name}`
        }
      />
      <Card.Body key={data.id}>
        <Card.Title>{data.restaurant_name}</Card.Title>
        <Card.Text>{data.other_notes}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Dish: {data.dish_name}</ListGroup.Item>
        <ListGroup.Item>
          Type: {data.ramen_type} Score: {data.ramen_score}
        </ListGroup.Item>
        <ListGroup.Item>
          Noodle Texture: {data.noodle_texture} Score: {data.noodle_score}
        </ListGroup.Item>
        <ListGroup.Item>
          Broth: {data.broth_type} Score: {data.broth_score}
        </ListGroup.Item>
        <ListGroup.Item>
          Chashu: {data.chashu_type} Score: {data.chashu_score}
        </ListGroup.Item>
        <ListGroup.Item>
          Ajitama: {data.ajitama} Score: {data.ajitama_score}
        </ListGroup.Item>
        <Card.Footer>
          <small className="text-muted">
            Visited on{" "}
            {new Date(data.date_visited).toLocaleString(
              undefined,
              dateSettings
            )}
          </small>
        </Card.Footer>
      </ListGroup>
      {children}
    </Card>
  );
}
