import { useEffect } from "react"

const useNotification = () => {
    const requestNotificationPermission = async () => {
        const permission = await Notification.requestPermission()

        if (permission !== "granted") {
            alert("Permissão não concedida!")
        }
    }

    const sendNotification = (title, options) => {
        if (Notification.permission === 'granted') {
            new Notification(title, options);
            console.log('criou!')
        } else {
            alert("Permissão não concedida!")
        }
    }

    const sendTestNotification = () => {
        const options = {
            body: 'Notificação de teste',
            icon: '/icon-192x192.png',
        }

        sendNotification('Título legal', options);
    }

    useEffect(() => {
        requestNotificationPermission();   
    }, []);

    return {sendTestNotification}
}

export default useNotification