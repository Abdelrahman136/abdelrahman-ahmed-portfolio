export default {
    template: `
        <div id="home" class="max-w-7xl scroll-mt-16 mx-auto px-8 md:px-12 pt-24 pb-24 mt-8">
            <div class="pt-16 pb-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-white">
                <div class="space-y-6 pt-8">
                    <h1 class="text-5xl font-bold">{{ greeting }} <span class="text-brand-teal">{{ name }}</span></h1>
                    <h2 class="text-2xl text-gray-300 font-semibold">{{ speciality }}</h2>
                    <p class="text-gray-400 text-base leading-relaxed max-w-xl">{{ description }}</p>
                    <div class="flex items-center gap-4">
                        <button class="bg-brand-teal text-brand-dark px-6 py-3 rounded hover:bg-brand-tealHover transition-all">View Projects</button>
                        <button class="border border-gray-600 px-6 py-3 hover:bg-brand-button transition-colors">Contact Me</button>
                    </div>
                </div>
                <div class="flex justify-center md:justify-end">
                    <img :src="myPicture" class="w-80 h-80 rounded-full object-cover border-4 border-brand-teal shadow-2xl" />
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            greeting: "Hi, I'm",
            name: 'Abdelrahman Ahmed',
            speciality: 'Full Stack Web Developer & Software Engineer',
            description: 'I create beautiful, responsive and user-friendly websites and applications with modern technologies and best practices that help businesses grow and succeed online.',
            myPicture: './assets/imgs/avatar.jpg'
        }
    }
}