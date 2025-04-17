import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {


    const frontendSkills = [
        "React", "HTML" , "CSS TAILWIND", "javaScript"
    ];

    const backendSkills = [ 
        , "Next.js", "Mysql", 
    ];

    const OtherSkills = [ 
        "Python", "Java" , "C++" , "C" , "Assembly"
    ];

    return ( <section id="about" className="min-h-screen flex items-center justify-center py-20"> 
    
    
        <RevealOnScroll>
    <div className="max-w-3xl mx-auto px-5">

        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
        About me </h2>

        <div className="rounded-xl p-5 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-white-300 mb-2"> 
            I am a 4th year in computer science , throughout my academic years , i have gathered enough knowledge and 
            experience , learning both Front-end and Back-end , and my goal is to become and fully knowledgeable full-stack developer 
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                <h3 className="text-xl font-bold mb-3"> Front-end</h3>
                <div className="flex flex-wrap gap-2"> 

                    {frontendSkills.map((tech, key) => (
                        <span 
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                         hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) transition ">
                        {tech}
                        </span>
                    ))}
                </div>
            </div>


            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                <h3 className="text-xl font-bold mb-3"> Back-End</h3>
                <div className="flex flex-wrap gap-2"> 

                    {backendSkills.map((tech, key) => (
                        <span 
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                         hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) transition ">

                        {tech}
                        </span>
                    ))}
                </div>
            </div>


            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">

                <h3 className="text-xl font-bold mb-3"> Other </h3>
                <div className="flex flex-wrap gap-2"> 

                    {OtherSkills.map((tech, key) => (
                        <span 
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                         hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2) transition ">

                        {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 "> Education </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li> 
                        <strong> B.S in computer science </strong> University of Calgary (2020 - 2025)
                    </li>
                    <li>
                        <strong> Relevant coursework : </strong> Computer-Human interaction , Intro to software engineering , BigData and Data manipulation  

                    </li>
                </ul>
            </div> 
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 "> Work Experience</h3>
                <div className="space-y-4 text-gray-300">
                    <div>
                        <h4 className="font-semibold"> Line cook at Delta Hotels Calgary (2023-2025) </h4>
                        <p> Ensured fast-paced delivery of food while paying attention to details 

                        </p>
                    </div>

                    <div>
                        <h4 className= "font-semibold"> Volunteer at <strong> IKRAE HIGH SCHOOL </strong> (2017-2018) </h4>
                        <p> - Helped fundraising and distributing donations to people in need 
                            
                        </p>
                    </div>


                </div>
            </div>

        </div>

    </div>
    

    </RevealOnScroll>
    </section>
    );
};   