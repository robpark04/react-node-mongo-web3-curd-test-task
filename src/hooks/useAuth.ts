import { useCallback } from 'react'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  connectorsByName,
} from '../utils/connectors'
import { toast } from 'react-toastify';
import { toastOption } from "utils/helper"

const useAuth = () => {
  const connectorLocalStorageKey = "wallet-connector"
  const { activate, deactivate } = useWeb3React()

  const login = useCallback(
    (connectorID: string) => {
      const connector = connectorsByName[connectorID]
      if (connector) {
        if( connectorID === "Metamask") {
          window.localStorage.setItem('wallet', 'Metamask')
        } 
        window.localStorage.setItem(connectorLocalStorageKey, connectorID)

        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
              toast.error("Unsupported ChainId", toastOption);
            } else {
            window.localStorage.removeItem(connectorLocalStorageKey)
            if (error instanceof NoEthereumProviderError) {
              toast.error("No provider was found", toastOption);
            } else if (
              error instanceof UserRejectedRequestErrorInjected
            ) {
              toast.error("Please authorize to access your account", toastOption);

            } else {
              console.log(error.name, error.message)
              toast.error(error.message, toastOption);
            }
          }
        })
      } else {
        toast.error("The connector config is wrong", toastOption);
      }
    },
    [activate],
  )

  const logout = useCallback(() => {
    deactivate()
    window.localStorage.removeItem(connectorLocalStorageKey)
  }, [deactivate])

  const isAuth = () => {
    const connectorLocalStorageValue = window.localStorage.getItem(connectorLocalStorageKey);
    return (window.localStorage.getItem(connectorLocalStorageKey)) ? connectorLocalStorageValue : false
  }

  return { login, logout, isAuth }
}

export default useAuth
