const SectionBase: React.FC<{
  id?: string;
  children?: React.ReactNode;
}> = ({ id, children }) => {
  const idValue = id != null ? `${id}` : "";
  return (
    <section className="inline-block w-screen h-screen snap-start" id={idValue}>
      <div className="flex flex-row h-full w-full overflow-hidden relative">
        {children}
      </div>
    </section>
  );
};
export default SectionBase;
