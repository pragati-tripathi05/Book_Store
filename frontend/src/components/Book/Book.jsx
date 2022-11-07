import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";

const Book = (props) => {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:3001/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/"))
      .then(() => history("/books"));
  };

  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h3>Rs {price}</h3>
        <Button
          LinkComponent={Link}
          to={`/books/${_id}`}
          sx={{ mt: "auto" }}
          style={{
            backgroundColor: "lightblue",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Update
        </Button>
        <Button
          color="error"
          onClick={deleteHandler}
          sx={{ mt: "auto" }}
          style={{
            backgroundColor: "pink",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Delete
        </Button>
      </div>
    </>
  );
};

export default Book;
