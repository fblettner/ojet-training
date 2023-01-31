import { customElement, ExtendGlobalProps } from "ojs/ojvcomponent";
import { h, Component, ComponentChild } from "preact";
/**
 * 
 * @ojmetadata displayName "Apps Footer"
 * @ojmetadata description "Display Footer into an application"
*/

type Props = Readonly<{
  links?: FooterLink[];
  copyright: string;
}>;

type FooterLink = {
  name: string;
  linkId: string;
  linkTarget: string;
}

const _DEFAULT_LINKS: FooterLink[] = [
  {
    name: "About Oracle",
    linkId: "aboutOracle",
    linkTarget: "http://www.oracle.com/us/corporate/index.html#menu-about"
  },
  {
    name: "Contact Us",
    linkId: "contactUs",
    linkTarget: "http://www.oracle.com/us/corporate/contact/index.html"
  },
]


@customElement("apps-footer")
export class AppsFooter extends Component < ExtendGlobalProps < Props >> {
  static defaultProps: Partial < Props > = {
  links: _DEFAULT_LINKS
};

render(props: Props): ComponentChild {
  return (
    <footer class="oj-web-applayout-footer" role="contentinfo">
      <div class="oj-web-applayout-footer-item oj-web-applayout-max-width">
        <ul>
          {this.props.links.map((item) => (
            <li>
              <a id={item.linkId} href={item.linkTarget} target="_blank">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div class="oj-web-applayout-footer-item oj-web-applayout-max-width oj-text-color-secondary oj-typography-body-sm">
        {this.props.copyright}
      </div>
    </footer>
  )
  }
}
