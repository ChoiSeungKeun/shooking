import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App.jsx";

async function enableMocking() {
  const { worker } = await import("./mocks/browser");
  await worker.start({
    serviceWorker: {
      url: "/shooking/mockServiceWorker.js",
    },
    onUnhandledRequest: "bypass",
  });
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")).render(
    <RecoilRoot>
      <HashRouter>
        <App />
      </HashRouter>
    </RecoilRoot>
  );
});
