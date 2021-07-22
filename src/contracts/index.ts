export interface ConfigOptions {
	preview: boolean, // Preview in window or print
	width: string, //  width of content body
	margins: PageMargins
	copies: number, // Number of copies to print
	printerName: string, // printerName: string, check it at webContent.getPrinters()
	timeOutPerLine: number,
	silent: boolean,
	pageSize: PageSizeOptions;
}

export interface PageSizeOptions {
	height: number;
	width: number;
}

export interface PageMargins {
	marginType: string;
}
