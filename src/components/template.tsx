/*
 * Copyright (c) 2022 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */
import { customElement, ExtendGlobalProps } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
/**
 * 
 * @ojmetadata displayName "A user friendly, translatable name of the component"
 * @ojmetadata description "A translatable high-level description for the component"
*/

type Props = Readonly<{
  message?: string;
}>;


@customElement("apps-content")
export class TemplateComponent extends Component < ExtendGlobalProps < Props >> {
  static defaultProps: Partial < Props > = {
};

render(props: Props): ComponentChild {
  return (
    <div class="oj-web-applayout-max-width oj-web-applayout-content">
    </div>
  );
  }
}
