export default {
    template: `
        <section id="about" class="py-24 scroll-mt-16 border-t border-b border-gray-800/50 text-white bg-brand-darkTheme2">
            <div class="max-w-7xl mx-auto px-8 md:px-12">
                
                <div class="mb-16">
                    <h2 class="text-4xl font-bold tracking-wide inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-1/4 after:w-1/4 after:h-1 after:bg-brand-teal after:rounded">
                        About <span class="text-brand-teal">Me</span>
                    </h2>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
                    
                    <div class="md:col-span-8 p-8 flex flex-col justify-between" :class="bentoCardStyles">
                        <div class="space-y-4">
                            <div class="flex items-center gap-3 text-brand-teal">
                                <i class="fas fa-user-astronaut text-xl"></i>
                                <h3 class="text-xl font-bold">Who I Am</h3>
                            </div>
                            <div class="text-gray-400 text-sm leading-relaxed space-y-4 font-normal">
                                <p>{{ bioParagraph1 }}</p>
                                <p>{{ bioParagraph2 }}</p>
                            </div>
                        </div>
                        <div class="pt-6 border-t border-gray-800/50 flex items-center gap-2 text-xs text-gray-500">
                            <span class="w-2 h-2 rounded-full bg-brand-teal animate-pulse"></span>
                            <span>Open for full-time roles & remote engineering contracts.</span>
                        </div>
                    </div>

                    <div class="md:col-span-4 p-8 flex flex-col justify-between text-center md:text-left" :class="bentoCardStyles">
                        <div class="space-y-2">
                            <div class="flex justify-center md:justify-start items-center gap-3 text-brand-teal mb-4">
                                <i class="fas fa-chart-line text-xl"></i>
                                <h3 class="text-xl font-bold">At a Glance</h3>
                            </div>
                            <div class="font-mono text-5xl font-extrabold text-white tracking-tight">
                                2+ <span class="text-brand-teal text-3xl">Years</span>
                            </div>
                            <p class="text-xs text-gray-400 font-medium uppercase tracking-wider">Commercial Experience</p>
                        </div>
                        
                        <div class="grid grid-cols-2 gap-4 pt-6 border-t border-gray-800/50 text-center">
                            <div class="p-3 bg-gray-900/40 rounded-lg border border-gray-800/40">
                                <span class="block text-xl font-bold text-brand-teal font-mono">7+</span>
                                <span class="text-[10px] text-gray-500 uppercase font-semibold">Microservices</span>
                            </div>
                            <div class="p-3 bg-gray-900/40 rounded-lg border border-gray-800/40">
                                <span class="block text-xl font-bold text-brand-teal font-mono">100%</span>
                                <span class="text-[10px] text-gray-500 uppercase font-semibold">Clean Code</span>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-7 p-8" :class="bentoCardStyles">
                        <div class="flex items-center gap-3 text-brand-teal mb-6">
                            <i class="fas fa-laptop-code text-xl"></i>
                            <h3 class="text-xl font-bold">Technical Proficiency</h3>
                        </div>
                        
                        <div class="space-y-5">
                            <div v-for="(skill, index) in skills" :key="index" class="space-y-1.5">
                                <div class="flex justify-between text-xs font-semibold">
                                    <span class="text-gray-300 tracking-wide">{{ skill.name }}</span>
                                    <span class="text-brand-teal font-mono font-bold">{{ skill.percentage }}%</span>
                                </div>
                                <div class="w-full h-2.5 bg-brand-teal/5 rounded-full overflow-hidden border border-gray-800/30">
                                    <div
                                        class="h-full bg-gradient-to-r from-brand-teal to-cyan-500 rounded-full transition-all duration-1000 ease-out shadow-md shadow-brand-teal/10"
                                        :style="{ width: isMounted ? skill.percentage + '%' : '0%' }"
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="md:col-span-5 p-8 flex flex-col justify-between" :class="bentoCardStyles">
                        <div class="space-y-4">
                            <div class="flex items-center gap-3 text-brand-teal mb-2">
                                <i class="fas fa-graduation-cap text-xl"></i>
                                <h3 class="text-xl font-bold">Education & Timeline</h3>
                            </div>
                            
                            <div class="space-y-4 relative border-l border-gray-800 ml-2 pl-4">
                                <div class="relative">
                                    <span class="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-brand-teal"></span>
                                    <h4 class="text-xs font-bold text-white">Open-Source Full-Stack Specialization</h4>
                                    <span class="text-[10px] text-brand-teal font-mono block">ITI (Information Technology Institute)</span>
                                </div>
                                <div class="relative">
                                    <span class="absolute -left-[21px] top-1 w-2 h-2 rounded-full bg-gray-700"></span>
                                    <h4 class="text-xs font-bold text-gray-300">B.Sc. in Computer Science</h4>
                                    <span class="text-[10px] text-gray-500 font-mono block">Helwan University</span>
                                </div>
                            </div>
                        </div>

                        <div class="mt-6 p-3.5 bg-brand-teal/5 rounded-lg border border-brand-teal/10 flex items-center gap-3">
                            <div class="w-8 h-8 rounded bg-brand-teal/10 flex items-center justify-center text-brand-teal text-sm">
                                <i class="fas fa-chalkboard-teacher"></i>
                            </div>
                            <div>
                                <h4 class="text-[11px] font-bold text-gray-200 uppercase tracking-wider">Coding Instructor</h4>
                                <p class="text-[11px] text-gray-400">Reinforcing software engineering fundamentals by mentoring future developers.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `,

    data() {
        return {
            isMounted: false,
            // كلاس البنتو كارت الموحد والاحترافي (Bento Layout Standard)
            bentoCardStyles: "bg-brand-card border border-brand-border rounded-2xl hover:border-brand-teal/30 hover:bg-gray-900/20 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-teal/[0.02]",
            bioParagraph1: "I am a passionate Full-Stack Web Developer and Software Engineer who loves bridging the gap between robust backend architecture and interactive client-side experiences. I specialize in crafting secure, scalable ecosystems using modern design patterns.",
            bioParagraph2: "With deep technical knowledge in server-side frameworks like Node.js (NestJS) and PHP (Laravel), combined with the reactive power of Vue.js on the frontend, I build seamless digital products. I also maintain a strong interest in system containerization using Docker and blockchain integration.",
            skills: [
                { name: 'Backend Engineering (NestJS / Laravel)', percentage: 88 },
                { name: 'Frontend Development (Vue.js / Tailwind)', percentage: 82 },
                { name: 'Database Management (MySQL / PostgreSQL)', percentage: 78 },
                { name: 'DevOps & Tooling (Docker / Git)', percentage: 80 },
                { name: 'Blockchain & Smart Contracts (Solidity)', percentage: 65 }
            ]
        }
    },

    mounted() {
        setTimeout(() => {
            this.isMounted = true;
        }, 50);
    }
}