"use client";
import MapComponent from "../components/map/MapComponent";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import SideMenu from "@/components/side-menu/side-menu";
import { RecoilRoot } from "recoil";

/**
 * The Home Component sets up the application with a navigation bar for the user account, and panels that contain the map and side menu.
 * 
 * @returns {JSX.Element} The Home component.
 */

export default function Home() {
  return (
    <RecoilRoot>
      <main className="w-screen h-screen overflow-hidden flex flex-col">
        <div className="h-5/100">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>User Account</NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <ResizablePanelGroup
          id="resizablePanelGroup"
          direction="horizontal"
          className="w-screen rounded-lg border"
        >
          <ResizablePanel defaultSize={20} minSize={15}>
            <div className="flex h-full p-2 overflow-hidden">
              <SideMenu />
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={80}>
            <div className="flex flex-col h-full items-center justify-center relative">
              <MapComponent />
            </div>
          </ResizablePanel>
          <ResizableHandle />
        </ResizablePanelGroup>
      </main>
    </RecoilRoot>
  );
}
