import { Ability } from "../dataModels/ability.model";
import { Stats } from "../dataModels/stats.model";

export interface Champion{
    ability:Ability,
    apiName: String,
    cost: number,
    icon: String,
    name: String,
    stats: Stats,
    traits: String[]
}