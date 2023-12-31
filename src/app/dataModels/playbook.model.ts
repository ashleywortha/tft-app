export interface Playbook{
    name: string,
    itemId: number,
    contentId: string,
    capTypeId: string,
    offerId: string,
    alternateOfferId: string,
    translatedName: string,
    earlyAugments:[],
    midAugments:[],
    lateAugments:[],
    loadoutsIcon:string,
    enabled:boolean,
    iconPath:string,
    iconPathSmall:string,
    splashPath:string,
    isDisabledInToubledUp: boolean,
    isDisabledInSoulFighter: boolean,
    
}