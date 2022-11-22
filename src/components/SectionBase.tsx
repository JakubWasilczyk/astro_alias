const SectionBase: React.FC<{
    id?: string,
    children?: React.ReactNode
}> = ({ 
    id,
    children 
}) => {
    const idValue = id != null ? `${id}` : '';
    return (
        <section className="inline-block min-w-[100vw] max-h-[100vh] w-screen h-screen snap-x" id={idValue}>
            <div className="flex flex-row h-screen w-screen overflow-hidden relative">
                {children}
            </div>
        </section>
    );
}
export default SectionBase;