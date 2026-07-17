import { HWBridgeProvider } from '@buidlerlabs/hashgraph-react-wallets'
import { HashpackConnector, KabilaConnector } from '@buidlerlabs/hashgraph-react-wallets/connectors'
import { HederaTestnet } from '@buidlerlabs/hashgraph-react-wallets/chains'

import DAppLogo from './assets/vite.svg'

const metadata = {
  name: 'HedraPay',
  description: 'Pay for anything everywhere',
  icons: [DAppLogo],
  url: window.location.href,
}

const ReactWalletsProvider = ({ children }) => {
  const projectId = process.env.REACT_APP_WC_PROJECT_ID;

  return (
    <HWBridgeProvider
      metadata={metadata}
      projectId={projectId}
      connectors={[HashpackConnector, KabilaConnector]}
      chains={[HederaTestnet]}
    >
      {children}
    </HWBridgeProvider>
  )
}

export default ReactWalletsProvider;