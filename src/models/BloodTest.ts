import Morfology from "@/models/Morfology";
import Biochemy from "@/models/Biochemy";
import Immunology from "@/models/Immunology";

export default class BloodTest {
    name: string;
    morfology: Morfology;
    biochemy: Biochemy;
    immunology: Immunology;
    constructor(name: string, morfology: Morfology, biochemy: Biochemy, immunology: Immunology) {
        this.name = name;
        this.morfology = morfology;
        this.biochemy = biochemy;
        this.immunology = immunology;
    }
}
