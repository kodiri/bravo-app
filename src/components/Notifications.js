import { store } from 'react-notifications-component';

function triggerNotificationWarning() {
    store.addNotification({
      title: "Remember!",
      message: "Less than 2 days left for this item",
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

  function triggerNotificationDanger() {
    store.addNotification({
      title: "Sorry!",
      message: "This item is expired",
      type: "danger",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 5000,
        onScreen: true
      }
    });
  }

  export { triggerNotificationWarning, triggerNotificationDanger };