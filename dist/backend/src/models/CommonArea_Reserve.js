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
const CommonArea_1 = __importDefault(require("./CommonArea"));
const User_1 = __importDefault(require("./User"));
const Payment_1 = __importDefault(require("./Payment"));
let CommonArea_Reserve = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'common_area_reserves',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _id_reserve_decorators;
    let _id_reserve_initializers = [];
    let _id_reserve_extraInitializers = [];
    let _user_decorators;
    let _user_initializers = [];
    let _user_extraInitializers = [];
    let _area_decorators;
    let _area_initializers = [];
    let _area_extraInitializers = [];
    let _date_reserve_decorators;
    let _date_reserve_initializers = [];
    let _date_reserve_extraInitializers = [];
    let _pay_area_decorators;
    let _pay_area_initializers = [];
    let _pay_area_extraInitializers = [];
    let _duration_reserve_decorators;
    let _duration_reserve_initializers = [];
    let _duration_reserve_extraInitializers = [];
    let _common_area_decorators;
    let _common_area_initializers = [];
    let _common_area_extraInitializers = [];
    let _payment_area_decorators;
    let _payment_area_initializers = [];
    let _payment_area_extraInitializers = [];
    var CommonArea_Reserve = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id_reserve = __runInitializers(this, _id_reserve_initializers, void 0);
            this.user = (__runInitializers(this, _id_reserve_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.area = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _area_initializers, void 0));
            this.date_reserve = (__runInitializers(this, _area_extraInitializers), __runInitializers(this, _date_reserve_initializers, void 0));
            this.pay_area = (__runInitializers(this, _date_reserve_extraInitializers), __runInitializers(this, _pay_area_initializers, void 0));
            this.duration_reserve = (__runInitializers(this, _pay_area_extraInitializers), __runInitializers(this, _duration_reserve_initializers, void 0));
            this.common_area = (__runInitializers(this, _duration_reserve_extraInitializers), __runInitializers(this, _common_area_initializers, void 0));
            //TODO: Add the relationship with the Payment model
            this.payment_area = (__runInitializers(this, _common_area_extraInitializers), __runInitializers(this, _payment_area_initializers, void 0));
            __runInitializers(this, _payment_area_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "CommonArea_Reserve");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_reserve_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _user_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => User_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _area_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => CommonArea_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _date_reserve_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DATE,
                allowNull: false
            })];
        _pay_area_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false
            })];
        _duration_reserve_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _common_area_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => CommonArea_1.default, { foreignKey: 'area', targetKey: 'area_name' })];
        _payment_area_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => Payment_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false
            })];
        __esDecorate(null, null, _id_reserve_decorators, { kind: "field", name: "id_reserve", static: false, private: false, access: { has: obj => "id_reserve" in obj, get: obj => obj.id_reserve, set: (obj, value) => { obj.id_reserve = value; } }, metadata: _metadata }, _id_reserve_initializers, _id_reserve_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _area_decorators, { kind: "field", name: "area", static: false, private: false, access: { has: obj => "area" in obj, get: obj => obj.area, set: (obj, value) => { obj.area = value; } }, metadata: _metadata }, _area_initializers, _area_extraInitializers);
        __esDecorate(null, null, _date_reserve_decorators, { kind: "field", name: "date_reserve", static: false, private: false, access: { has: obj => "date_reserve" in obj, get: obj => obj.date_reserve, set: (obj, value) => { obj.date_reserve = value; } }, metadata: _metadata }, _date_reserve_initializers, _date_reserve_extraInitializers);
        __esDecorate(null, null, _pay_area_decorators, { kind: "field", name: "pay_area", static: false, private: false, access: { has: obj => "pay_area" in obj, get: obj => obj.pay_area, set: (obj, value) => { obj.pay_area = value; } }, metadata: _metadata }, _pay_area_initializers, _pay_area_extraInitializers);
        __esDecorate(null, null, _duration_reserve_decorators, { kind: "field", name: "duration_reserve", static: false, private: false, access: { has: obj => "duration_reserve" in obj, get: obj => obj.duration_reserve, set: (obj, value) => { obj.duration_reserve = value; } }, metadata: _metadata }, _duration_reserve_initializers, _duration_reserve_extraInitializers);
        __esDecorate(null, null, _common_area_decorators, { kind: "field", name: "common_area", static: false, private: false, access: { has: obj => "common_area" in obj, get: obj => obj.common_area, set: (obj, value) => { obj.common_area = value; } }, metadata: _metadata }, _common_area_initializers, _common_area_extraInitializers);
        __esDecorate(null, null, _payment_area_decorators, { kind: "field", name: "payment_area", static: false, private: false, access: { has: obj => "payment_area" in obj, get: obj => obj.payment_area, set: (obj, value) => { obj.payment_area = value; } }, metadata: _metadata }, _payment_area_initializers, _payment_area_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        CommonArea_Reserve = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return CommonArea_Reserve = _classThis;
})();
exports.default = CommonArea_Reserve;
