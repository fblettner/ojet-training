import { customElement, ExtendGlobalProps, PropertyChanged } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
import { useEffect } from "preact/hooks";
import Context = require("ojs/ojcontext");
import { AppsFooter } from "apps-footer/loader";
import { AppsHeader } from "apps-header/loader";
import { AppsContent } from "apps-content/loader";
import { AppsMenus } from "apps-menus/loader";
import { AppsProperties } from "tools-model/loader";

type Props = Readonly<{
  appName?: string;
  userLogin?: string;
}>;

type State = {
  menuLabel: string;
  appsProperties: AppsProperties;
}

@customElement("app-root")
export class ojetTraining extends Component<ExtendGlobalProps<Props>, State> {
  static defaultProps: Props = {
    appName: "OJET Training",
    userLogin: "Franck Blettner",
  };

  state ={
    menuLabel: "OJET Training",
    appsProperties: new AppsProperties()
  }

  render(props: Props, state: State): ComponentChild {

    return (
    <div id="globalBody" class="oj-offcanvas-outer-wrapper oj-offcanvas-page">
          <AppsMenus
            onPageChanged={this.handleMenuPropertiesChanged}
          />
        <div id="appContainer" class="oj-web-applayout-page">
          <AppsHeader
            appsProperties={this.state.appsProperties} 
            userLogin={this.props.userLogin} 

          />
          <AppsContent 
            menuLabel={this.state.menuLabel}
            onAppsPropertiesChanged={this.handleAppsPropertiesPropertiesChanged}
            appsProperties={this.state.appsProperties}

          />
          <AppsFooter 
            copyright="NOMANA-IT @2023"
          />
        </div>
        </div>
    );    
  }

  private handleMenuPropertiesChanged =  async (newValue: any) => {
    this.setState({ 
      menuLabel: newValue.name
    });
  }

  private handleAppsPropertiesPropertiesChanged = (newValue: AppsProperties) => {
    console.log(newValue);
    this.setState({appsProperties: newValue})
  }

}
