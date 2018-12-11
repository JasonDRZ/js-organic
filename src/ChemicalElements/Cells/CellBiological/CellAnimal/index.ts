import { CellBase } from "../CellBase";

export type InterCellAnimalType = CellBioloical.Animal.CellType;
/**
 * 定义生物细胞
 * @type BiologicalCellBioloical.CellType
 */
export class CellAnimal extends CellBase<InterCellAnimalType, {}> {
	// 分裂，由角色细胞控制
	onDivision() {
		return new CellBase(this.CellType);
	}
}
