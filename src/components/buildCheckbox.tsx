const BuildCheckbox = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
}) => {
  return (
    <div>
      <label htmlFor={label} className='mx-2'>
        {label}
      </label>
      <input
        id={label}
        alt={label}
        onChange={() => setValue(!value)}
        checked={value}
        type={'checkbox'}
      />
    </div>
  );
};

export default BuildCheckbox;
