/*
 * Copyright (c) 2022 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */
import { customElement, ExtendGlobalProps, PropertyChanged } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
import "ojs/ojbutton";
import "ojs/ojinputtext";
import "ojs/ojformlayout";
import "ojs/ojlabel";
import "ojs/ojlabelvalue";
import { AppsProperties, UsersProperties } from "tools-model/loader";

/**
 * 
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
*/

type Props = Readonly<{
  onAppsPropertiesChanged?: PropertyChanged<AppsProperties>;
  appsProperties?: AppsProperties;

}>;

type State = {
  user: string;
  password: string;
}


@customElement("apps-login-page")
export class AppsLoginPage extends Component < ExtendGlobalProps < Props >, State> {
  static defaultProps: Partial < Props > = {
};


render(props: Props): ComponentChild {
  const onChanged = (event) => {
    this.setState({[event.currentTarget.id]: event.detail.value});
  };

  return (
    <div class="oj-flex oj-sm-flex-items-initial oj-sm-justify-content-center oj-sm-margin-4x">
      <div class="oj-flex-item forms-login-container oj-sm-align-items-center">
       <oj-form-layout  direction="row" columns={2} >
          <oj-label-value colspan={2} labelEdge="inside">
            <oj-input-text 
              id="user" 
              slot="value"
              label-hint="Login"
              label-edge="inside" 
              required 
              value={this.state.user}
              onvalueChanged={onChanged}>
            </oj-input-text>
          </oj-label-value>
          <oj-label-value colspan={2} labelEdge="inside">
            <oj-input-password 
              id="password" 
              slot="value"
              value={this.state.password}
              style="vertical-align:top" 
              label-hint="Password"
              label-edge="inside" 
              required
              onvalueChanged={onChanged}>
            </oj-input-password>
          </oj-label-value>
          <oj-label-value colspan={1} labelEdge="inside">
                <oj-button slot= "value" id='loginBtn' chroming="callToAction" onojAction={this._callLogin}>
                  <span class="small-caps">Login</span>
                  <span slot='endIcon' class="oj-ux-ico-log-in"></span>
                </oj-button>
          </oj-label-value>
      </oj-form-layout>
    </div>
    </div>
  );
  }

private _callLogin =() => {
  /* Add a function to test if login is valid or not */

  let userProperties = new UsersProperties();
  userProperties.id = this.state.user
  userProperties.name = this.state.user
  userProperties.status = true;

  this.props.onAppsPropertiesChanged?.({
    applicationName: "OJET TRAINING",
    userProperties: userProperties,
    version: "V1.0.0",
    devMode: false
   });
}

}
