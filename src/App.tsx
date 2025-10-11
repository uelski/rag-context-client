import '@mantine/core/styles.css';
import { AppShell, Box, Container, createTheme, Group, MantineProvider, Title, type MantineColorsTuple } from '@mantine/core';

const myColor: MantineColorsTuple = [
  '#f1f4fe',
  '#e4e6ed',
  '#c8cad3',
  '#a9adb9',
  '#9094a3',
  '#7f8496',
  '#777c91',
  '#63687c',
  '#595e72',
  '#4a5167'
];

const theme = createTheme({
  colors: {
    myColor,
  },
});

function App() {

  return (
    <MantineProvider theme={theme}>
      <Box bg="black" mih="100dvh" w="100%">
      <AppShell
        header={{ height: 60 }}
        padding="md"
        >
          <AppShell.Header withBorder={true} style={{ borderColor: theme!.colors!.myColor![4] }} >
            <Group bg="black" c="white" h="100%" px="md">
              RAG DEMO
            </Group>
          </AppShell.Header>
          <AppShell.Main>
            <Container p="lg">
                <Title c="white" ta="center">File Upload and Query</Title>

            </Container>

          </AppShell.Main>
        </AppShell>
      </Box>
    </MantineProvider>
  )
}

export default App
