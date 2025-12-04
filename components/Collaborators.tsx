const collaborators = [
  "Aviral Singh Chauhan",
  "Pavan Kumar Nuthi",
  "Rithvik Rahul",
  "Vikhas S G",
  "Rahul Kanagaraj"
];

const githubStats = [
  "savitar02",
  "pavan-nuthi",
  "Rithz7",
  "Vikhas",
  "rahulkanagaraj786"
]

export const Collaborators = () => {
  return (
    <section id="collaborators" className="py-20 bg-white border-b border-warm-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-sm font-semibold text-gray-400 tracking-widest uppercase mb-8">
          Project Collaborators
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
          {collaborators.map((name, index) => (
            <span 
              key={index} 
              className="relative text-xl md:text-2xl font-medium text-gray-700 hover:text-peach-400 transition-colors cursor-default group"
            >
              <div className="hidden group-hover:block absolute bottom-full left-0 z-50 w-[300px] p-0 bg-white rounded-2xl shadow-lg">
                <img src={`https://github-readme-stats-steel-omega.vercel.app/api/top-langs?username=${githubStats[index]}&show_icons=true&locale=en&layout=compact`} alt="GitHub Stats" className="w-full h-full object-cover" />
              </div>
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};