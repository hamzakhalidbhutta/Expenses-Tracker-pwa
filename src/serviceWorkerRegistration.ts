export const register = () => {
  if ("serviceWorker" in navigator) {
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      return;
    }

    const swUrl: string = `${process.env.PUBLIC_URL}/service-worker.ts`;

    navigator.serviceWorker
      .register(swUrl)
      .then((registration: any) => {
        console.log(registration);
      })
      .catch((e: any) => {
        console.log("error", e);
      });
  } else {
    console.warn("Service Worker not working!!!");
  }
};
