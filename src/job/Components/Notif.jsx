import { Store } from "react-notifications-component";

// const Notif = (props) => { 
//         Store.addNotification({
//             title: props.title,
//             message: props.message,
//             type: props.type,
//             insert: "top",
//             container: "top-right",
//             animationIn: ["animate__animated", "animate__fadeIn"],
//             animationOut: ["animate__animated", "animate__fadeOut"],
//             dismiss: {
//               duration: props.duration,
//               onScreen: true
//             }
//           })
// }

const Notif = ({ title, message, type, duration }) => {

    Store.addNotification({
        title: title,
        message: message,
        type: type,
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: duration,
            onScreen: true
        }
    })
}

export default Notif;