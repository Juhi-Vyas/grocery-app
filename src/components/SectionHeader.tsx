type SectionHeaderProps = {
  title: string;
};

function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <div className="flex justify-between items-center px-5 mt-8">
      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <button className="text-green-500 text-sm">
        See All
      </button>
    </div>
  );
}

export default SectionHeader;