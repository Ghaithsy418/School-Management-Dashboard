interface CheckboxTypes {
  isChecked: boolean;
  handleChange: () => void;
}

function Checkbox({ isChecked, handleChange }: CheckboxTypes) {
  return (
    <label className="custom-checkbox">
      <input
        onChange={handleChange}
        checked={isChecked}
        name="dummy"
        type="checkbox"
      />
      <span className="checkmark dark:border dark:border-gray-600 dark:bg-gray-700"></span>
    </label>
  );
}

export default Checkbox;
