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

export const MyLabel = ({
  allCaps,
  color,
  backgroundColor = 'transparent',
  label = 'No label',
  size = 'normal',
  fontColor,
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: `${fontColor}`, backgroundColor }}
    >
      {(allCaps && label.toUpperCase()) || label}
    </span>
  );
};
