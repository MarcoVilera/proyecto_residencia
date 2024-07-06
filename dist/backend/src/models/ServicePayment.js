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
const Cash_1 = __importDefault(require("./Cash"));
let ServicePayment = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'service_payments',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _service_id_decorators;
    let _service_id_initializers = [];
    let _service_id_extraInitializers = [];
    let _service_name_decorators;
    let _service_name_initializers = [];
    let _service_name_extraInitializers = [];
    let _payment_amount_decorators;
    let _payment_amount_initializers = [];
    let _payment_amount_extraInitializers = [];
    let _cash_movement_decorators;
    let _cash_movement_initializers = [];
    let _cash_movement_extraInitializers = [];
    let _pay_cash_decorators;
    let _pay_cash_initializers = [];
    let _pay_cash_extraInitializers = [];
    var ServicePayment = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.service_id = __runInitializers(this, _service_id_initializers, void 0);
            this.service_name = (__runInitializers(this, _service_id_extraInitializers), __runInitializers(this, _service_name_initializers, void 0));
            this.payment_amount = (__runInitializers(this, _service_name_extraInitializers), __runInitializers(this, _payment_amount_initializers, void 0));
            this.cash_movement = (__runInitializers(this, _payment_amount_extraInitializers), __runInitializers(this, _cash_movement_initializers, void 0));
            this.pay_cash = (__runInitializers(this, _cash_movement_extraInitializers), __runInitializers(this, _pay_cash_initializers, void 0));
            __runInitializers(this, _pay_cash_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "ServicePayment");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _service_id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _service_name_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _payment_amount_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.FLOAT,
                allowNull: false
            })];
        _cash_movement_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => Cash_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false
            })];
        _pay_cash_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => Cash_1.default)];
        __esDecorate(null, null, _service_id_decorators, { kind: "field", name: "service_id", static: false, private: false, access: { has: obj => "service_id" in obj, get: obj => obj.service_id, set: (obj, value) => { obj.service_id = value; } }, metadata: _metadata }, _service_id_initializers, _service_id_extraInitializers);
        __esDecorate(null, null, _service_name_decorators, { kind: "field", name: "service_name", static: false, private: false, access: { has: obj => "service_name" in obj, get: obj => obj.service_name, set: (obj, value) => { obj.service_name = value; } }, metadata: _metadata }, _service_name_initializers, _service_name_extraInitializers);
        __esDecorate(null, null, _payment_amount_decorators, { kind: "field", name: "payment_amount", static: false, private: false, access: { has: obj => "payment_amount" in obj, get: obj => obj.payment_amount, set: (obj, value) => { obj.payment_amount = value; } }, metadata: _metadata }, _payment_amount_initializers, _payment_amount_extraInitializers);
        __esDecorate(null, null, _cash_movement_decorators, { kind: "field", name: "cash_movement", static: false, private: false, access: { has: obj => "cash_movement" in obj, get: obj => obj.cash_movement, set: (obj, value) => { obj.cash_movement = value; } }, metadata: _metadata }, _cash_movement_initializers, _cash_movement_extraInitializers);
        __esDecorate(null, null, _pay_cash_decorators, { kind: "field", name: "pay_cash", static: false, private: false, access: { has: obj => "pay_cash" in obj, get: obj => obj.pay_cash, set: (obj, value) => { obj.pay_cash = value; } }, metadata: _metadata }, _pay_cash_initializers, _pay_cash_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ServicePayment = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ServicePayment = _classThis;
})();
exports.default = ServicePayment;
