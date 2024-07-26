import { useContext } from "react";
import { GlobalContext } from "../context";

const NewArticle = () => {
  return <span>--Baru!</span>;
};

function Article(props) {
  const user = useContext(GlobalContext);

  return (
    <div>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, Tag: {props.tags.join(", ")}{" "}
        {props.isNew ? <NewArticle /> : ""}
      </small>
      <div>
        <h4>Ditulis oleh {user.username}</h4>
      </div>
    </div>
  );
}

export default Article;
