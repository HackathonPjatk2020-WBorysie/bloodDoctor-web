import Morfology from "@/models/Morfology";
import Biochemy from "@/models/Biochemy";
import Immunology from "@/models/Immunology";

export default class BloodTest {
    name: string;
    Morfology: Morfology;
    Biochemy: Biochemy;
    Immunology: Immunology;
    constructor(name: string, Morfology: Morfology, Biochemy: Biochemy, Immunology: Immunology) {
        this.name = name;
        this.Morfology = Morfology;
        this.Biochemy = Biochemy;
        this.Immunology = Immunology;
    }
}
