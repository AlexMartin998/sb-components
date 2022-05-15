/// <reference types="react" />
import './mylabel.css';
export interface MyLabelProps {
    /**
     * Do you want to capitalize the label?
     */
    allCaps: boolean;
    /**
     * What bg color to use
     */
    backgroundColor: string;
    /**
     * What text color to use
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Font Color
     */
    fontColor?: string;
    /**
     * Label contents
     */
    label: string;
    /**
     * How large should the button be?
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
}
export declare const MyLabel: ({ allCaps, color, backgroundColor, label, size, fontColor, }: MyLabelProps) => JSX.Element;
