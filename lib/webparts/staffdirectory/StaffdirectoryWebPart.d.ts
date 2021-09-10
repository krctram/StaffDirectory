import { Version } from "@microsoft/sp-core-library";
import { IPropertyPaneConfiguration } from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import "../../ExternalRef/Js/jquery-1.12.4.js";
import "../../ExternalRef/Js/jquery-ui.js";
import "@pnp/sp/files";
import "@pnp/sp/folders";
import "@pnp/sp/profiles";
import "@pnp/sp/site-groups";
import "../../ExternalRef/Js/select2.min.js";
import "../../ExternalRef/CSS/style.css";
export interface IStaffdirectoryWebPartProps {
    description: string;
}
import "../../ExternalRef/css/alertify.min.css";
export default class StaffdirectoryWebPart extends BaseClientSideWebPart<IStaffdirectoryWebPartProps> {
    onInit(): Promise<void>;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=StaffdirectoryWebPart.d.ts.map