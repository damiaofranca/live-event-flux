import { QueryClientProvider } from "react-query";

import Pages from "./pages";
import { queryClient } from "./api";

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Pages />
		</QueryClientProvider>
	);
}
export default App;
