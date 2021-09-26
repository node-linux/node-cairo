declare module 'cairo' {

    export enum TextAlign {
        Left = 0b001,
        Right = 0b011,
        Centre = 0b100,
    }

    export enum TextStyle {
        Bold = 0b0001,
        Italic = 0b0010,
    }

    export interface TextProps {
        font: string,
        sizee: number,
        align: TextAlign,
        style: TextStyle
    }

    export interface Text {
        width: number,
        height: number,
        baseline: number,
        bounds(bounds: Rect);
        paint(bounds: Rect);
    }

    export interface Drawing {
        fill(colour: RGB),
        rect(rect: Rect);

        text(str: string, props: TextProps): Text;

        flush();
        destroy();
    };

    export type RGB = [r: number, g: number, b: number];

    export type Rect = {
        x: number,
        y: number,
        width: number,
        height: number,
        radius?: number
    };

    export interface Device {
        readonly width: number,
        readonly height: number,

        readonly device: string,

        buffer: Buffer;

        close();
    }

    export function create(dev: Device): Drawing
}

export namespace cairo {}
