import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import './index.scss'
import { ChakraProvider } from '@chakra-ui/react'

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(
	<Provider store={store}>
		<BrowserRouter>
			<ChakraProvider
				toastOptions={{
					defaultOptions: {
						position: 'bottom',
						duration: 1000,
						containerStyle: {
							padding: '0 0 10px 0',
							maxWidth: '100%',
						},
					},
				}}
			>
				<App />
			</ChakraProvider>
		</BrowserRouter>
	</Provider>
)
