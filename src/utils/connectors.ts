import { InjectedConnector } from '@web3-react/injected-connector'

const injected = new InjectedConnector({ supportedChainIds: [1, 3, 4, 5, 42, 56, 97] })

export enum ConnectorNames {
  Injected = 'Metamask',
}
  
export const connectorsByName: { [connector: string]: any } = {
  [ConnectorNames.Injected]: injected
}
