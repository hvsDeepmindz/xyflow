import type { SvelteComponentTyped } from 'svelte';
import type { Position } from '@reactflow/system';

export type NodeProps<NodeData extends Record<string, unknown> = Record<string, never>> = {
	id: string;
	data: NodeData;
	xPos: number;
	yPos: number;
	selected: boolean;
	isConnectable: boolean;
	sourcePosition: Position;
	targetPosition: Position;
};

export type NodeTypes = Record<string, typeof SvelteComponentTyped<NodeProps>>;