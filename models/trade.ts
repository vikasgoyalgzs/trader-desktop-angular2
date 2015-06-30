/**
 * Created by vgoya2 on 6/26/15.
 */
export interface Trade {
  id: number,
  creationTime: any,
  side: string,
  symbol: string,
  quantity: number,
  placed: number,
  executed: number,
  limitPrice: number,
  priority: number,
  status: string,
  trader: string
}
