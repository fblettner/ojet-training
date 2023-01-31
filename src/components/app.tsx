import { customElement, ExtendGlobalProps, PropertyChanged } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
import { useEffect } from "preact/hooks";
import Context = require("ojs/ojcontext");
import { AppsFooter } from "apps-footer/loader";
import { AppsHeader } from "apps-header/loader";
import { AppsContent } from "apps-content/loader";
import { AppsMenus } from "apps-menus/loader";

type Props = Readonly<{
  appName?: string;
  userLogin?: string;
}>;

type State = {
  menuLabel: string;
}

@customElement("app-root")
export class ojetTraining extends Component<ExtendGlobalProps<Props>, State> {
  static defaultProps: Props = {
    appName: "OJET Training",
    userLogin: "Franck Blettner",
  };

  state ={
    menuLabel: "OJET Training"
  }

  render(props: Props, state: State): ComponentChild {

    return (
    <div id="globalBody" class="oj-offcanvas-outer-wrapper oj-offcanvas-page">
          <AppsMenus
            onPageChanged={this.handleMenuPropertiesChanged}
          />
        <div id="appContainer" class="oj-web-applayout-page">
          <AppsHeader
            appName={this.props.appName} 
            userLogin={this.props.userLogin} 
          />
          <AppsContent 
            menuLabel={this.state.menuLabel}
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

}
