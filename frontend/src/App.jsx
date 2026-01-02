import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import TicketForm from './pages/TicketForm';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm p-4 mb-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl font-bold text-gray-800">Helpdesk AI</h1>
          </div>
        </nav>

        <main className="container mx-auto px-4">
          <Routes>
            <Route path="/" element={<TicketForm />} />
            {/* Future routes: <Route path="/tickets" element={<TicketList />} /> */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
