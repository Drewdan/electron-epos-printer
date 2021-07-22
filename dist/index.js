"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = __importDefault(require("electron"));
class PrintService {
    constructor(config) {
        this.options = config;
        this.data = ['<body style="margin: 0; padding: 0;">'];
    }
    /**
     * Add a header to the reciept
     *
     * @param header
     * @param center
     */
    addHeader(header, center = false) {
        if (center) {
            this.data.push('<h4 style="width: 100%; text-align: center;">' + header + '</h4>');
            return this;
        }
        this.data.push('<h4>' + header + '</h4>');
        return this;
    }
    addText(text) {
        this.data.push('<p>' + text + '</p>');
        return this;
    }
    /**
     * Add a table to the receipt
     *
     * @param headers an array of headers
     * @param content an array containing sub arrays with elements to match the count of the headers
     */
    addTable(headers, content) {
        this.data.push('<table>');
        this.data.push('<tr>');
        headers.forEach((header) => {
            this.data.push('<td>' + header + '</td>');
        });
        this.data.push('</tr>');
        content.forEach((x) => {
            this.data.push('<tr>');
            x.forEach((y) => {
                this.data.push('<td>' + y + '</td>');
            });
            this.data.push('</tr>');
        });
        this.data.push('</table>');
        return this;
    }
    /**
     * Print the receipt
     */
    print() {
        let win = new electron_1.default.remote.BrowserWindow();
        win.hide();
        this.data.push('</body>');
        const html = this.data.join('');
        console.debug('the parsed html', html);
        win.loadURL('data:text/html;charset=utf-8,' + encodeURI(html))
            .then(() => {
            win.webContents.print(this.options, (success, failureReason) => {
                if (success) {
                    win.close();
                }
                else {
                    console.error('There was an error printing', failureReason);
                }
                console.log('Print Initiated');
            });
        });
    }
}
exports.default = PrintService;
//# sourceMappingURL=index.js.map