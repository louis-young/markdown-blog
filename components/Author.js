const Author = ({ name, picture, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-80">
      <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name}</div>
    </a>
  );
};

export default Author;
