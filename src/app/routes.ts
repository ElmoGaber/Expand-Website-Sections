import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Leadership } from "./pages/Leadership";
import { WhyXpand } from "./pages/WhyXpand";
import { Ghana } from "./pages/markets/Ghana";
import { KongoDRC } from "./pages/markets/KongoDRC";
import { Angola } from "./pages/markets/Angola";
import { Senegal } from "./pages/markets/Senegal";
import { Madagascar } from "./pages/markets/Madagascar";
import { Oman } from "./pages/markets/Oman";
import { Credentials } from "./pages/Credentials";
import { Opportunities } from "./pages/Opportunities";
import { Governance } from "./pages/Governance";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "leadership", Component: Leadership },
      { path: "why-xpand", Component: WhyXpand },
      { path: "markets/ghana", Component: Ghana },
      { path: "markets/kongo-drc", Component: KongoDRC },
      { path: "markets/angola", Component: Angola },
      { path: "markets/senegal", Component: Senegal },
      { path: "markets/madagascar", Component: Madagascar },
      { path: "markets/oman", Component: Oman },
      { path: "credentials", Component: Credentials },
      { path: "opportunities", Component: Opportunities },
      { path: "governance", Component: Governance },
      { path: "contact", Component: Contact },
    ],
  },
]);
