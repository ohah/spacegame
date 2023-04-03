import { Header } from 'components';
import { Switch } from 'components/widget';
import { useRecoilState } from 'recoil';
import { ITheme, ThemeState } from 'theme/atom';

function App() {
  const [theme, setTheme] = useRecoilState<ITheme>(ThemeState);
  return (
    <main
      data-theme={`${theme.theme}`}
      className="min-h-screen w-full theme-cyan:text-gray-200 theme-cyan:bg-cyan-700 theme-dark:text-gray-100 theme-dark:bg-black"
    >
      <div className="flex justify-center w-full">
        <button data-theme={`${theme.theme}`} className="theme-cyan:bg-cyan-500 p-4 rounded" type="button">
          daㄴㅇㄹ px
        </button>
      </div>

      <Header />
      <Switch
        onChange={() => {
          const newTheme = { ...theme };
          newTheme.theme = newTheme.theme === 'dark' ? 'cyan' : 'dark';
          setTheme(newTheme);
        }}
      />
      <div className="h-[500px] w-[120px] border cyan:bg-blue-500 dark:bg-black">ㅁㄴㅇㄹ</div>
    </main>
  );
}

export default App;
