export default {
    template: `
        <footer class="bg-brand-dark border-t border-gray-800/60 text-gray-500 py-12">
            <div class="max-w-7xl mx-auto px-8 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
                
                <!-- الجانب الأيسر: الاسم والحقوق -->
                <div class="text-center md:text-left space-y-1">
                    <p class="text-sm text-gray-400 font-medium">
                        &copy; {{ currentYear }} <span class="text-brand-teal">Abdelrahman Ahmed</span>. All rights reserved.
                    </p>
                    <p class="text-xs text-gray-600">Built with Vue.js 3 & Tailwind CSS</p>
                </div>

                <!-- الجانب الأوسط: روابط تنقل سريعة مريحة للمستخدم -->
                <div class="flex flex-wrap justify-center gap-6 text-xs font-semibold uppercase tracking-wider">
                    <a href="#home" class="text-gray-400 hover:text-brand-teal transition-colors duration-300">Home</a>
                    <a href="#about" class="text-gray-400 hover:text-brand-teal transition-colors duration-300">About</a>
                    <a href="#projects" class="text-gray-400 hover:text-brand-teal transition-colors duration-300">Projects</a>
                    <a href="#contact" class="text-gray-400 hover:text-brand-teal transition-colors duration-300">Contact</a>
                </div>

                <!-- الجانب الأيمن: تذكير سريع بأيقونات الشبكات -->
                <div class="flex items-center gap-4 text-gray-400 text-sm">
                    <a href="#" class="hover:text-brand-teal hover:-translate-y-0.5 transition-all duration-300"><i class="fab fa-linkedin-in"></i></a>
                    <a href="#" class="hover:text-brand-teal hover:-translate-y-0.5 transition-all duration-300"><i class="fab fa-github"></i></a>
                    <a href="#" class="hover:text-brand-teal hover:-translate-y-0.5 transition-all duration-300"><i class="fab fa-gitlab"></i></a>
                </div>

            </div>
        </footer>
    `,

    data() {
        return {
            // كود جافاسكريبت ذكي بيجيب السنة الحالية تلقائياً (هتطلع 2026) من غير ما تعدلها يدوي أبداً
            currentYear: new Date().getFullYear()
        }
    }
}