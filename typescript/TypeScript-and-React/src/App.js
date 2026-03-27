import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import './App.css';
import Button from './components/Button';
function App() {
    return (_jsx(_Fragment, { children: _jsx(Button, { onClick: () => alert("Thanks for Clicking!!"), text: 'click Me!' }) }));
}
export default App;
//# sourceMappingURL=App.js.map