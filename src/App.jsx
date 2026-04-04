import { Routes, Route, Navigate } from 'react-router-dom'
import { usePlayerStore } from './stores/usePlayerStore'
import AppShell from './components/layout/AppShell'
import StartScreen from './components/screens/StartScreen'
import StarterSelect from './components/screens/StarterSelect'
import WorldMap from './components/screens/WorldMap'
import WorldMapScreen from './components/screens/WorldMapScreen'
import GymScreen from './components/screens/GymScreen'
import ChallengeScreen from './components/screens/ChallengeScreen'
import PokedexScreen from './components/screens/PokedexScreen'
import TrainerCard from './components/screens/TrainerCard'
import ExploreMap from './components/screens/ExploreMap'
import GymBattle from './components/screens/GymBattle'

function ProtectedRoute({ children }) {
  const starterId = usePlayerStore((s) => s.starterId)
  if (!starterId) return <Navigate to="/" replace />
  return children
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<StartScreen />} />
      <Route path="/starter" element={<StarterSelect />} />
      <Route
        element={
          <ProtectedRoute>
            <AppShell />
          </ProtectedRoute>
        }
      >
        <Route path="/map" element={<WorldMap />} />
        <Route path="/worldmap" element={<WorldMapScreen />} />
        <Route path="/explore" element={<ExploreMap />} />
        <Route path="/gym/:gymId" element={<GymScreen />} />
        <Route path="/gym/:gymId/challenge/:challengeId" element={<ChallengeScreen />} />
        <Route path="/gym/:gymId/battle" element={<GymBattle />} />
        <Route path="/pokedex" element={<PokedexScreen />} />
        <Route path="/trainer" element={<TrainerCard />} />
      </Route>
    </Routes>
  )
}
