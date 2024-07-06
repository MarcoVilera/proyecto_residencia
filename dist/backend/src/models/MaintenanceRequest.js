"use strict";
// class MaintenanceRequest{
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
//     private id: number;
//     private idUserRequest: number;
//     private description: string;
//     private dateRequest: Date;
//     private state: string;
//     constructor(
//         id: number,
//         idUserRequest: number,
//         description: string,
//         dateRequest: Date,
//         state: string
//       ) {
//         this.id = id;
//         this.idUserRequest = idUserRequest;
//         this.description = description;
//         this.dateRequest = dateRequest;
//         this.state = state;
//       }
//       // Getter for id
//       public get getId(): number {
//         return this.id;
//       }
//       // Setter for id (not recommended for modification)
//       public set setId(newId: number) {
//         console.warn("Modifying id after creation is not recommended.");
//         this.id = newId;
//       }
//       // Getter for idUserRequest
//       public get getIdUserRequest(): number {
//         return this.idUserRequest;
//       }
//       // Setter for idUserRequest
//       public set setIdUserRequest(newId: number) {
//         this.idUserRequest = newId;
//       }
//       // Getter for description
//       public get getDescription(): string {
//         return this.description;
//       }
//       // Setter for description
//       public set setDescription(newDescription: string) {
//         this.description = newDescription;
//       }
//       // Getter for dateRequest
//       public get getDateRequest(): Date {
//         return new Date(this.dateRequest.getTime()); // Return a copy to avoid unintended modifications
//       }
//       // Setter for dateRequest (consider immutability for dates)
//       public set setDateRequest(newDate: Date) {
//         this.dateRequest = new Date(newDate.getTime()); // Create a copy to avoid unintended modifications
//       }
//       // Getter for state
//       public get getState(): string {
//         return this.state;
//       }
//       // Setter for state
//       public set setState(newState: string) {
//         this.state = newState;
//       }
// }
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = __importDefault(require("./User"));
let MaintenanceRequests = (() => {
    let _classDecorators = [(0, sequelize_typescript_1.Table)({
            tableName: 'maintenance_requests',
            timestamps: false
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = sequelize_typescript_1.Model;
    let _id_request_decorators;
    let _id_request_initializers = [];
    let _id_request_extraInitializers = [];
    let _user_requesting_decorators;
    let _user_requesting_initializers = [];
    let _user_requesting_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _date_request_decorators;
    let _date_request_initializers = [];
    let _date_request_extraInitializers = [];
    let _state_decorators;
    let _state_initializers = [];
    let _state_extraInitializers = [];
    let _user_request_decorators;
    let _user_request_initializers = [];
    let _user_request_extraInitializers = [];
    var MaintenanceRequests = _classThis = class extends _classSuper {
        constructor() {
            super(...arguments);
            this.id_request = __runInitializers(this, _id_request_initializers, void 0);
            this.user_requesting = (__runInitializers(this, _id_request_extraInitializers), __runInitializers(this, _user_requesting_initializers, void 0));
            this.description = (__runInitializers(this, _user_requesting_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.date_request = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _date_request_initializers, void 0));
            this.state = (__runInitializers(this, _date_request_extraInitializers), __runInitializers(this, _state_initializers, void 0));
            this.user_request = (__runInitializers(this, _state_extraInitializers), __runInitializers(this, _user_request_initializers, void 0));
            __runInitializers(this, _user_request_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "MaintenanceRequests");
    (() => {
        var _a;
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create((_a = _classSuper[Symbol.metadata]) !== null && _a !== void 0 ? _a : null) : void 0;
        _id_request_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            })];
        _user_requesting_decorators = [(0, sequelize_typescript_1.ForeignKey)(() => User_1.default), (0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _description_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _date_request_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.DATE,
                allowNull: false
            })];
        _state_decorators = [(0, sequelize_typescript_1.Column)({
                type: sequelize_typescript_1.DataType.STRING,
                allowNull: false
            })];
        _user_request_decorators = [(0, sequelize_typescript_1.BelongsTo)(() => User_1.default, { foreignKey: 'user_requesting', targetKey: 'name' })];
        __esDecorate(null, null, _id_request_decorators, { kind: "field", name: "id_request", static: false, private: false, access: { has: obj => "id_request" in obj, get: obj => obj.id_request, set: (obj, value) => { obj.id_request = value; } }, metadata: _metadata }, _id_request_initializers, _id_request_extraInitializers);
        __esDecorate(null, null, _user_requesting_decorators, { kind: "field", name: "user_requesting", static: false, private: false, access: { has: obj => "user_requesting" in obj, get: obj => obj.user_requesting, set: (obj, value) => { obj.user_requesting = value; } }, metadata: _metadata }, _user_requesting_initializers, _user_requesting_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _date_request_decorators, { kind: "field", name: "date_request", static: false, private: false, access: { has: obj => "date_request" in obj, get: obj => obj.date_request, set: (obj, value) => { obj.date_request = value; } }, metadata: _metadata }, _date_request_initializers, _date_request_extraInitializers);
        __esDecorate(null, null, _state_decorators, { kind: "field", name: "state", static: false, private: false, access: { has: obj => "state" in obj, get: obj => obj.state, set: (obj, value) => { obj.state = value; } }, metadata: _metadata }, _state_initializers, _state_extraInitializers);
        __esDecorate(null, null, _user_request_decorators, { kind: "field", name: "user_request", static: false, private: false, access: { has: obj => "user_request" in obj, get: obj => obj.user_request, set: (obj, value) => { obj.user_request = value; } }, metadata: _metadata }, _user_request_initializers, _user_request_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        MaintenanceRequests = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return MaintenanceRequests = _classThis;
})();
exports.default = MaintenanceRequests;
