import type { CaseStudy } from '$lib/types/project';
import { junin360 } from './junin360';
import { mediroosevelt } from './mediroosevelt';

export const projectsData: Record<string, CaseStudy> = {
	junin360,
	mediroosevelt
};
