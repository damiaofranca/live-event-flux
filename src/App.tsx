import { QueryClient, QueryClientProvider } from "react-query";
import Pages from "./pages";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<Pages />
		</QueryClientProvider>
	);
}
export default App;
