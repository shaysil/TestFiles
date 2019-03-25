import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import './Appcustomizer.css';
import 'jqueryui';
export interface ISPLists {
    value: ISPList[];
}
export interface ISPList {
    Title: string;
    Id: string;
}
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISearchHeaderApplicationCustomizerProperties {
    Top: string;
    Bottom: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class SearchHeaderApplicationCustomizer extends BaseApplicationCustomizer<ISearchHeaderApplicationCustomizerProperties> {
    private _topPlaceholder;
    private _bottomPlaceholder;
    onInit(): Promise<void>;
    constructor();
    private _renderListAsync();
    private _renderPlaceHolders();
    private readItems();
    private _onDispose();
}
