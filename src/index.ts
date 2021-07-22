import electron from "electron";
import { ConfigOptions } from "./contracts";

export default class PrintService {
	data: string[];
	options;


	constructor(config: ConfigOptions) {
		this.options = config;
		this.data = ['<body style="margin: 0; padding: 0;">'];
	}

	/**
	 * Add a header to the receipt
	 *
	 * @param header - the header as a string
	 * @param center - defaults to false, if true, the header will be centrally aligned
	 */
	addHeader(header: string, center: boolean = false): PrintService {
		if (center) {
			this.data.push('<h4 style="width: 100%; text-align: center;">' + header + '</h4>');
			return this;
		}
		this.data.push('<h4>' + header + '</h4>');
		return this;
	}

	/**
	 * Adds text to the receipt
	 * @param text
	 */
	addText(text: string): PrintService {
		this.data.push('<p>' + text + '</p>');
		return this;
	}

	/**
	 * Add a table to the receipt
	 *
	 * @param headers an array of headers
	 * @param content an array containing sub arrays with elements to match the count of the headers
	 */
	addTable(headers: string[], content: string[][]) {
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
	print(): void {
		let win = new electron.remote.BrowserWindow();
		win.hide();


		this.data.push('</body>');
		const html = this.data.join('');
		console.debug('the parsed html', html);
		win.loadURL('data:text/html;charset=utf-8,' + encodeURI(html))
			.then(() => {
				win.webContents.print(this.options, (success, failureReason) => {
					if (success) {
						win.close();
					} else {
						console.error('There was an error printing', failureReason);
					}
				});

			});

	}
}
