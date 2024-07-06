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
const User_1 = __importDefault(require("./User"));
let Role = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'roles',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _rol_id_decorators;
    let _rol_id_initializers = [];
    let _rol_id_extraInitializers = [];
    let _rol_name_decorators;
    let _rol_name_initializers = [];
    let _rol_name_extraInitializers = [];
    let _admin_decorators;
    let _admin_initializers = [];
    let _admin_extraInitializers = [];
    let _create_users_decorators;
    let _create_users_initializers = [];
    let _create_users_extraInitializers = [];
    let _edit_users_decorators;
    let _edit_users_initializers = [];
    let _edit_users_extraInitializers = [];
    let _delete_users_decorators;
    let _delete_users_initializers = [];
    let _delete_users_extraInitializers = [];
    let _create_quotas_decorators;
    let _create_quotas_initializers = [];
    let _create_quotas_extraInitializers = [];
    let _edit_quotas_decorators;
    let _edit_quotas_initializers = [];
    let _edit_quotas_extraInitializers = [];
    let _delete_quotas_decorators;
    let _delete_quotas_initializers = [];
    let _delete_quotas_extraInitializers = [];
    let _see_cash_decorators;
    let _see_cash_initializers = [];
    let _see_cash_extraInitializers = [];
    let _insert_on_cash_decorators;
    let _insert_on_cash_initializers = [];
    let _insert_on_cash_extraInitializers = [];
    let _extract_of_cash_decorators;
    let _extract_of_cash_initializers = [];
    let _extract_of_cash_extraInitializers = [];
    let _can_reserve_areas_decorators;
    let _can_reserve_areas_initializers = [];
    let _can_reserve_areas_extraInitializers = [];
    let _can_register_payments_decorators;
    let _can_register_payments_initializers = [];
    let _can_register_payments_extraInitializers = [];
    let _users_decorators;
    let _users_initializers = [];
    let _users_extraInitializers = [];
    var Role = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.rol_id = __runInitializers(this, _rol_id_initializers, void 0);
            this.rol_name = (__runInitializers(this, _rol_id_extraInitializers), __runInitializers(this, _rol_name_initializers, void 0));
            this.admin = (__runInitializers(this, _rol_name_extraInitializers), __runInitializers(this, _admin_initializers, void 0));
            this.create_users = (__runInitializers(this, _admin_extraInitializers), __runInitializers(this, _create_users_initializers, void 0));
            this.edit_users = (__runInitializers(this, _create_users_extraInitializers), __runInitializers(this, _edit_users_initializers, void 0));
            this.delete_users = (__runInitializers(this, _edit_users_extraInitializers), __runInitializers(this, _delete_users_initializers, void 0));
            this.create_quotas = (__runInitializers(this, _delete_users_extraInitializers), __runInitializers(this, _create_quotas_initializers, void 0));
            this.edit_quotas = (__runInitializers(this, _create_quotas_extraInitializers), __runInitializers(this, _edit_quotas_initializers, void 0));
            this.delete_quotas = (__runInitializers(this, _edit_quotas_extraInitializers), __runInitializers(this, _delete_quotas_initializers, void 0));
            this.see_cash = (__runInitializers(this, _delete_quotas_extraInitializers), __runInitializers(this, _see_cash_initializers, void 0));
            this.insert_on_cash = (__runInitializers(this, _see_cash_extraInitializers), __runInitializers(this, _insert_on_cash_initializers, void 0));
            this.extract_of_cash = (__runInitializers(this, _insert_on_cash_extraInitializers), __runInitializers(this, _extract_of_cash_initializers, void 0));
            this.can_reserve_areas = (__runInitializers(this, _extract_of_cash_extraInitializers), __runInitializers(this, _can_reserve_areas_initializers, void 0));
            this.can_register_payments = (__runInitializers(this, _can_reserve_areas_extraInitializers), __runInitializers(this, _can_register_payments_initializers, void 0));
            this.users = (__runInitializers(this, _can_register_payments_extraInitializers), __runInitializers(this, _users_initializers, void 0));
            __runInitializers(this, _users_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "Role");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _rol_id_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _rol_name_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false,
                unique: true
            })];
        _admin_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _create_users_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _edit_users_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _delete_users_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _create_quotas_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _edit_quotas_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _delete_quotas_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _see_cash_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _insert_on_cash_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _extract_of_cash_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _can_reserve_areas_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _can_register_payments_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.BOOLEAN,
                allowNull: false
            })];
        _users_decorators = [(0, sequelize_typescript_1.HasMany)(() => User_1.default, { onDelete: 'NO ACTION', sourceKey: 'rol_name' })];
        __esDecorate(null, null, _rol_id_decorators, { kind: "field", name: "rol_id", static: false, private: false, access: { has: obj => "rol_id" in obj, get: obj => obj.rol_id, set: (obj, value) => { obj.rol_id = value; } }, metadata: _metadata }, _rol_id_initializers, _rol_id_extraInitializers);
        __esDecorate(null, null, _rol_name_decorators, { kind: "field", name: "rol_name", static: false, private: false, access: { has: obj => "rol_name" in obj, get: obj => obj.rol_name, set: (obj, value) => { obj.rol_name = value; } }, metadata: _metadata }, _rol_name_initializers, _rol_name_extraInitializers);
        __esDecorate(null, null, _admin_decorators, { kind: "field", name: "admin", static: false, private: false, access: { has: obj => "admin" in obj, get: obj => obj.admin, set: (obj, value) => { obj.admin = value; } }, metadata: _metadata }, _admin_initializers, _admin_extraInitializers);
        __esDecorate(null, null, _create_users_decorators, { kind: "field", name: "create_users", static: false, private: false, access: { has: obj => "create_users" in obj, get: obj => obj.create_users, set: (obj, value) => { obj.create_users = value; } }, metadata: _metadata }, _create_users_initializers, _create_users_extraInitializers);
        __esDecorate(null, null, _edit_users_decorators, { kind: "field", name: "edit_users", static: false, private: false, access: { has: obj => "edit_users" in obj, get: obj => obj.edit_users, set: (obj, value) => { obj.edit_users = value; } }, metadata: _metadata }, _edit_users_initializers, _edit_users_extraInitializers);
        __esDecorate(null, null, _delete_users_decorators, { kind: "field", name: "delete_users", static: false, private: false, access: { has: obj => "delete_users" in obj, get: obj => obj.delete_users, set: (obj, value) => { obj.delete_users = value; } }, metadata: _metadata }, _delete_users_initializers, _delete_users_extraInitializers);
        __esDecorate(null, null, _create_quotas_decorators, { kind: "field", name: "create_quotas", static: false, private: false, access: { has: obj => "create_quotas" in obj, get: obj => obj.create_quotas, set: (obj, value) => { obj.create_quotas = value; } }, metadata: _metadata }, _create_quotas_initializers, _create_quotas_extraInitializers);
        __esDecorate(null, null, _edit_quotas_decorators, { kind: "field", name: "edit_quotas", static: false, private: false, access: { has: obj => "edit_quotas" in obj, get: obj => obj.edit_quotas, set: (obj, value) => { obj.edit_quotas = value; } }, metadata: _metadata }, _edit_quotas_initializers, _edit_quotas_extraInitializers);
        __esDecorate(null, null, _delete_quotas_decorators, { kind: "field", name: "delete_quotas", static: false, private: false, access: { has: obj => "delete_quotas" in obj, get: obj => obj.delete_quotas, set: (obj, value) => { obj.delete_quotas = value; } }, metadata: _metadata }, _delete_quotas_initializers, _delete_quotas_extraInitializers);
        __esDecorate(null, null, _see_cash_decorators, { kind: "field", name: "see_cash", static: false, private: false, access: { has: obj => "see_cash" in obj, get: obj => obj.see_cash, set: (obj, value) => { obj.see_cash = value; } }, metadata: _metadata }, _see_cash_initializers, _see_cash_extraInitializers);
        __esDecorate(null, null, _insert_on_cash_decorators, { kind: "field", name: "insert_on_cash", static: false, private: false, access: { has: obj => "insert_on_cash" in obj, get: obj => obj.insert_on_cash, set: (obj, value) => { obj.insert_on_cash = value; } }, metadata: _metadata }, _insert_on_cash_initializers, _insert_on_cash_extraInitializers);
        __esDecorate(null, null, _extract_of_cash_decorators, { kind: "field", name: "extract_of_cash", static: false, private: false, access: { has: obj => "extract_of_cash" in obj, get: obj => obj.extract_of_cash, set: (obj, value) => { obj.extract_of_cash = value; } }, metadata: _metadata }, _extract_of_cash_initializers, _extract_of_cash_extraInitializers);
        __esDecorate(null, null, _can_reserve_areas_decorators, { kind: "field", name: "can_reserve_areas", static: false, private: false, access: { has: obj => "can_reserve_areas" in obj, get: obj => obj.can_reserve_areas, set: (obj, value) => { obj.can_reserve_areas = value; } }, metadata: _metadata }, _can_reserve_areas_initializers, _can_reserve_areas_extraInitializers);
        __esDecorate(null, null, _can_register_payments_decorators, { kind: "field", name: "can_register_payments", static: false, private: false, access: { has: obj => "can_register_payments" in obj, get: obj => obj.can_register_payments, set: (obj, value) => { obj.can_register_payments = value; } }, metadata: _metadata }, _can_register_payments_initializers, _can_register_payments_extraInitializers);
        __esDecorate(null, null, _users_decorators, { kind: "field", name: "users", static: false, private: false, access: { has: obj => "users" in obj, get: obj => obj.users, set: (obj, value) => { obj.users = value; } }, metadata: _metadata }, _users_initializers, _users_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Role = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Role = _classThis;
})();
exports.default = Role;
