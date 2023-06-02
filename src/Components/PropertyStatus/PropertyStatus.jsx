// const propertyStatus = [
//     {
//         "statuses": "Awaiting Bank Processing",
//         "color": "#ffd056"
//     },
//     {
//         "statuses": "Payment Processed",
//         "color": "#75c282"
//     },
//     {
//         "statuses": "Expired: No Payment Received",
//         "color": "#f17e7e"
//     }
// ]

const STATUSES = ["Awaiting Bank Processing", "Payment Processed", "Expired: No Payment Received"];
const COLORS = ["#ffd056", "#75c282", "#f17e7e"]

export const PropertyStatus = ({status}) => {

    return (
        <div className='status'>
                    <p className='deal-stage item-title'>{STATUSES[status]}</p>
            <div className='color' style={{"backgroundColor": COLORS[status]}}></div>

        </div>
    )
}