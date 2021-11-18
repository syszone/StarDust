import tokens from './tokens'
import { FarmConfig } from './types'

const farms: FarmConfig[] = [

  {
    pid: 0,
    lpSymbol: 'SD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x081Fa7129Dde4D822BB64bEfEd0d06d9458f77F2',
    },
    token: tokens.sd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: tokens.busd,
    quoteToken: tokens.wbnb,
  },
  {
    pid: 2,
    lpSymbol: 'SD-BTCB LP',
    lpAddresses: {
      97: '',
      56: '0xFb776B5075A7138E1e3C128bC5A8d29d196a5369',
    },
    token: tokens.sd,
    quoteToken: tokens.btcb,
  },
  // {
  //   pid: 4,
  //   lpSymbol: 'wBNB',
  //   isTokenOnly: true,
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', /* 0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c */
  //   },
  //   token: tokens.wbnb,
  //   quoteToken: tokens.busd,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'BUSD',
  //   isTokenOnly: true,
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56',
  //   },
  //   token: tokens.busd,
  //   quoteToken: tokens.busd,
  // },
]

export default farms
