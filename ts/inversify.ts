import container from './inversify.config'
import { IDepC } from './common'
import { TYPES } from './types'

const c = container.get<IDepC>(TYPES.IDepC)
c.doC()