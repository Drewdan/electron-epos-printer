# Electron Epos Printer

This package provides a small printer service to make printing receipts a little easier.

The project itself is in its infancy, and has only a small amount of features these feature include:

- Adding headers
- Adding paragraphs of text
- Adding tables

Firstly you need to instantiate the class with the required configuration:

```js
const printConfig = {
        preview: false, // Preview in window or print
        width: '200px', //  width of content body
        margins: {
            marginType: 'none',
        }, // margin of content body
        copies: 1, // Number of copies to print
        printerName: 'Your printer name', // printerName: string, check it at webContent.getPrinters()
        timeOutPerLine: 200,
        silent: true,
        pageSize: {
            height: 301000,
            width: 71000
        }
    };


    const printService = new PrintService(printConfig);
    
    printService.addHeader('Receipt', true)
        .addTable(
        	['Some', 'heading', 'row'],
            [
            	['row', 'one', 'entry'],
                ['row', 'two', 'entry'],
            ],
        )
        .addText('Total Order: $10.00')
		.addText('Thank you for your order');
    
    printService.print();
    
```

## Print Config Structure

|  Config Item  |  Type  |  Description  |
| ------------- | ------ | ------------- |
| preview | boolean | The default value is false, if set to true, a preview window will load and no printing will occur |
| width | string | The width in pixels of the printing |
| margins | object | and object containing the marginType |
| copies | number | The amount of copies you wish to print |
| printerName | string | This is the printer name. It must be the string representation of the printer name |
| timeOutPerLine | number | Default to 200 - the timeout per line |
| silent | boolean | If true, the printer config options will appear before printing |
| pageSize | object | An object containing the height and width of the page size |

## Compatibility

In testing, this only works on node version  14.17.3 (with npm 6.14.3) - there appears to 
be compiler issues on the current node version which needs investigating.

## Contributing

Any contributions are welcome and if there are any features you wish to see added, please
open an issue, and I will take a look at them.
