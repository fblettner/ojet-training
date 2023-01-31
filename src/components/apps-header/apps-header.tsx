/*
 * Copyright (c) 2022 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */
import { customElement, ExtendGlobalProps } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import * as ResponsiveUtils from "ojs/ojresponsiveutils";
import * as OffcanvasUtils from "ojs/ojoffcanvas";
import "ojs/ojtoolbar";
import "ojs/ojmenu";
import "ojs/ojbutton";
/**
 * 
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
*/

type Props = Readonly<{
  appName: string;
  userLogin: string;
}>;



@customElement("apps-header")
export class AppsHeader extends Component < ExtendGlobalProps < Props >> {
  static defaultProps: Partial < Props > = {
};

drawerParams: {
  selector: string;
  content: string;
  edge?: "start" | "end" | "top" | "bottom";
  displayMode?: "push" | "overlay";
  autoDismiss?: "focusLoss" | "none";
  size?: string;
  modality?: "modal" | "modeless";
};

render(props: Props): ComponentChild {
  const mediaQueryRef = useRef<MediaQueryList>(window.matchMedia(ResponsiveUtils.getFrameworkQuery("sm-only")));
  const [isSmallWidth, setIsSmallWidth] = useState(mediaQueryRef.current.matches);

  useEffect(() => {
    mediaQueryRef.current.addEventListener("change", handleMediaQueryChange);
    return (() => mediaQueryRef.current.removeEventListener("change", handleMediaQueryChange));
  }, [mediaQueryRef]);

  function handleMediaQueryChange(e: MediaQueryListEvent) {
    setIsSmallWidth(e.matches);
  }

  function getDisplayType() {
    return (isSmallWidth ? "icons" : "all");
  };

  function getEndIconClass() {
    return (isSmallWidth ? "oj-icon demo-appheader-avatar" : "oj-component-icon oj-button-menu-dropdown-icon");
  }

  const _toggleDrawer = ()  => {
    this.drawerParams = {
      displayMode: 'push',
      selector: '#navDrawer',
      content: '#appContainer'
    };
    return OffcanvasUtils.toggle(this.drawerParams);
  }

    return (
      <header role="banner" class="oj-web-applayout-header">
      <div class="oj-web-applayout-max-width oj-flex-bar oj-sm-align-items-center">
        <div class="oj-flex-bar-start">
          <oj-button id="drawerToggleButton" onojAction={_toggleDrawer} class="oj-button-lg"  chroming="borderless" display="icons">
            <span slot="startIcon" class="oj-web-applayout-offcanvas-icon"></span>
          </oj-button>
        </div>
        <div class="oj-flex-bar-middle oj-sm-align-items-baseline">
          <span
            role="img"
            class="oj-icon demo-oracle-icon"
            title="Oracle Logo"
            alt="Oracle Logo"></span>
          <h1
            class="oj-sm-only-hide oj-web-applayout-header-title"
            title="Application Name">
            {this.props.appName}
          </h1>
        </div>
        <div class="oj-flex-bar-end">
        <oj-toolbar>
          <oj-menu-button id="userMenu" display={getDisplayType()} chroming="borderless">
            <span>{this.props.userLogin}</span>
            <span slot="endIcon" class={getEndIconClass()}></span>
            <oj-menu id="menu1" slot="menu">
              <oj-option id="pref" value="pref">Preferences</oj-option>
              <oj-option id="help" value="help">Help</oj-option>
              <oj-option id="about" value="about">About</oj-option>
              <oj-option id="out" value="out">Sign Out</oj-option>
            </oj-menu>
          </oj-menu-button>
        </oj-toolbar>
        </div>
      </div>
    </header>
    )
    }
}
