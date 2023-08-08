"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTask = exports.deleteTask = exports.viewTask = exports.createTask = void 0;
const taskModel_1 = __importDefault(require("../model/taskModel"));
const authModel_1 = __importDefault(require("../model/authModel"));
const mongoose_1 = __importDefault(require("mongoose"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { authID } = req.params;
        const { taskName } = req.body;
        const user = yield authModel_1.default.findById(authID);
        const tasked = yield taskModel_1.default.create({ taskName, user: user });
        (_a = user === null || user === void 0 ? void 0 : user.tasked) === null || _a === void 0 ? void 0 : _a.push(new mongoose_1.default.Types.ObjectId(tasked._id));
        user === null || user === void 0 ? void 0 : user.save();
        res.status(201).json({
            message: "task created sucessfully",
            data: tasked
        });
        console.log(tasked);
    }
    catch (error) {
        res.status(404).json({
            message: "error creating Task"
        });
    }
});
exports.createTask = createTask;
const viewTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tasked = yield taskModel_1.default.find();
        res.status(200).json({
            message: "task viewed sucessfully",
            data: tasked
        });
    }
    catch (error) {
        res.status(404).json({
            message: "error viewing Task"
        });
    }
});
exports.viewTask = viewTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tasked = yield taskModel_1.default.findByIdAndDelete(id);
        res.status(201).json({
            message: "task deleted sucessfully",
            data: tasked
        });
    }
    catch (error) {
        res.status(404).json({
            message: "error deleting Task"
        });
    }
});
exports.deleteTask = deleteTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { task } = req.body;
        const tasked = yield taskModel_1.default.findByIdAndUpdate(id, { task }, { new: true });
        res.status(201).json({
            message: "task updated sucessfully",
            data: tasked
        });
    }
    catch (error) {
        res.status(404).json({
            message: "error updating Task"
        });
    }
});
exports.updateTask = updateTask;
