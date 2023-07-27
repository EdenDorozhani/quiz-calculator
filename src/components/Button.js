const Button = (props) => {
  return (
    <button onClick={props.action} className="next">
      {props.content}
    </button>
  );
};

export default Button;
