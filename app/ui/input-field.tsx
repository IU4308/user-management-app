import { InputFieldProps } from "../lib/definitions"

const InputField: React.FC<InputFieldProps> = ({ value, type, placeholder, name, icon, errors }) => {
    const inputValue = value !== null ? String(value) : ''
    return (
        <div className="container">
            <div className="input-group mb-3 mt-3">
                <span className="input-group-text border-0 border-bottom">
                    {icon}
                </span>
                <input type={type} className="form-control border-0 border-bottom rounded-0 p-3" placeholder={placeholder} name={name} defaultValue={inputValue} />
            </div>
            <div>
                {errors && <p className="text-danger">{errors[0]}</p>}
            </div>
        </div>
    )
}

export default InputField