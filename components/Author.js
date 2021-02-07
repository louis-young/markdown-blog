const Author = ({ name, picture }) => {
  return (
    <div>
      <img src={picture} alt={name} />
      <div>{name}</div>
    </div>
  );
};

export default Author;
