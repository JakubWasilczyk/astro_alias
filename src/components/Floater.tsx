const Floater: React.FC<{ 
    image: string, 
    top?: string, 
    left?: string, 
    bottom?: string, 
    right?: string, 
    width: number, 
    height?: number | null, 
    delay?: string, 
    duration?: string 
}> = ({ 
    image, 
    top, 
    left, 
    bottom, 
    right, 
    width, 
    height, 
    delay = 0, 
    duration = 10 
}) => {
        const topValue = top ? `${top}` : 'unset';
        const leftValue = left ? `${left}` : 'unset';
        const bottomValue = bottom ? `${bottom}` : 'unset';
        const rightValue = right ? `${right}` : 'unset';
        const delayValue = `${delay}`;
        const durationValue = `${duration}`;
        return (
            <div className={`animate-float absolute`} style={{ top: topValue, left: leftValue, bottom: bottomValue, right: rightValue, animationDelay: delayValue, animationDuration: durationValue }}>
                <img width={width} height={height ?? "auto"} src={image} />
            </div>
        );
    }
export default Floater;