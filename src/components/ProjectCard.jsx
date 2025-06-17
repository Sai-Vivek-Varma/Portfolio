export const ProjectCard = ({ url, img, title, text }) => {
  return (
    <article className="bg-white rounded-lg shadow- hover:shadow-lg duration-300">
      <img
        src={img}
        alt={title}
        className="w-full object-cover rounded-t-lg h-64"
      />
      <div className="capitalize p-8">
        <h4 className="text-xl tracking-wide font-medium">{title}</h4>
        <p className="mt-4 text-slate-700">{text}</p>
        <a
          href={url}
          className="text-emerald-500 hover:text-emerald-700 underline"
        >
          visit site
        </a>
      </div>
    </article>
  );
};
