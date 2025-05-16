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
function loadHeader() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("../components/headers.html");
            const data = yield response.text();
            const headerElement = document.getElementById("header");
            if (headerElement) {
                headerElement.innerHTML = data;
            }
        }
        catch (error) {
            console.error('erreur lors du chargement');
        }
    });
}
loadHeader();
function loadHeaderMain() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("../components/header.html");
            const data = yield response.text();
            const headerElement = document.getElementById("headerMain");
            if (headerElement) {
                headerElement.innerHTML = data;
            }
        }
        catch (error) {
            console.error('erreur lors du chargement');
        }
    });
}
loadHeaderMain();
function loadMain() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("../components/mainIndex.html");
            const data = yield response.text();
            const headerElement = document.getElementById("main");
            if (headerElement) {
                headerElement.innerHTML = data;
            }
        }
        catch (error) {
            console.error('erreur lors du chargement');
        }
    });
}
loadMain();
function loadFooter() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("../components/footer.html");
            const data = yield response.text();
            const headerElement = document.getElementById("footer");
            if (headerElement) {
                headerElement.innerHTML = data;
            }
        }
        catch (error) {
            console.error('erreur lors du chargement');
        }
    });
}
loadFooter();
