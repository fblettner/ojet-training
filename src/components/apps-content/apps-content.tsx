/*
 * Copyright (c) 2022 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */
import { AppsLoginPage } from "apps-login-page/apps-login-page";
import { customElement, ExtendGlobalProps, PropertyChanged } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
import { AppsProperties } from "tools-model/loader";
/**
 * 
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
*/

type Props = Readonly<{
  menuLabel: string;
  onAppsPropertiesChanged?: PropertyChanged<AppsProperties>;  
  appsProperties: AppsProperties;
}>;

type State = {

}

@customElement("apps-content")
export class AppsContent extends Component < ExtendGlobalProps < Props >, State> {
  static defaultProps: Partial < Props > = {
};

state = {
  appsProperties: new AppsProperties

}

pageContent = () => {

  let content = (!this.props.appsProperties.userProperties.status) ? "LOGIN" :  "DEFAULT"

  switch (content) {
    case "LOGIN":
        return (
          <AppsLoginPage
            onAppsPropertiesChanged={this.handleAppsPropertiesChanged}      
            appsProperties={this.state.appsProperties}
          />
        );
    case "DEFAULT":
      return (
        <div class="oj-web-applayout-max-width oj-web-applayout-content">
          {this.props.menuLabel}
        </div>
      );

  }
}


render(props: Props): ComponentChild {

  
  return (
    this.pageContent()
  );
  }

private handleAppsPropertiesChanged = (newValue: AppsProperties) => {

  this.props.onAppsPropertiesChanged?.(newValue);
/*  this.setState({
    appsProperties: newValue
  });
*/
}
}
