// import { getMessaging, onTokenRefresh } from 'firebase/messaging' // Importing the necessary functions from firebase/messaging to initialize your behavior

// const messagingInstance = getMessaging(); // In this line of code we are initializing the FCM firebase messaging instance

// export const handleTokenRefresh = () => { 
//     onTokenRefresh(messagingInstance, () => { 
//         messagingInstance.getToken().then((refreshedToken) => {
//             console.log('Token refreshed.');
//             // Send Instance ID token to app server
//             sendTokenToServer(refreshedToken);
//             // ...
//         }).catch((err) => {
//             console.log('Unable to retrieve refreshed token ', err);
//             // showToken('Unable to retrieve refreshed token ', err);
//         });
//     });
// }

// Ricardo - I think this is the function that will send the token to the server 

