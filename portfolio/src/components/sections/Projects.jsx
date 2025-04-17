import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {

return <section id = "projects" className="min-h-screen flex items-center justify-center py-20">
    <RevealOnScroll>

    <div className="max-w-5xl mx-auto px-4"> 

        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> 
            Featured Projects 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                <h3 className="text-xl font-bold mb-1 "> Cookistry </h3>
                <p className="text-gray-400 mb-4"> A cooking website that caters to all skills levels it helps everyone  </p>

                <div className="flex flex-wrap gap-2"> 
                    {["React","CSS TAILWIND ", "Next.js" , "Vercel" ].map((tech,key)=> (
                        <span key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-md hover:bg-blue-500/20 
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all ">
                        {tech}
                        </span>
                    ))}                
                </div>

                <div className="flex flex-wrap gap-2 mb-4"> 
                    <a href="https://github.com/Ekkiddle/cookistry" 
                    target="_blank" 
                    rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">  View Project  </a>
                </div>

            </div>


            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                <h3 className="text-xl font-bold mb-1 "> Uni Sports </h3>
                <p className="text-gray-400 mb-5"> A rental equipment and an outdoor activity booking interface that facilitates the task for university student </p>

                <div className="flex flex-wrap gap-2"> 
                    {["JavaScript", " HTML ", "CSS", "NODE.JS ","Express.js"].map((tech,key)=> (
                        <span key={key}
                        className=" bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full  text-md hover:bg-blue-500/20 
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all ">
                        {tech}
                        </span>
                    ))}                
                </div>

                <div className="flex flex-wrap gap-2 mb-4"> 
                    <a href="https://github.com/karanjot-bassi/UniSports" 
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">  View Project  </a>
                </div>

            </div>


            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                <h3 className="text-xl font-bold mb-1 "> Data Pipeline and machine learning  </h3>
                <p className="text-gray-400 mb-4"></p>

                <div className="flex flex-wrap gap-2"> 
                    {["Python", "MYSQL", "PySpark"].map((tech,key)=> (
                        <span key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-md hover:bg-blue-500/20 
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all ">
                        {tech}
                        </span>
                    ))}                
                </div>

                <div className="flex flex-wrap gap-2 mb-4"> 
                    <a href=""
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">  View Project  </a>
                </div>

            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all">
                <h3 className="text-xl font-bold mb-1 ">  MyPortfolio  </h3>
                <p className="text-gray-400 mb-4"> The website you are navigating right now :)</p>

                <div className="flex flex-wrap gap-2"> 
                    {["React", " CSS TAILWIND ", "JavaScript"].map((tech,key)=> (
                        <span key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-4 rounded-full text-md hover:bg-blue-500/20 
                         hover:shadow-[0_2px_8px_rgba(59,130,246,0.1) transition-all ">
                        {tech}
                        </span>
                    ))}                
                </div>

                <div className="flex flex-wrap gap-2 mb-4"> 
                    <a href="https://github.com/Marwane-41/Portfolio"
                        target= "_blank"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4">  View Project  </a>
                </div>

            </div>

        </div>

        
    </div>


    </RevealOnScroll>

    </section> 

};