import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🎨",
      color: "blue",
      skills: [
        { name: "React", level: "Advanced", years: "3+" },
        { name: "Next.js", level: "Advanced", years: "2+" },
        { name: "TypeScript", level: "Advanced", years: "2+" },
        { name: "JavaScript (ES6+)", level: "Expert", years: "3+" },
        { name: "HTML5 & CSS3", level: "Expert", years: "3+" },
        { name: "Tailwind CSS", level: "Advanced", years: "2+" },
        { name: "UI/UX Design", level: "Advanced", years: "2+" },
        { name: "React Native", level: "Advanced", years: "2+" }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      color: "green",
      skills: [
        { name: "Node.js", level: "Advanced", years: "2+" },
        { name: "FastAPI", level: "Advanced", years: "2+" },
        { name: "Python", level: "Advanced", years: "2+" },
        { name: "RESTful APIs", level: "Advanced", years: "2+" },
        { name: "JWT Authentication", level: "Advanced", years: "1+" },
        { name: "API Design", level: "Advanced", years: "2+" },
        { name: "Microservices", level: "Intermediate", years: "1+" }
      ]
    },
    {
      title: "Database & Cloud",
      icon: "🗄️",
      color: "purple",
      skills: [
        { name: "MongoDB", level: "Advanced", years: "2+" },
        { name: "PostgreSQL", level: "Advanced", years: "2+" },
        { name: "Database Design", level: "Advanced", years: "2+" },
        { name: "Vercel", level: "Advanced", years: "2+" },
        { name: "AWS", level: "Intermediate", years: "1+" },
        { name: "Docker", level: "Intermediate", years: "1+" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: "🤖",
      color: "orange",
      skills: [
        { name: "OpenAI GPT-4 API", level: "Advanced", years: "1+" },
        { name: "scikit-learn", level: "Intermediate", years: "1+" },
        { name: "Machine Learning", level: "Intermediate", years: "1+" },
        { name: "Predictive Analytics", level: "Intermediate", years: "1+" },
        { name: "AI Integration", level: "Advanced", years: "1+" }
      ]
    },
    {
      title: "Development Tools",
      icon: "🛠️",
      color: "gray",
      skills: [
        { name: "Git & GitHub", level: "Advanced", years: "3+" },
        { name: "VS Code", level: "Expert", years: "3+" },
        { name: "Agile/Scrum", level: "Advanced", years: "2+" },
        { name: "Team Collaboration", level: "Advanced", years: "2+" },
        { name: "Code Review", level: "Advanced", years: "2+" },
        { name: "Testing", level: "Intermediate", years: "1+" }
      ]
    },
    {
      title: "Soft Skills",
      icon: "🧠",
      color: "red",
      skills: [
        { name: "Problem Solving", level: "Expert", years: "3+" },
        { name: "Critical Thinking", level: "Advanced", years: "3+" },
        { name: "Communication", level: "Advanced", years: "3+" },
        { name: "Leadership", level: "Advanced", years: "2+" },
        { name: "Adaptability", level: "Expert", years: "3+" },
        { name: "Time Management", level: "Advanced", years: "3+" },
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: { bg: "bg-blue-50", border: "border-blue-200", text: "text-blue-800", badge: "bg-blue-100" },
      green: { bg: "bg-green-50", border: "border-green-200", text: "text-green-800", badge: "bg-green-100" },
      purple: { bg: "bg-purple-50", border: "border-purple-200", text: "text-purple-800", badge: "bg-purple-100" },
      orange: { bg: "bg-orange-50", border: "border-orange-200", text: "text-orange-800", badge: "bg-orange-100" },
      gray: { bg: "bg-gray-50", border: "border-gray-200", text: "text-gray-800", badge: "bg-gray-100" },
      red: { bg: "bg-red-50", border: "border-red-200", text: "text-red-800", badge: "bg-red-100" }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-500';
      case 'Advanced': return 'bg-blue-500';
      case 'Intermediate': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Technical Skills
            </h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div
                  key={category.title}
                  className={`${colors.bg} ${colors.border} border-2 rounded-xl p-6 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className={`text-lg font-bold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-gray-900">
                              {skill.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              {skill.years}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${getLevelColor(skill.level)}`}
                                style={{
                                  width: skill.level === 'Expert' ? '100%' :
                                         skill.level === 'Advanced' ? '85%' : '70%'
                                }}
                              ></div>
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${colors.badge} ${colors.text} font-medium`}>
                              {skill.level}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary Stats */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Technical Proficiency Summary
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">4+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600">2</div>
                  <div className="text-sm text-gray-600">Deployed Apps</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">100%</div>
                  <div className="text-sm text-gray-600">Production Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
