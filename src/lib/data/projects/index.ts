import type { CaseStudy } from '$lib/types/project';
import { junin360 } from './junin360';
import { mediroosevelt } from './mediroosevelt';
import { farmape } from './farmape';
import { obstetraconecta } from './obstetraconecta';
import { diapis } from './diapis';

export const projectsData: Record<string, CaseStudy> = {
	junin360,
	mediroosevelt,
	farmape,
	obstetraconecta,
	diapis
};
