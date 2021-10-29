import "./developers.css";

const Developer = ({ name, age, country }) => {
  return (
    <div className="card">
      <span>
        <h2>Dev: {name}</h2>
        <p>Idade: {age}</p>
        <p>País: {country}</p>
      </span>
    </div>
  );
};

export default Developer;
