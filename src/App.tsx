import { GlobalStyles } from './styles/GlobalStyles';
import { Router } from './Routes';
import { RatingContextProvider } from './contexts/RatingContext';

const App = () => {
  return (
    <RatingContextProvider>
      <GlobalStyles />
      <Router />
    </RatingContextProvider>
  )
}

export default App
