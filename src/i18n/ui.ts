import SpainFlag from '../components/flags/Spain.astro';
import AndorraFlag from '../components/flags/Catalonia.astro';
import UnitedStatesFlag from '../components/flags/England.astro';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	ca: {
		code: 'ca',
		name: 'Català',
		flag: AndorraFlag,
	},
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.projects': 'Proyectos',
		'nav.skills': 'Habilidades',
		'nav.studies': 'Experiencia',
		'nav.about': 'Sobre mí',
		'nav.contact': 'Contacto',
	},
	en: {
		'nav.projects': 'Projects',
		'nav.skills': 'Skills',
		'nav.studies': 'Experience',
		'nav.about': 'About me',
		'nav.contact': 'Contact',
	},
	ca: {
		'nav.projects': 'Projectes',
		'nav.skills': 'Habilitats',
		'nav.studies': 'Experiència',
		'nav.about': 'Sobre mi',
		'nav.contact': 'Contacte',
	},
} as const;

export const routes = {
	es: {
		projects: 'proyectos',
		skills: 'habilidades',
		studies: 'experiencia',
		about: 'sobre-mi',
		contact: 'contacto',
	},
	en: {
		projects: 'projects',
		skills: 'skills',
		studies: 'experience',
		about: 'about-me',
		contact: 'contact',
	},
	ca: {
		projects: 'projectes',
		skills: 'habilitats',
		studies: 'experiencia',
		about: 'sobre-mi',
		contact: 'contacte',
	},
};