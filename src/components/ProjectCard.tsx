type Props = {
  title: string;
  description: string;
  tech: string[];
  link: string;
};

export default function ProjectCard({ title, description, tech, link }: Props) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-gray-600 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/10 transition duration-300">
      <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          {description}
        </p>

        <p className="text-xs text-gray-500 mt-2">
          Real-world application
        </p>

      <div className="flex flex-wrap gap-2 mt-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-gray-800 px-2 py-1 rounded-md text-gray-300"
          >
            {t}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        className="inline-block mt-5 text-sm text-blue-400 hover:text-blue-300 hover:translate-x-1 transition"
      >
        Live Demo →
      </a>
    </div>
  );
}