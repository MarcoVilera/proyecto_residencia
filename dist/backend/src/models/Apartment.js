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
const Owner_1 = __importDefault(require("./Owner"));
const Resident_1 = __importDefault(require("./Resident"));
let Apartments = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'apartments',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _apartment_id_decorators;
    let _apartment_id_initializers = [];
    let _apartment_id_extraInitializers = [];
    let _state_decorators;
    let _state_initializers = [];
    let _state_extraInitializers = [];
    let _owner_decorators;
    let _owner_initializers = [];
    let _owner_extraInitializers = [];
    let _Residents_decorators;
    let _Residents_initializers = [];
    let _Residents_extraInitializers = [];
    let _Owner_decorators;
    let _Owner_initializers = [];
    let _Owner_extraInitializers = [];
    var Apartments = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.apartment_id = __runInitializers(this, _apartment_id_initializers, void 0);
            this.state = (__runInitializers(this, _apartment_id_extraInitializers), __runInitializers(this, _state_initializers, void 0));
            this.owner = (__runInitializers(this, _state_extraInitializers), __runInitializers(this, _owner_initializers, void 0));
            this.Residents = (__runInitializers(this, _owner_extraInitializers), __runInitializers(this, _Residents_initializers, void 0));
            this.Owner = (__runInitializers(this, _Residents_extraInitializers), __runInitializers(this, _Owner_initializers, void 0));
            __runInitializers(this, _Owner_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Apartments");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _apartment_id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _state_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _owner_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => Owner_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: true
            })];
        _Residents_decorators = [(0, sequelize_typescript_1.HasMany)(() => Resident_1.default)];
        _Owner_decorators = [(0, sequelize_typescript_1.HasOne)(() => Owner_1.default)];
        __esDecorate(null, null, _apartment_id_decorators, { kind: "field", name: "apartment_id", static: false, private: false, access: { has: obj => "apartment_id" in obj, get: obj => obj.apartment_id, set: (obj, value) => { obj.apartment_id = value; } }, metadata: _metadata }, _apartment_id_initializers, _apartment_id_extraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: obj => "state" in obj, get: obj => obj.state, set: (obj, value) => { obj.state = value; } }, metadata: _metadata }, _state_initializers, _state_extraInitializers);
        __esDecorate(null, null, _owner_decorators, { kind: "field", name: "owner", static: false, private: false, access: { has: obj => "owner" in obj, get: obj => obj.owner, set: (obj, value) => { obj.owner = value; } }, metadata: _metadata }, _owner_initializers, _owner_extraInitializers);
        __esDecorate(null, null, _Residents_decorators, { kind: "field", name: "Residents", static: false, private: false, access: { has: obj => "Residents" in obj, get: obj => obj.Residents, set: (obj, value) => { obj.Residents = value; } }, metadata: _metadata }, _Residents_initializers, _Residents_extraInitializers);
        __esDecorate(null, null, _Owner_decorators, { kind: "field", name: "Owner", static: false, private: false, access: { has: obj => "Owner" in obj, get: obj => obj.Owner, set: (obj, value) => { obj.Owner = value; } }, metadata: _metadata }, _Owner_initializers, _Owner_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Apartments = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Apartments = _classThis;
})();
exports.default = Apartments;
