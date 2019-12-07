import { LitElement, TemplateResult, PropertyValues } from 'lit-element';
interface Handle {
    id: string;
    x: number;
    y: number;
    cx: number;
    cy: number;
    circle: SVGCircleElement;
}
export declare class CellCanvas extends LitElement {
    width: number;
    height: number;
    filler: string;
    handles: Handle[];
    private cells;
    private handlesGroup?;
    private svg?;
    private drawLayer?;
    cellSize: number;
    private cols;
    private rows;
    render(): TemplateResult;
    updated(changed: PropertyValues): void;
    private refreshGrid;
    setPixel(x: number, y: number, value: boolean): void;
    draw<T extends SVGElement>(name: string, map?: Map<string, string>): T;
    addHandle(id: string, x: number, y: number): void;
}
export {};
