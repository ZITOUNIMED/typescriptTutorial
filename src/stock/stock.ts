

export class Stock{
  static STOCK_COUNT:number = 0;
  private ref:string;
  private quantite:number;

  constructor(_ref:string, _quantite:number){
    this.ref = _ref;
    this.quantite = _quantite;
    Stock.STOCK_COUNT++;
    console.log("CREATING STOCK NUMBER "+Stock.STOCK_COUNT);
  }

  getRef():string{
    return this.ref;
  }

  sayHello():void{
    console.log("Hello, world!!");
  }
}

var stock: Stock = new Stock("ref 1", 10);
console.log("Ref: " + stock.getRef());
stock.sayHello();
