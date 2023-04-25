
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import reducers from './reducers';
import App from './components/App';


const el = document.getElementById('root');

const root = createRoot(el);

const store = createStore(reducers , {} , applyMiddleware());


root.render(
<Provider store={store}>
   <App /> 
</Provider>
);


//method to upload and download from google cloud
