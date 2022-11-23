export interface FloaterProps extends React.SVGAttributes<SVGElement> {
    image: string;
    top?: string;
    left?: string;
    bottom?: string;
    right?: string;
    width: number;
    height?: number;
    delay?: string;
    duration?: string;
    className?: string;
}


const Floater: React.FC<FloaterProps> = (props) => {
        const topValue = props.top ? `${props.top}` : 'unset';
        const leftValue = props.left ? `${props.left}` : 'unset';
        const bottomValue = props.bottom ? `${props.bottom}` : 'unset';
        const rightValue = props.right ? `${props.right}` : 'unset';
        const delayValue = `${props.delay}`;
        const durationValue = `${props.duration}`;
        return (
            <div className={`animate-float absolute ${props.className}`} style={{ top: topValue, left: leftValue, bottom: bottomValue, right: rightValue, animationDelay: delayValue, animationDuration: durationValue }}>
                <img width={props.width} height={props.height ?? "auto"} src={props.image} alt='F' />
            </div>
        );
    }
export default Floater;