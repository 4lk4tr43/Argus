/**
 * Created by andreaskaufmann on 19/05/15.
 */

interface PolymerObject {
    is: string;
    ready: () => void;
}

declare function Polymer(obj: PolymerObject);