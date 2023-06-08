import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './components/UI/header/Header'
import { Collection } from './pages/Collection'
import { CollectionColors } from './pages/CollectionColors'
import { CollectionPalettes } from './pages/CollectionPalettes'
import { Picker } from './pages/Picker'
import { Palette } from './pages/Palette'

function App() {
	return (
		<div className='App'>
			<Header />
			<div className='main'>
				<Routes>
					<Route path='/' element={<Navigate to='/picker' />} />
					<Route path='/picker'>
						<Route index element={<Picker />} />
						<Route path=':colorId' element={<Picker />} />
					</Route>
					<Route path='/palette'>
						<Route index element={<Palette />} />
						<Route path=':paletteId' element={<Palette />} />
					</Route>
					<Route path='/collection'>
						<Route index element={<Collection />} />
						<Route path='colors' element={<CollectionColors />} />
						<Route
							path='palettes'
							element={<CollectionPalettes />}
						/>
					</Route>
					<Route
						path='*'
						element={<div>Страницы не существует</div>}
					/>
				</Routes>
			</div>
		</div>
	)
}

export default App
