import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../pages/Home';

function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/" element={<Home />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}

export default Routes;
