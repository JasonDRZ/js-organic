declare namespace CellBioloical {
	// 「动物」和「植物」类型标识
	type CellTypes = "animal" | "plant";
}
declare namespace CellBioloical.Base {
	function getCellType(): CellBioloical.CellTypes;
	type CellState = {
		// 出生日期
		birthday: number;
		// 是否死去
		isDied: boolean;
	};
}
declare namespace CellBioloical.Plant {
	// 「植物」细胞类型标识
	type CellType = "plant";
}
declare namespace CellBioloical.Animal {
	// 「植物」细胞类型标识
	type CellType = "animal";
}
