export default {
    template: `
        <section id="projects" class="py-20 scroll-mt-16 border-b border-gray-800/50 text-white bg-brand-dark">
            <div class="max-w-7xl mx-auto px-8 md:px-12">
                
                <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <h2 class="text-4xl font-bold tracking-wide inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-1/3 after:h-1 after:bg-brand-teal after:rounded">
                            Featured <span class="text-brand-teal">Projects</span>
                        </h2>
                        <p class="text-gray-400 mt-4 text-sm max-w-md">A showcase of production-ready systems, team collaborations, and standalone solutions I've architected.</p>
                    </div>
                    
                    <div class="flex flex-wrap gap-2 bg-gray-900/60 p-1.5 rounded-lg border border-gray-800">
                        <button 
                            v-for="tab in tabs" 
                            :key="tab.value"
                            @click="currentFilter = tab.value"
                            :class="[
                                'px-4 py-2 text-xs font-semibold rounded-md transition-all duration-300',
                                currentFilter === tab.value 
                                    ? 'bg-brand-teal text-brand-dark shadow-md shadow-brand-teal/20' 
                                    : 'text-gray-400 hover:text-white'
                            ]"
                        >
                            {{ tab.name }}
                        </button>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    <div 
                        v-for="(project, index) in filteredProjects" 
                        :key="index" 
                        class="group bg-brand-card border border-brand-border rounded-xl overflow-hidden hover:border-brand-teal/40 hover:shadow-2xl hover:shadow-brand-teal/5 transition-all duration-300 flex flex-col h-full"
                    >
                        <div class="p-6 flex-grow space-y-4">
                            <div class="flex justify-between items-center">
                                <span class="text-[10px] uppercase tracking-widest font-extrabold px-2.5 py-1 rounded bg-brand-teal/10 text-brand-teal">
                                    {{ project.category }}
                                </span>
                                <div class="flex items-center gap-3 text-gray-400">
                                    <a :href="project.github" class="hover:text-brand-teal transition-colors"><i class="fab fa-github text-lg"></i></a>
                                    <a :href="project.live" class="hover:text-brand-teal transition-colors"><i class="fas fa-external-link-alt text-sm"></i></a>
                                </div>
                            </div>

                            <h3 class="text-xl font-bold group-hover:text-brand-teal transition-colors duration-300">
                                {{ project.title }}
                            </h3>
                            <p class="text-gray-400 text-xs leading-relaxed">
                                {{ project.description }}
                            </p>

                            <div class="bg-gray-950/50 p-3 rounded-lg border border-gray-800/40 space-y-1">
                                <span class="text-[11px] font-bold text-brand-teal block uppercase tracking-wider">My Key Contribution:</span>
                                <p class="text-gray-300 text-[11px] leading-normal italic">
                                    {{ project.contribution }}
                                </p>
                            </div>
                        </div>

                        <div class="px-6 pb-6 pt-2 flex flex-wrap gap-1.5 mt-auto">
                            <span 
                                v-for="(tech, tIndex) in project.tags" 
                                :key="tIndex" 
                                class="text-[10px] font-mono bg-gray-800/60 text-gray-300 px-2 py-0.5 rounded border border-gray-700/30"
                            >
                                {{ tech }}
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    `,

    data() {
        return {
            currentFilter: 'all',
            // تعريف الأزرار
            tabs: [
                { name: 'All Work', value: 'all' },
                { name: 'Backend & Microservices', value: 'backend' },
                { name: 'Full-Stack & Real-time', value: 'fullstack' },
                { name: 'AI & Automation', value: 'ai' }
            ],
            // البيانات الحقيقية المستخرجة من خبرتك وصياغة مساهمتك بذكاء
            projects: [
                {
                    title: 'Naqwah Art Marketplace Platform',
                    description: 'A large-scale multi-vendor art marketplace backend engineered with microservices architecture to support secure artwork management and live bidding engine.',
                    contribution: 'Architected & owned 7 independent microservices (Auth, Artwork, Auctions, Orders) using NestJS and designed a real-time live bidding framework with WebSockets.',
                    category: 'backend',
                    tags: ['NestJS', 'TypeScript', 'MySQL', 'WebSockets', 'Microservices'],
                    github: '#',
                    live: '#'
                },
                {
                    title: 'Collaborative Live Code Editor',
                    description: 'A Google-Docs style collaborative developer environment platform featuring instant multi-user synchronization and workspace messaging channels.',
                    contribution: 'Engineered the server-side REST API layers and implemented the multi-role access controls and live team communication socket systems using Laravel Reverb.',
                    category: 'fullstack',
                    tags: ['Laravel', 'React', 'WebRTC', 'Yjs', 'Monaco Editor'],
                    github: '#',
                    live: '#'
                },
                {
                    title: 'AI-Powered WhatsApp Automation System',
                    description: 'An enterprise-grade customer relationship automation engine integrating large language models for smart workflow execution directly into messaging streams.',
                    contribution: 'Independently developed the entire Node.js core automation logic, configured natural language processing models, and orchestrated scaling via Docker containers on AWS infrastructure.',
                    category: 'ai',
                    tags: ['Node.js', 'Python', 'NLP / OCR', 'AWS', 'Docker'],
                    github: '#',
                    live: '#'
                }
            ]
        }
    },

    // السحر كله هنا: الـ Computed Property اللي بتعمل الفلترة بدون تكرار
    computed: {
        filteredProjects() {
            if (this.currentFilter === 'all') {
                return this.projects;
            }
            return this.projects.filter(project => project.category === this.currentFilter);
        }
    }
}