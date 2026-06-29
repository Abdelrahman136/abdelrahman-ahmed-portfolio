export default {
    template: `
        <!-- الغلاف الخارجي: ممتد بكامل العرض، ثابت في الأعلى، وفوق كل العناصر بـ z-50 مع تأثير زجاجي غامق -->
        <nav class="fixed top-0 left-0 right-0 z-50 bg-brand-dark/75 backdrop-blur-md border-b border-gray-800/40 transition-all duration-300">
            
            <!-- الحاوية الداخلية: بتظبط الأبعاد القصوى والسنترة في نص الشاشة -->
            <div class="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center text-brand-text py-4">
                
                <!-- الـ Logo -->
                <div class="border-2 border-brand-teal p-3 py-1.5 rounded font-mono text-lg font-bold text-white tracking-wide">
                    Abdelrahman Ahmed
                </div>   
                
                <!-- روابط التنقل -->
                <div class="flex items-center gap-8 text-sm font-medium text-gray-300">
                    <a href="#home" class="text-brand-teal hover:text-brand-teal transition-colors">Home</a>
                    <a href="#about" class="hover:text-brand-teal transition-colors">About</a>
                    <a href="#projects" class="hover:text-brand-teal transition-colors">Projects</a>
                    <a href="#contact" class="hover:text-brand-teal transition-colors">Contact</a>
                </div>

            </div>
        </nav>
    `,
};