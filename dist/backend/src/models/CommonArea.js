"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const CommonArea_Reserve_1 = __importDefault(require("./CommonArea_Reserve"));
let CommonAreas = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'common_areas',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _id_area_decorators;
    let _id_area_initializers = [];
    let _id_area_extraInitializers = [];
    let _area_name_decorators;
    let _area_name_initializers = [];
    let _area_name_extraInitializers = [];
    let _OpenTime_decorators;
    let _OpenTime_initializers = [];
    let _OpenTime_extraInitializers = [];
    let _CloseTime_decorators;
    let _CloseTime_initializers = [];
    let _CloseTime_extraInitializers = [];
    let _cost_area_decorators;
    let _cost_area_initializers = [];
    let _cost_area_extraInitializers = [];
    let _available_decorators;
    let _available_initializers = [];
    let _available_extraInitializers = [];
    let _Reservations_decorators;
    let _Reservations_initializers = [];
    let _Reservations_extraInitializers = [];
    var CommonAreas = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id_area = __runInitializers(this, _id_area_initializers, void 0);
            this.area_name = (__runInitializers(this, _id_area_extraInitializers), __runInitializers(this, _area_name_initializers, void 0));
            this.OpenTime = (__runInitializers(this, _area_name_extraInitializers), __runInitializers(this, _OpenTime_initializers, void 0));
            this.CloseTime = (__runInitializers(this, _OpenTime_extraInitializers), __runInitializers(this, _CloseTime_initializers, void 0));
            this.cost_area = (__runInitializers(this, _CloseTime_extraInitializers), __runInitializers(this, _cost_area_initializers, void 0));
            this.available = (__runInitializers(this, _cost_area_extraInitializers), __runInitializers(this, _available_initializers, void 0));
            this.Reservations = (__runInitializers(this, _available_extraInitializers), __runInitializers(this, _Reservations_initializers, void 0));
            __runInitializers(this, _Reservations_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "CommonAreas");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_area_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _area_name_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false,
                unique: true
            })];
        _OpenTime_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DATE,
                allowNull: false
            })];
        _CloseTime_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DATE,
                allowNull: false
            })];
        _cost_area_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.FLOAT,
                allowNull: false
            })];
        _available_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _Reservations_decorators = [(0, sequelize_typescript_1.HasMany)(() => CommonArea_Reserve_1.default, { onDelete: 'NO ACTION', sourceKey: 'area_name' })];
        __esDecorate(null, null, _id_area_decorators, { kind: "field", name: "id_area", static: false, private: false, access: { has: obj => "id_area" in obj, get: obj => obj.id_area, set: (obj, value) => { obj.id_area = value; } }, metadata: _metadata }, _id_area_initializers, _id_area_extraInitializers);
        __esDecorate(null, null, _area_name_decorators, { kind: "field", name: "area_name", static: false, private: false, access: { has: obj => "area_name" in obj, get: obj => obj.area_name, set: (obj, value) => { obj.area_name = value; } }, metadata: _metadata }, _area_name_initializers, _area_name_extraInitializers);
        __esDecorate(null, null, _OpenTime_decorators, { kind: "field", name: "OpenTime", static: false, private: false, access: { has: obj => "OpenTime" in obj, get: obj => obj.OpenTime, set: (obj, value) => { obj.OpenTime = value; } }, metadata: _metadata }, _OpenTime_initializers, _OpenTime_extraInitializers);
        __esDecorate(null, null, _CloseTime_decorators, { kind: "field", name: "CloseTime", static: false, private: false, access: { has: obj => "CloseTime" in obj, get: obj => obj.CloseTime, set: (obj, value) => { obj.CloseTime = value; } }, metadata: _metadata }, _CloseTime_initializers, _CloseTime_extraInitializers);
        __esDecorate(null, null, _cost_area_decorators, { kind: "field", name: "cost_area", static: false, private: false, access: { has: obj => "cost_area" in obj, get: obj => obj.cost_area, set: (obj, value) => { obj.cost_area = value; } }, metadata: _metadata }, _cost_area_initializers, _cost_area_extraInitializers);
        __esDecorate(null, null, _available_decorators, { kind: "field", name: "available", static: false, private: false, access: { has: obj => "available" in obj, get: obj => obj.available, set: (obj, value) => { obj.available = value; } }, metadata: _metadata }, _available_initializers, _available_extraInitializers);
        __esDecorate(null, null, _Reservations_decorators, { kind: "field", name: "Reservations", static: false, private: false, access: { has: obj => "Reservations" in obj, get: obj => obj.Reservations, set: (obj, value) => { obj.Reservations = value; } }, metadata: _metadata }, _Reservations_initializers, _Reservations_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CommonAreas = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CommonAreas = _classThis;
})();
exports.default = CommonAreas;
