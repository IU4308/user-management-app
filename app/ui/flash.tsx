import { ExclamationCircleIcon } from "@heroicons/react/16/solid"
import { flashMessage } from "@thewebartisan7/next-flash-message";
import { useEffect, useState } from "react";

type Alert = {
    message: string;
    type: string | undefined
}

const Flash = () => {
    const [alert, setAlert] = useState<Alert | null>(null);
    
    useEffect(() => {
        const showFlashMessage = async () => {
            const flash = await flashMessage();
            
            if (flash) {
                setAlert({
                    message: flash.message,
                    type: flash?.level
                });
            }
        };
    
        showFlashMessage();
    }, []);

    console.log(alert)

    return alert && (
        <div className={`d-flex align-items-center gap-2 ${alert?.type === 'success' ? 'text-success' : 'text-danger'}`}>
            <ExclamationCircleIcon className="icon-2" />
            <p className="mt-3">{alert.message}</p>
        </div>
    )
}

export default Flash