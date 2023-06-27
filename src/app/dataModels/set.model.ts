import { Champion } from "../champs/champion.model";
import { Trait } from "../traits/trait.model";

export interface Set{
    9:{
        champions: Champion[];
        name: String;
        traits: Trait[];
    };
}