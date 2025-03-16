import { ButtonType, ButtonProps } from "@/app/lib/definitions"
import { useEffect, useState } from "react";

const Button = ({ name, value, icon, statuses}: ButtonProps) => {
    const [type, setType] = useState<ButtonType>('button')
    const className = `btn border border-primary text-primary d-flex align-items-center gap-1 ${value === 'toDeleted' && 'text-danger border-danger'}`;

    useEffect(() => {
        setType('button')
    }, [statuses])

    return (
        <button 
            className={className}
            type={type} 
            onClick={() => {
                setType('submit')
            }}
        >
            {icon}
            <span className="">{name}</span>
            {
                type === 'submit' && 
                <input type={"hidden"} name='action' value={value} />
            }
            {/* <input 
                type={"hidden"} 
                name='action' 
                value={value} 
            /> */}
        </button>
    )
}

export default Button