import { marked } from 'marked';
import DOMPurify from 'dompurify';

function sanitize(html: string): string {
	return DOMPurify.sanitize(html, { ADD_ATTR: ['target'], ADD_TAGS: ['a'] });
}

function addTargetBlank(html: string): string {
	return html.replace(/<a\s/g, '<a target="_blank" rel="noopener noreferrer" ');
}

export function renderMd(text: string): string {
	if (!text) return '';
	return addTargetBlank(sanitize(marked.parse(text, { async: false }) as string));
}

export function setMarkdown(node: HTMLElement, text: string) {
	node.innerHTML = renderMd(text);
	return { update(newText: string) { node.innerHTML = renderMd(newText); } };
}

export function setHtml(node: HTMLElement, html: string) {
	node.innerHTML = addTargetBlank(sanitize(html));
	return { update(newHtml: string) { node.innerHTML = addTargetBlank(sanitize(newHtml)); } };
}

export function autoResize(node: HTMLTextAreaElement) {
	const adjust = () => {
		node.style.height = 'auto';
		node.style.height = `${node.scrollHeight}px`;
	};
	node.addEventListener('input', adjust);
	adjust();
	return { destroy() { node.removeEventListener('input', adjust); } };
}

export function getLS(key: string): string | null {
	try { return localStorage.getItem(key); } catch { return null; }
}

export function setLS(key: string, value: string) {
	try { localStorage.setItem(key, value); } catch { /* incógnito */ }
}

export function removeLS(key: string) {
	try { localStorage.removeItem(key); } catch { /* incógnito */ }
}
