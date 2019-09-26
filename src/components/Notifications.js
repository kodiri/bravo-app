import { store } from 'react-notifications-component';

function triggerNotificationWarning(item) {
    store.addNotification({
      title: "Remember!",
      message: `To use the ${item.name}`,
      type: "warning",
      insert: "top",
      container: "top-left",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  }

  function triggerNotificationDanger(item) {
    store.addNotification({
      title: "Sorry!",
      message: `The ${item.name} is/are expired`,
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true,
      }
    });
  }

  export { triggerNotificationWarning, triggerNotificationDanger };