import { ThunkAction } from 'redux-thunk'
import { InferableComponentEnhancerWithProps } from 'react-redux'

// Connect enhancer
export type TypeOfConnect<T> = T extends InferableComponentEnhancerWithProps<
  infer Props,
  infer _
>
  ? Props
  : never

export type CutMiddleFunction<T> = T extends (
  ...arg: infer Args
) => (...args: any[]) => infer R
  ? (...arg: Args) => R
  : never

export const unboxThunk = <Args extends any[], R, S, E, A extends Action<any>>(
  thunkFn: (...args: Args) => ThunkAction<R, S, E, A>
) => (thunkFn as any) as CutMiddleFunction<typeof thunkFn>

// Infer literal type action
type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type ActionTypes = ReturnType<InferValueTypes<typeof actions>>
