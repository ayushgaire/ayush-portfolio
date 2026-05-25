const ProfessionalWork = () => {
  return (
    <>
      {/* Professional Web Development Work */}
      <section id="client-work" className="py-24 px-6 bg-[#0f172a]">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Professional Web Development Work
            </h2>

            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Real-world portfolio websites designed and developed for professionals
              and students through Codyza. Focused on modern UI/UX, responsive layouts,
              premium animations, and production-ready deployment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Raman Dahal Project */}
            <div className="bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-500">

              <div className="relative overflow-hidden">
                <img
                  src="/projects/raman-project.jpg"
                  alt="Raman Dahal Portfolio"
                  className="w-full h-[260px] object-cover hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Raman Dahal Portfolio
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Designed and developed a modern responsive portfolio website for
                  Raman Dahal with a clean premium UI inspired by modern Apple-style
                  aesthetics.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                    Tailwind CSS
                  </span>

                  <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm">
                    Framer Motion
                  </span>
                </div>

                <a
                  href="https://www.ramandahal.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Visit Website →
                </a>
              </div>
            </div>

            {/* Gedion Project */}
            <div className="bg-[#111827] border border-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-500">

              <div className="relative overflow-hidden">
                <img
                  src="/projects/gedion-project.jpg"
                  alt="Gedion Gizaw Portfolio"
                  className="w-full h-[260px] object-cover hover:scale-105 transition-all duration-700"
                />
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-white mb-3">
                  Gedion Gizaw Portfolio
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  Built a professional portfolio website with modern 3D-inspired
                  sections and clean visual hierarchy for Gedion Gizaw.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                    React
                  </span>

                  <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-400 text-sm">
                    Tailwind CSS
                  </span>

                  <span className="px-4 py-2 rounded-full bg-pink-500/10 text-pink-400 text-sm">
                    3D UI
                  </span>
                </div>

                <a
                  href="https://www.gediontilahungizaw.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-all"
                >
                  Visit Website →
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default ProfessionalWork