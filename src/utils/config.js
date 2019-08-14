import { get } from 'lodash'
import assert from 'assert'

const artifacts = [
  require('2100-contracts/build/contracts/Controller'),
  require('2100-contracts/build/contracts/ERC20')
]

export const networkId = process.env.REACT_APP_NETWORK_ID
export const host = process.env.REACT_APP_SOCKET_URL
export const disableAuth = JSON.parse(process.env.REACT_APP_DISABLE_AUTH || 'false')

assert(networkId != null, 'A networkId is required')
assert(host != null, 'A host is required')

export const contracts = artifacts.reduce((contracts, artifact) => {
  contracts[artifact.contractName] = {
    contractName: artifact.contractName,
    abi: artifact.abi,
    address: get(artifact, ['networks', networkId, 'address'])
  }
  return contracts
}, {})

const networkNames = {
  '2100': 'Artax Testnet',
  '1': 'Ethereum Mainnet'
}

const stakeLevels = Number(process.env.REACT_APP_STAKE_LEVELS || 2)

export default {
  networkName: networkNames[networkId.toString()],
  networkId,
  host,
  disableAuth,
  stakeLevels,
  contracts
}
