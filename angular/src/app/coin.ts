export class Coin {
  constructor(public name: string,
              public baseAsset: number,
              public quoteAsset: number,
              public lastPrice: number,
              public  volumn24h: number,
              // tslint:disable-next-line:variable-name
              public marketId_id: number,
              public createdAt: number,
              public updatedAt: number,
              public status: number
              ) {}
}
