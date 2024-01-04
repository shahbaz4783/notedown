import { Notes } from './pages/Notes';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Notes />
    </ThemeProvider>
  )
}

export default App
