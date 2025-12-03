const collaborators = [
  "Aviral Singh Chauhan",
  "Pavan Kumar Nuthi",
  "Rithvik Rahul",
  "Vikhas S G",
  "Rahul Kanagaraj"
];

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
              className="text-xl md:text-2xl font-medium text-gray-700 hover:text-peach-400 transition-colors cursor-default"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};