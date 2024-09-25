import { DeployUniswapV3Action, type actions } from '@infinit-xyz/uniswap-v3/actions'
import type { z } from 'zod'

type Param = z.infer<typeof actions['init']['paramsSchema']>

// TODO: Replace with actual params
const params: Param = {
  // Native currency label (e.g., ETH)
  "nativeCurrencyLabel": 'ETH',

  // Address of the owner of the proxy admin
  "proxyAdminOwner": '0x87faa6f432ff9ad445c58e44903f05534c717c64',

  // Address of the owner of factory
  "factoryOwner": '0x87faa6f432ff9ad445c58e44903f05534c717c64',

  // Address of the wrapped native token (e.g., WETH)
  "wrappedNativeToken": '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
}

// Signer configuration
const signer = {
  "deployer": "0xkoJ11"
}

export default { params, signer, Action: DeployUniswapV3Action }
