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
      <span className="checkmark"></span>
    </label>
  );
}

export default Checkbox;
