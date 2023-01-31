/*
 * Copyright (c) 2022 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */
import { customElement, ExtendGlobalProps, PropertyChanged } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
import "ojs/ojbutton";
import "ojs/ojnavigationlist";
import { ojNavigationList } from "ojs/ojnavigationlist";
import { MutableArrayTreeDataProvider } from 'ojs/ojmutablearraytreedataprovider';
import * as OffcanvasUtils from "ojs/ojoffcanvas";


/**
 * 
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
*/

type Props = Readonly<{
  page?: string;
  onPageChanged?: PropertyChanged<string>;
}>;


@customElement("apps-content")
export class AppsMenus extends Component < ExtendGlobalProps < Props >> {
  static defaultProps: Partial < Props > = {
};

menusDataProvider: MutableArrayTreeDataProvider<string, any>;

constructor(props: ExtendGlobalProps<Props>) {
  super(props);
  this.menusDataProvider = new MutableArrayTreeDataProvider([], "id", {
    keyAttributeScope: 'global'
  });

  this.menusDataProvider.data = [
    {
      "id": "home",
      "name": "Home",
      "icons": "oj-ux-ico-home",
      "disabled" : "false"
    },
    {
      "id": "gettingstarted",
      "name": "Getting Started",
      "icons": "oj-ux-ico-education",
      "children": [
        {
          "id": "download",
          "name": "Download",
          "icons": ""
        },
        {
          "id": "quickstart",
          "name": "Quick Start",
          "icons": ""
        },
        {
          "id": "build",
          "name": "Build",
          "icons": ""
        },
        {
          "id": "testing",
          "name": "Testing",
          "icons": ""
        }
      ]
    },
    {
      "id": "cookbook",
      "name": "Cookbook",
      "icons": "oj-ux-ico-book",
      "children": [
        {
          "id": "sample1",
          "name": "Sample 1",
          "icons": ""
        },
        {
          "id": "sample",
          "name": "Sample ",
          "icons": ""
        },
        {
          "id": "sample3",
          "name": "Sample 3",
          "icons": ""
        },
        {
          "id": "sample4",
          "name": "Sample 4",
          "icons": ""
        }
      ]
    },
    {
      "id": "stylelab",
      "name": "Style Lab",
      "disabled": "true",
      "icons": "oj-ux-ico-color-palette"
    },
    {
      "id": "library",
      "name": "Library",
      "icons": "oj-ux-ico-library",
      "children": [
        {
          "id": "articles",
          "name": "Articles",
          "icons": "oj-ux-ico-book"
        },
        {
          "id": "audios",
          "name": "Audio Books",
          "icons": "oj-ux-ico-book"
        },
        {
          "id": "videos",
          "name": "Videos",
          "icons": "oj-ux-ico-book"
        },
        {
          "id": "next",
          "name": "Next",
          "icons": "oj-ux-ico-book"
        }
      ]
    }
  ];
}

drawerParams: {
  selector: string;
  content: string;
  edge?: "start" | "end" | "top" | "bottom";
  displayMode?: "push" | "overlay";
  autoDismiss?: "focusLoss" | "none";
  size?: string;
  modality?: "modal" | "modeless";
};

renderNavList = (item: ojNavigationList.ItemContext<string, string>) => {

  return (
    <li id={item.data.id} class={(item.data.disabled === "true") ? "oj-disabled" : "" }>
      <a href="#">
        <span class={"oj-navigationlist-item-icon " + item.data.icons}></span>
        {item.data.name}
      </a>
    </li>
  );
};


pageChangeHandler = (
  event: ojNavigationList.selectionChanged<string,null>
) => {
  this.drawerParams = {
    displayMode: 'push',
    selector: '#navDrawer',
    content: '#appContainer'
  };

  OffcanvasUtils.toggle(this.drawerParams);

  const findById = (key) => (arr) => {
    if (!arr.length) return null;
  
    return (
      arr.find((obj) => obj["id"] === key) ||
      findById(key)(arr.flatMap((el) => el?.children).filter(Boolean))
    );
  };
  
  const findId = (key) => findById(key)(this.menusDataProvider.data);
  this.props.onPageChanged(findId(event.detail.value));
};

render(props: Props): ComponentChild {
  return (
    (
      <div
        id="navDrawer"
        role="navigation"
        class="oj-contrast-marker oj-web-applayout-offcanvas oj-offcanvas-start">
        <oj-navigation-list 
            root-label="Navigation"
            id="navDrawerList" 
            edge="start"
            drill-mode="sliding" 
            onselectionChanged={this.pageChangeHandler}     
            selection={this.props.page}
            data={this.menusDataProvider}>    
            <template slot="itemTemplate" render={this.renderNavList} />       
        </oj-navigation-list>
      </div>
  
)
  );
  }

}
