import { ExclamationCircleIcon } from "@heroicons/react/16/solid"
import { useSearchParams } from "next/navigation"

const AdminAlert = () => {
    const success = useSearchParams().get('success')
    const fail = useSearchParams().get('fail')

    const alerts = [success, fail]
    const alertId = Number(alerts.map((alert, index)=> alert !== null ? index : null).filter(alert => alert !== null)[0])

    const messages = [
        'Success',
        'Fail',
    ]
    return (
        <div className={`d-flex gap-2 ${alertId === 0 ? 'text-success' : 'text-danger'}`}>
            <ExclamationCircleIcon className="icon-2" />
            <p>{messages[alertId]}</p>
        </div>
    )
}

export default AdminAlert