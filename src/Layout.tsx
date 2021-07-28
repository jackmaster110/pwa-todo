import React from "react";
import { Layout, useLayoutNavigation } from 'react-md';
import { useLocation, Link } from "react-router-dom";
import App from "./App";
import { navTree } from "./navTree";

function MyLayout(): React.ReactElement {
    const { pathname } = useLocation();
    return (
        <Layout
            id="non-fixed-app-bar-layout"
            title="PWA Todo"
            navHeaderTitle="Lists"
            phoneLayout="temporary"
            tabletLayout="toggleable"
            landscapeTabletLayout="toggleable"
            desktopLayout="toggleable"
            appBarProps={{ fixed: false }}
            mainProps={{ component: "div", style: { padding: "1rem" } }}
            treeProps={useLayoutNavigation(navTree, pathname, Link)}
        >
            <App />
        </Layout>
    );
}

export default MyLayout;