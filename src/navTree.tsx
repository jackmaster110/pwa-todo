import React, { ReactNode } from "react";
import { MdList, MdNoteAdd } from "react-icons/md";
import { HomeSVGIcon, LayoutNavigationItem, LayoutNavigationTree } from 'react-md';

const createRoute = (
    to: string,
    name: string,
    icon: ReactNode,
    parentId: string | null = null
  ): LayoutNavigationItem => ({
    to,
    itemId: to,
    parentId,
    children: name,
    leftAddon: icon
  });

export const navTree: LayoutNavigationTree = {
    "/": createRoute("/", "Home", <HomeSVGIcon />),
    "/list1": createRoute("/list1", "List 1", <MdList />),
    "/add": createRoute("/add", "Add List", <MdNoteAdd />),
};

export const addToNavTree = (path: string, title: string) => {
  navTree[path] = createRoute(path, title, <MdList />);
  delete navTree["/add"];
  navTree["/add"] = createRoute("/add", "Add List", <MdNoteAdd />);
};