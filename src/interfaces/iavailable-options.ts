export interface IAvailableOptions {
    id?: string;
    type?: string;
    additionalCssClasses?: {
        svgContainer?: string,
        backgroundCircle?: string,
        foregroundCircle?: string,
        text?: string,
        icon?: string,
        point?: string,
        infoText?: string,
    };
    point?: boolean;
    pointSize?: number;
    percent: number;
    animation?: number;
    animationStep?: number;
    strokeGradient?: [string, string];
    icon?: string;
    text?: string;
    textBelow?: boolean;
    noPercentageSign?: boolean;
    animateInView?: boolean; //
    strokeLinecap?: string;
    update?: () => {};
    onAnimationEnd?: () => {};
    foregroundCircleWidth?: number;
    backgroundCircleWidth?: number;
    progressColor?: Array<{ percent: number, color: string }>; // TODO: implement
}
