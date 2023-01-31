import { customElement, ExtendGlobalProps } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";

type Props = Readonly<{
  message?: string;
}>;

/**
 * 
 * @ojmetadata version "1.0.0"
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
*/
@customElement("apps-config")
export class AppsConfig extends Component < ExtendGlobalProps < Props >> {
  static defaultProps: Partial < Props > = {
  message: "Hello from apps-config!"
};

render(props: Props): ComponentChild {
  return<p>{ props.message }</p>;
  }
}
