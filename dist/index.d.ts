import { ConfigOptions } from "./contracts";
export default class PrintService {
    data: string[];
    options: any;
    constructor(config: ConfigOptions);
    /**
     * Add a header to the reciept
     *
     * @param header
     * @param center
     */
    addHeader(header: string, center?: boolean): PrintService;
    addText(text: string): PrintService;
    /**
     * Add a table to the receipt
     *
     * @param headers an array of headers
     * @param content an array containing sub arrays with elements to match the count of the headers
     */
    addTable(headers: string[], content: string[][]): this;
    /**
     * Print the receipt
     */
    print(): void;
}
