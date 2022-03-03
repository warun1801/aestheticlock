import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { useColorScheme } from '@mantine/hooks';
import { ActionIcon } from '@mantine/core';
import { SunIcon, MoonIcon } from '@modulz/radix-icons';

// function Demo() {
//   const { colorScheme, toggleColorScheme } = useMantineColorScheme();
//   const dark = colorScheme === 'dark';

//   return (
//     <ActionIcon
//       variant="outline"
//       color={dark ? 'yellow' : 'blue'}
//       onClick={() => toggleColorScheme()}
//       title="Toggle color scheme"
//     >
//       {dark ? (
//         <SunIcon style={{ width: 18, height: 18 }} />
//       ) : (
//         <MoonIcon style={{ width: 18, height: 18 }} />
//       )}
//     </ActionIcon>
//   );
// }

export function Main(){
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useState(preferredColorScheme);
  console.log(colorScheme);
  const toggleColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  let dark = colorScheme === 'dark';
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={ {colorScheme, fontFamily: 'Raleway, sans serif'} } withGlobalStyles>
        <ActionIcon
          variant="outline"
          color={dark ? 'yellow' : 'blue'}
          onClick={() => toggleColorScheme()}
          title="Toggle color scheme"
        >
          {dark ? (
            <SunIcon style={{ width: 18, height: 18 }} />
          ) : (
            <MoonIcon style={{ width: 18, height: 18 }} />
          )}
        </ActionIcon>
        <App />
      </MantineProvider>
    </ColorSchemeProvider>
  );
} 



ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
