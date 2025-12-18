export interface CaseStudy {
	id: string;
	meta: {
		title: string;
		description: string;
		tagline: string;
		date: string;
		role: string;
		keywords: string[];
		stack: string[];
		bgHero: { src: string; alt: string };
		heroImage: { src: string; alt: string };
		ogImage?: { src: string; alt: string };
	};
	context: {
		client: string;
		logo: string;
		problem: string;
		constraints: string[];
	};
	myRole: {
		description: string;
		deliverables: string[];
	};
	research: {
		methods: string[];
		findings: { title: string; desc: string }[];
		insight: string;
	};
	solution: {
		concept: string;
		decisions: string[];
	};
	ui: {
		description: string;
		gallery: { src: string; alt: string; caption?: string }[];
	};
	tech: {
		stackDetails: string;
		challenges: string[];
	};
	results: {
		metrics: { value: string; label: string }[];
		feedback: string;
	};
	lessons: string[];
	assets: {
		liveUrl?: string;
		videoYoutube?: string;
	};
}
