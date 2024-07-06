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
const User_1 = __importDefault(require("./User"));
const Cash_1 = __importDefault(require("./Cash"));
let Payments = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'payments',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _payment_id_decorators;
    let _payment_id_initializers = [];
    let _payment_id_extraInitializers = [];
    let _payment_date_decorators;
    let _payment_date_initializers = [];
    let _payment_date_extraInitializers = [];
    let _payment_amount_decorators;
    let _payment_amount_initializers = [];
    let _payment_amount_extraInitializers = [];
    let _user_decorators;
    let _user_initializers = [];
    let _user_extraInitializers = [];
    let _pay_user_decorators;
    let _pay_user_initializers = [];
    let _pay_user_extraInitializers = [];
    let _Area_Reserve_decorators;
    let _Area_Reserve_initializers = [];
    let _Area_Reserve_extraInitializers = [];
    let _Cash_decorators;
    let _Cash_initializers = [];
    let _Cash_extraInitializers = [];
    var Payments = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.payment_id = __runInitializers(this, _payment_id_initializers, void 0);
            this.payment_date = (__runInitializers(this, _payment_id_extraInitializers), __runInitializers(this, _payment_date_initializers, void 0));
            this.payment_amount = (__runInitializers(this, _payment_date_extraInitializers), __runInitializers(this, _payment_amount_initializers, void 0));
            this.user = (__runInitializers(this, _payment_amount_extraInitializers), __runInitializers(this, _user_initializers, void 0));
            this.pay_user = (__runInitializers(this, _user_extraInitializers), __runInitializers(this, _pay_user_initializers, void 0));
            this.Area_Reserve = (__runInitializers(this, _pay_user_extraInitializers), __runInitializers(this, _Area_Reserve_initializers, void 0));
            this.Cash = (__runInitializers(this, _Area_Reserve_extraInitializers), __runInitializers(this, _Cash_initializers, void 0));
            __runInitializers(this, _Cash_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Payments");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _payment_id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _payment_date_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DATE,
                allowNull: false
            })];
        _payment_amount_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.FLOAT,
                allowNull: false
            })];
        _user_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => User_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false
            })];
        _pay_user_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => User_1.default)];
        _Area_Reserve_decorators = [(0, sequelize_typescript_1.HasOne)(() => CommonArea_Reserve_1.default, { onDelete: 'NO ACTION', sourceKey: 'payment_id' })];
        _Cash_decorators = [(0, sequelize_typescript_1.HasOne)(() => Cash_1.default, { onDelete: 'NO ACTION', sourceKey: 'payment_id' })];
        __esDecorate(null, null, _payment_id_decorators, { kind: "field", name: "payment_id", static: false, private: false, access: { has: obj => "payment_id" in obj, get: obj => obj.payment_id, set: (obj, value) => { obj.payment_id = value; } }, metadata: _metadata }, _payment_id_initializers, _payment_id_extraInitializers);
        __esDecorate(null, null, _payment_date_decorators, { kind: "field", name: "payment_date", static: false, private: false, access: { has: obj => "payment_date" in obj, get: obj => obj.payment_date, set: (obj, value) => { obj.payment_date = value; } }, metadata: _metadata }, _payment_date_initializers, _payment_date_extraInitializers);
        __esDecorate(null, null, _payment_amount_decorators, { kind: "field", name: "payment_amount", static: false, private: false, access: { has: obj => "payment_amount" in obj, get: obj => obj.payment_amount, set: (obj, value) => { obj.payment_amount = value; } }, metadata: _metadata }, _payment_amount_initializers, _payment_amount_extraInitializers);
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } }, metadata: _metadata }, _user_initializers, _user_extraInitializers);
        __esDecorate(null, null, _pay_user_decorators, { kind: "field", name: "pay_user", static: false, private: false, access: { has: obj => "pay_user" in obj, get: obj => obj.pay_user, set: (obj, value) => { obj.pay_user = value; } }, metadata: _metadata }, _pay_user_initializers, _pay_user_extraInitializers);
        __esDecorate(null, null, _Area_Reserve_decorators, { kind: "field", name: "Area_Reserve", static: false, private: false, access: { has: obj => "Area_Reserve" in obj, get: obj => obj.Area_Reserve, set: (obj, value) => { obj.Area_Reserve = value; } }, metadata: _metadata }, _Area_Reserve_initializers, _Area_Reserve_extraInitializers);
        __esDecorate(null, null, _Cash_decorators, { kind: "field", name: "Cash", static: false, private: false, access: { has: obj => "Cash" in obj, get: obj => obj.Cash, set: (obj, value) => { obj.Cash = value; } }, metadata: _metadata }, _Cash_initializers, _Cash_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Payments = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Payments = _classThis;
})();
exports.default = Payments;
