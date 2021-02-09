const Author = ({ name, picture, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center hover:opacity-80 transition duration-200"
    >
      <figure>
        <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />
      </figure>
      <figcaption className="text-xl font-bold">{name}</figcaption>
    </a>
  );
};

export default Author;
