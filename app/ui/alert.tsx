import { ExclamationCircleIcon } from "@heroicons/react/16/solid"
import { useSearchParams } from "next/navigation"

const Alert = () => {
    const success = useSearchParams().get('success')
    const blocked = useSearchParams().get('blocked')
    const deleted = useSearchParams().get('deleted')

    const alerts = [success, blocked, deleted]
    const alertId = Number(alerts.map((alert, index)=> alert !== null ? index : null).filter(alert => alert !== null)[0])

    console.log(isNaN(alertId))

    // console.log(alert)

    const messages = [
        'An account has been created successfully',
        'Your account has been blocked',
        'Your account has been deleted',
    ]

    // console.log(messages[alertId])
    

    // const message = success || blocked || deleted || error ? messages;

    return !isNaN(alertId) && (
        <div className={`d-flex gap-2 ${alertId === 0 ? 'text-success' : 'text-danger'}`}>
            <ExclamationCircleIcon className="icon-2" />
            <p>{messages[alertId]}</p>
        </div>
    )
}

export default Alert