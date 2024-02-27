import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));

// const heading = <h1>Hello world</h1>;

// const heading = React.createElement('h1', null, 'Hello world');

// const content = (
//   <div>
//     <h1>Heading</h1>
//     <p>Content</p>
//   </div>
// );

// const content = React.createElement(
//   'div',
//   null,
//   React.createElement('h1', null, 'Heading'),
//   React.createElement('p', null, 'Content')
// );

root.render(<App />);
