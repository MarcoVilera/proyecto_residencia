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
const Payment_1 = __importDefault(require("./Payment"));
const ServicePayment_1 = __importDefault(require("./ServicePayment"));
let Cash = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'cash',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _cash_id_decorators;
    let _cash_id_initializers = [];
    let _cash_id_extraInitializers = [];
    let _input_date_decorators;
    let _input_date_initializers = [];
    let _input_date_extraInitializers = [];
    let _output_date_decorators;
    let _output_date_initializers = [];
    let _output_date_extraInitializers = [];
    let _amount_decorators;
    let _amount_initializers = [];
    let _amount_extraInitializers = [];
    let _payment_decorators;
    let _payment_initializers = [];
    let _payment_extraInitializers = [];
    let _pay_cash_decorators;
    let _pay_cash_initializers = [];
    let _pay_cash_extraInitializers = [];
    let _service_payment_decorators;
    let _service_payment_initializers = [];
    let _service_payment_extraInitializers = [];
    var Cash = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.cash_id = __runInitializers(this, _cash_id_initializers, void 0);
            this.input_date = (__runInitializers(this, _cash_id_extraInitializers), __runInitializers(this, _input_date_initializers, void 0));
            this.output_date = (__runInitializers(this, _input_date_extraInitializers), __runInitializers(this, _output_date_initializers, void 0));
            this.amount = (__runInitializers(this, _output_date_extraInitializers), __runInitializers(this, _amount_initializers, void 0));
            this.payment = (__runInitializers(this, _amount_extraInitializers), __runInitializers(this, _payment_initializers, void 0));
            this.pay_cash = (__runInitializers(this, _payment_extraInitializers), __runInitializers(this, _pay_cash_initializers, void 0));
            this.service_payment = (__runInitializers(this, _pay_cash_extraInitializers), __runInitializers(this, _service_payment_initializers, void 0));
            __runInitializers(this, _service_payment_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Cash");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _cash_id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _input_date_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DATE,
                allowNull: false
            })];
        _output_date_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DATE,
                allowNull: true
            })];
        _amount_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.FLOAT,
                allowNull: false
            })];
        _payment_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => Payment_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false
            })];
        _pay_cash_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => Payment_1.default)];
        _service_payment_decorators = [(0, sequelize_typescript_1.HasOne)(() => ServicePayment_1.default, { onDelete: 'NO ACTION', sourceKey: 'cash_id' })];
        __esDecorate(null, null, _cash_id_decorators, { kind: "field", name: "cash_id", static: false, private: false, access: { has: obj => "cash_id" in obj, get: obj => obj.cash_id, set: (obj, value) => { obj.cash_id = value; } }, metadata: _metadata }, _cash_id_initializers, _cash_id_extraInitializers);
        __esDecorate(null, null, _input_date_decorators, { kind: "field", name: "input_date", static: false, private: false, access: { has: obj => "input_date" in obj, get: obj => obj.input_date, set: (obj, value) => { obj.input_date = value; } }, metadata: _metadata }, _input_date_initializers, _input_date_extraInitializers);
        __esDecorate(null, null, _output_date_decorators, { kind: "field", name: "output_date", static: false, private: false, access: { has: obj => "output_date" in obj, get: obj => obj.output_date, set: (obj, value) => { obj.output_date = value; } }, metadata: _metadata }, _output_date_initializers, _output_date_extraInitializers);
        __esDecorate(null, null, _amount_decorators, { kind: "field", name: "amount", static: false, private: false, access: { has: obj => "amount" in obj, get: obj => obj.amount, set: (obj, value) => { obj.amount = value; } }, metadata: _metadata }, _amount_initializers, _amount_extraInitializers);
        __esDecorate(null, null, _payment_decorators, { kind: "field", name: "payment", static: false, private: false, access: { has: obj => "payment" in obj, get: obj => obj.payment, set: (obj, value) => { obj.payment = value; } }, metadata: _metadata }, _payment_initializers, _payment_extraInitializers);
        __esDecorate(null, null, _pay_cash_decorators, { kind: "field", name: "pay_cash", static: false, private: false, access: { has: obj => "pay_cash" in obj, get: obj => obj.pay_cash, set: (obj, value) => { obj.pay_cash = value; } }, metadata: _metadata }, _pay_cash_initializers, _pay_cash_extraInitializers);
        __esDecorate(null, null, _service_payment_decorators, { kind: "field", name: "service_payment", static: false, private: false, access: { has: obj => "service_payment" in obj, get: obj => obj.service_payment, set: (obj, value) => { obj.service_payment = value; } }, metadata: _metadata }, _service_payment_initializers, _service_payment_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Cash = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Cash = _classThis;
})();
exports.default = Cash;
