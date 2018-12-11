export type InterBiologicalCellProp = CellBioloical.CellTypes;
export type InterCellBaseState = CellBioloical.Base.CellState;
export class CellBase<InterBiologicalCellProp, InterCellBaseState> {
	/**
	 * 细胞固有属性
	 */
	// 细胞类型
	protected CellType: InterBiologicalCellProp;
	// 细胞实例ID
	protected CellIdentity: Symbol;

	/**
	 * 细胞生命周期
	 */
	// 细胞生命时长：3分钟
	private _lifeDuration: number = 3e3 * 60;
	// 是否已经死去
	private _isDied: boolean = false;
	// 细胞生日
	private _cellBirthday: number = Date.now();

	/**
	 * 定义生物细胞的基础类
	 * @param prop CellBioloical.CellTypes
	 */
	constructor(prop: InterBiologicalCellProp, state?: InterCellBaseState) {
		this.CellType = prop;
		this.CellIdentity = Symbol(prop.toString());
		this.init();
	}
	/**
	 * 生命周期控制器
	 */
	private init() {
		this.runLifecircle();
	}
	private runLifecircle() {
		this.onBorn();
		setTimeout(() => {
			this._isDied = true;
			this.onDied();
		}, this._lifeDuration);
	}

	/**
	 * 生命周期Hook
	 */
	// 降生
	onBorn() {}
	// 死去
	onDied() {}
	/**
	 * 生命周期状态询问
	 */
	// 搜是否死了？
	public amIDied() {
		return this._isDied;
	}
	public howLongCanILive() {
		return;
	}
}
