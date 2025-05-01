type Props = {
  selected: string;
  onChange: (val: string) => void;
};

export default function LevelSelector({ selected, onChange }: Props) {
  const options = [
    { label: "5 year old", value: "5yo" },
    { label: "Teenager", value: "teen" },
    { label: "Professional", value: "pro" },
  ];

  return (
    <div className="space-y-3">
      {options.map((opt) => (
        <label
          key={opt.value}
          className="flex items-center gap-3 text-lg leading-none"
        >
          <input
            type="radio"
            value={opt.value}
            checked={selected === opt.value}
            onChange={() => onChange(opt.value)}
            className="h-5 w-5 accent-[#58935D] cursor-pointer"
          />
          <span className="cursor-pointer select-none">{opt.label}</span>
        </label>
      ))}
    </div>
  );
}
