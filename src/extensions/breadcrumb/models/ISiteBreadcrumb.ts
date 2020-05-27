import { IBreadcrumbItem } from "office-ui-fabric-react/lib";
import { ApplicationCustomizerContext } from "@microsoft/sp-application-base";

export interface ISiteBreadcrumbProps {
    context: ApplicationCustomizerContext;
}

export interface ISiteBreadcrumbState {
    breadcrumbItems: IBreadcrumbItem[];
}

export interface IWebInfo {
    Id: string;
    Title: string;
    ServerRelativeUrl: string;
    error?: any;
}

