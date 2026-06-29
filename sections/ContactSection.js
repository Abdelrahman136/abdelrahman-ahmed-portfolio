export default {
    template: `
        <section id="contact" class="py-20 scroll-mt-16 text-white bg-brand-darkTheme2">
            <div class="max-w-7xl mx-auto px-8 md:px-12">
                
                <div class="mb-16 text-center md:text-left">
                    <h2 class="text-4xl font-bold tracking-wide inline-block relative after:content-[''] after:absolute after:-bottom-3 after:left-0 after:w-1/3 after:h-1 after:bg-brand-teal after:rounded">
                        Contact <span class="text-brand-teal">Me</span>
                    </h2>
                    <p class="text-gray-400 mt-4 text-sm">Have an exciting project or a job opportunity? Let\'s build something amazing together!</p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    <div class="lg:col-span-4 space-y-8">
                        <div class="bg-brand-card border border-gray-800 p-6 rounded-xl space-y-6">
                            <h3 class="text-xl font-bold text-brand-teal">Get In Touch</h3>
                            
                            <div class="space-y-4">
                                <div class="flex items-center gap-4 group">
                                    <div class="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-textHover transition-all duration-300">
                                        <i class="fas fa-envelope"></i>
                                    </div>
                                    <div>
                                        <span class="text-xs text-gray-500 block">Email Me</span>
                                        <a href="mailto:abdelrahmanrashed136@gmail.com" class="text-sm text-gray-300 hover:text-brand-teal transition-colors font-mono">abdelrahmanrashed136@gmail.com</a>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4 group">
                                    <div class="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-textHover transition-all duration-300">
                                        <i class="fas fa-phone-alt"></i>
                                    </div>
                                    <div>
                                        <span class="text-xs text-gray-500 block">Call Me</span>
                                        <a href="tel:+201092407318" class="text-sm text-gray-300 hover:text-brand-teal transition-colors font-mono">+201092407318</a>
                                    </div>
                                </div>

                                <div class="flex items-center gap-4 group">
                                    <div class="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-textHover transition-all duration-300">
                                        <i class="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div>
                                        <span class="text-xs text-gray-500 block">Location</span>
                                        <span class="text-sm text-gray-300">Giza, Egypt</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="bg-brand-card border border-gray-800 p-6 rounded-xl">
                            <h4 class="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Professional Ecosystem</h4>
                            <div class="flex gap-3">
                                <a href="#" class="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand-teal hover:text-brand-textHover hover:-translate-y-1 transition-all duration-300"><i class="fab fa-linkedin-in"></i></a>
                                <a href="#" class="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand-teal hover:text-brand-textHover hover:-translate-y-1 transition-all duration-300"><i class="fab fa-github"></i></a>
                                <a href="#" class="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand-teal hover:text-brand-textHover hover:-translate-y-1 transition-all duration-300"><i class="fab fa-gitlab"></i></a>
                                <a href="#" class="w-10 h-10 rounded-md bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-brand-teal hover:text-brand-textHover hover:-translate-y-1 transition-all duration-300"><i class="fas fa-code"></i></a>
                            </div>
                        </div>
                    </div>

                    <div class="lg:col-span-8 bg-gray-900/20 border border-gray-800 p-8 rounded-xl relative overflow-hidden min-h-[450px] flex items-center">
                        
                        <div v-if="isSuccess" class="w-full text-center space-y-4 py-12 transition-all duration-500">
                            <div class="w-16 h-16 bg-brand-teal/15 text-brand-teal rounded-full flex items-center justify-center text-3xl mx-auto border border-brand-teal/30 animate-bounce">
                                ⻪
                            </div>
                            <h3 class="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                            <p class="text-gray-400 text-sm max-w-sm mx-auto">Thank you, Abdelrahman will get back to you as soon as possible.</p>
                            <button @click="resetForm" class="text-xs text-brand-teal underline hover:text-brand-textHoverTheme2 transition-colors pt-4">Send another message</button>
                        </div>

                        <form v-else @submit.prevent="handleSubmit" class="w-full space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div class="space-y-1.5">
                                    <label class="text-xs font-semibold text-gray-400">Your Name</label>
                                    <input 
                                        type="text" 
                                        v-model.trim="form.name"
                                        :class="['w-full bg-gray-900/60 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-300', errors.name ? 'border-red-500/50 focus:ring-red-500/20' : 'border-gray-800 focus:border-brand-teal focus:ring-brand-teal/20']"
                                        placeholder="Ali Saeed"
                                    />
                                    <span v-if="errors.name" class="text-[11px] text-red-400 flex items-center gap-1">⚠ {{ errors.name }}</span>
                                </div>

                                <div class="space-y-1.5">
                                    <label class="text-xs font-semibold text-gray-400">Email Address</label>
                                    <input 
                                        type="text" 
                                        v-model.trim="form.email"
                                        :class="['w-full bg-gray-900/60 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-300', errors.email ? 'border-red-500/50 focus:ring-red-500/20' : 'border-gray-800 focus:border-brand-teal focus:ring-brand-teal/20']"
                                        placeholder="saeedAli99@example.com"
                                    />
                                    <span v-if="errors.email" class="text-[11px] text-red-400 flex items-center gap-1">⚠ {{ errors.email }}</span>
                                </div>
                            </div>

                            <div class="space-y-1.5">
                                <label class="text-xs font-semibold text-gray-400">Subject</label>
                                <input 
                                    type="text" 
                                    v-model.trim="form.subject"
                                    :class="['w-full bg-gray-900/60 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-300', errors.subject ? 'border-red-500/50 focus:ring-red-500/20' : 'border-gray-800 focus:border-brand-teal focus:ring-brand-teal/20']"
                                    placeholder="Project Collaboration"
                                />
                                <span v-if="errors.subject" class="text-[11px] text-red-400 flex items-center gap-1">⚠ {{ errors.subject }}</span>
                            </div>

                            <div class="space-y-1.5">
                                <label class="text-xs font-semibold text-gray-400">Your Message</label>
                                <textarea 
                                    rows="4" 
                                    v-model.trim="form.message"
                                    :class="['w-full bg-gray-900/60 border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all duration-300 resize-none', errors.message ? 'border-red-500/50 focus:ring-red-500/20' : 'border-gray-800 focus:border-brand-teal focus:ring-brand-teal/20']"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                                <span v-if="errors.message" class="text-[11px] text-red-400 flex items-center gap-1">⚠ {{ errors.message }}</span>
                            </div>

                            <button 
                                type="submit" 
                                :disabled="isSubmitting"
                                class="w-full bg-brand-teal text-brand-dark font-bold text-sm py-3.5 px-6 rounded-lg hover:bg-brand-darkHover disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-brand-teal/10 flex items-center justify-center gap-2"
                            >
                                <span v-if="isSubmitting" class="inline-block animate-spin border-2 border-brand-dark border-t-transparent rounded-full w-4 h-4"></span>
                                {{ isSubmitting ? 'Sending Message...' : 'Send Message' }}
                            </button>
                        </form>

                    </div>

                </div>
            </div>
        </section>
    `,

    data() {
        return {
            form: {
                name: '',
                email: '',
                subject: '',
                message: ''
            },
            errors: {},
            isSubmitting: false,
            isSuccess: false
        }
    },

    methods: {
        validateForm() {
            this.errors = {};

            if (!this.form.name) {
                this.errors.name = 'Name is required';
            }

            if (!this.form.email) {
                this.errors.email = 'Email is required';
            } else if (!this.validEmail(this.form.email)) {
                this.errors.email = 'Invalid email format';
            }

            if (!this.form.subject) {
                this.errors.subject = 'Subject is required';
            }

            if (!this.form.message) {
                this.errors.message = 'Message is required';
            } else if (this.form.message.length < 10) {
                this.errors.message = 'Message must be at least 10 characters';
            }

            return Object.keys(this.errors).length === 0;
        },

        validEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },

        handleSubmit() {
            if (!this.validateForm()) {
                return;
            }

            this.isSubmitting = true;
            
            setTimeout(() => {
                this.isSubmitting = false;
                this.isSuccess = true;
                this.form = { name: '', email: '', subject: '', message: '' };
            }, 2000);
        },


        resetForm() {
            this.form = { name: '', email: '', subject: '', message: '' };
            this.errors = {};
            this.isSubmitting = false;
            this.isSuccess = false;
        }
    }
}