import NavbarComponent from './components/NavbarComponent.js';
import HeroSection from './sections/HeroSection.js';
import AboutSection from './sections/AboutSection.js';
import ProjectsSection from './sections/ProjectsSection.js';
import ContactSection from './sections/ContactSection.js';
import FooterComponent from './components/FooterComponent.js';

export default {
    components: {
        NavbarComponent,
        HeroSection,
        AboutSection,
        ProjectsSection,
        ContactSection,
        FooterComponent
    },

    template: `
        <div class="min-h-screen flex flex-col justify-between text-white bg-brand-dark">
            <navbar-component />
            <main class="flex-grow pt-24">
                <hero-section />
                <about-section />
                <projects-section />
                <contact-section />
            </main>
            <footer-component />
        </div>
    `
}