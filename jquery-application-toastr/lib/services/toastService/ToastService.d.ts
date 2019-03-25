import Guid from '@microsoft/sp-core-library/lib/Guid';
import { SPHttpClient } from '@microsoft/sp-http';
import { IToast } from './IToast';
/** Returns items from the Toast list and caches the results */
export declare class ToastService {
    private static readonly storageKeyBase;
    private static readonly getFromListAlways;
    /** Retrieves toasts that should be displayed for the given user*/
    static getToasts(spHttpClient: SPHttpClient, baseUrl: string, webId: Guid): Promise<IToast[]>;
    /** Stores the date/time a toast was acknowledged, used to control what shows on the next refresh
     * @param {number} id - The list ID of the toast to acknowledge
    */
    static acknowledgeToast(id: number, webId: Guid): void;
    private static webStorageKey(webId);
    /** Rehydrates spfxToastr data from localStorage (or creates a new empty set) */
    private static retrieveCache(webId);
    /** Serializes spfxToastr data into localStorage */
    private static storeCache(cachedData, webId);
    /** Retrieves toasts from either the cache or the list depending on the cache's freshness */
    private static ensureToasts(spHttpClient, baseUrl, webId);
    private static readonly apiEndPoint;
    private static readonly select;
    private static readonly orderby;
    /** Pulls the active toast entries directly from the underlying list */
    private static getToastsFromList(spHttpClient, baseUrl);
    /** Helper function to return the index of an IToastStatus object by the Id property */
    private static indexOfToastStatusById(Id, toastStatuses);
    /** Helper function to clean up the toast statuses by removing old toasts */
    private static processCache(cachedData);
    /** Adjusts the toasts to display based on what the user has already acknowledged and the toast's frequency value*/
    private static reduceToasts(cachedData);
}
