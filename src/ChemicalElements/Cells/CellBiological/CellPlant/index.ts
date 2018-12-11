import { CellBase } from "../CellBase";

export type InterCellPlantType = CellBioloical.Plant.CellType;
/**
 * 定义生物细胞
 * @type BiologicalCellBioloical.CellType
 */
export class CellPlant extends CellBase<InterCellPlantType, {}> {
	private;
	// SI「国际光量计算单位」
	getSunlight(SI) {}
	// 进行光合作用
	photosynthesis() {}
	// 分裂，由角色细胞控制
	onDivision() {
		return new CellPlant(this.CellType);
	}
}
