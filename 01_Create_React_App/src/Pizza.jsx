const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1 style={props.style}>{props.name}</h1>
      <p style={props.style}>{props.description}</p>
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default Pizza;
