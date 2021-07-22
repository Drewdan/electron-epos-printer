export interface ConfigOptions {
    preview: boolean;
    width: string;
    margins: PageMargins;
    copies: number;
    printerName: string;
    timeOutPerLine: number;
    silent: boolean;
    pageSize: PageSizeOptions;
}
export interface PageSizeOptions {
    height: number;
    width: number;
}
export interface PageMargins {
    marginType: string;
}
