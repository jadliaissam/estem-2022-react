export default function NewsHook(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDriection: "row",
        margin: 30,
        padding: 20,
        borderStyle: "solid",
      }}
    >
      <img
        style={{ marginRight: 20 }}
        alt="img"
        src="https://via.placeholder.com/200"
      />
      <div>
        <p>Title: {props.data.title}</p>
        <p>Author: {props.data.author}</p>
        <p>Points: {props.data.points}</p>
        <button onClick={props.onClick}>Details</button>
      </div>
    </div>
  );
}
