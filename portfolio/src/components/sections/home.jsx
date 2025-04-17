import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => { 

    return <section id = "home" className="min-h-screen flex items-center justify-center relative">

        <RevealOnScroll>
        <div className="text-center z-10 px-3">
            <h1 className="text-5xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent leading-right">
                Hi, I am Marwane</h1>


            <p className="text-grey-400 text-lg mb-8 mx-w-lg mx-auto">
                A University Of Calgary Student , Full-stack developer .I like to play soccer and video games in my free time  
            </p>
            <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px-rgba(59, 130, 246, 0.4)]"> 
                    View projects
                </a>

                <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10
             motion-reduce:transform-none motion-reduce:shadow-none"> 
                    Contact me 
                </a>
                <button>

                </button>
            </div>
        </div>

        </RevealOnScroll>
    </section>;
};